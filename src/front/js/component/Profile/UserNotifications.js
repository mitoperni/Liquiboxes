import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faEnvelopeOpen, faList, faShoppingCart, faCheck, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Table } from 'react-bootstrap';
import '../../../styles/usernotifications.css';
import Spinner from '../Spinner';
import ModalGlobal from '../ModalGlobal';

const UserNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [filteredNotifications, setFilteredNotifications] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [notificationsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [modalGlobalOpen, setModalGlobalOpen] = useState(false);
    const [modalGlobalContent, setModalGlobalContent] = useState({ title: '', body: '' });


    useEffect(() => {
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 30000); // Poll every 30 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            filterNotifications();
        }
    }, [notifications, filter, isLoading]);

    const showModalGlobal = (title, body) => {
        setModalGlobalContent({ title, body });
        setModalGlobalOpen(true);
    };

    const fetchNotifications = async () => {
        try {
            const response = await axios.get(`${process.env.BACKEND_URL}/notifications/user`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            setNotifications(response.data.filter(n => !['contact_support', 'contact_user', 'contact_shop'].includes(n.type)));

            // Introduce a minimum delay of 1 second
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        } catch (error) {
            showModalGlobal('Error', 'No se pudieron cargar las notificaciones. Por favor, inténtalo de nuevo.');
            setIsLoading(false);
        }
    };

    const filterNotifications = () => {
        let filtered = notifications;
        switch (filter) {
            case 'unread':
                filtered = notifications.filter(n => !n.is_read);
                break;
            case 'read':
                filtered = notifications.filter(n => n.is_read);
                break;
            case 'purchase_confirmation':
                filtered = notifications.filter(n => n.type === 'purchase_confirmation');
                break;
            case 'confirmation':
                filtered = notifications.filter(n => n.type === 'confirmation');
                break;
            case 'sale_sent':
                filtered = notifications.filter(n => n.type === 'sale_sent');
                break;
            default:
                filtered = notifications;
                break;
        }
        setFilteredNotifications(filtered);
    };

    const markNotificationAsRead = async (notificationId, isRead) => {
        try {
            await axios.patch(`${process.env.BACKEND_URL}/notifications/${notificationId}/read`,
                { is_read: isRead },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                }
            );
            return true;
        } catch (error) {
            console.error(`Error marking notification ${notificationId} as ${isRead ? 'read' : 'unread'}:`, error);
            return false;
        }
    };

    const handleNotificationClick = async (notification) => {
        setSelectedNotification(notification);
        setIsModalOpen(true);
        if (!notification.is_read) {
            const success = await markNotificationAsRead(notification.id, true);
            if (success) {
                setNotifications(notifications.map(n =>
                    n.id === notification.id ? { ...n, is_read: true } : n
                ));
            }
        }
    };

    const handleMarkAsUnread = async (e, notificationId) => {
        e.stopPropagation();
        const success = await markNotificationAsRead(notificationId, false);
        if (success) {
            setNotifications(notifications.map(n =>
                n.id === notificationId ? { ...n, is_read: false } : n
            ));
            if (filter === 'read') {
                setFilteredNotifications(prevFiltered => prevFiltered.filter(n => n.id !== notificationId));
            }
        }
    };

    const handleMarkAllRead = async () => {
        const results = await Promise.all(
            notifications.filter(n => !n.is_read).map(n => markNotificationAsRead(n.id, true))
        );
        if (results.every(result => result)) {
            setNotifications(notifications.map(n => ({ ...n, is_read: true })));
        } else {
            showModalGlobal('Error', 'Algunas notificaciones no se pudieron marcar como leídas. Por favor, inténtalo de nuevo.');
        }
        fetchNotifications();
    };

    const notificationConfig = {
        purchase_confirmation: {
            label: 'Nueva Compra',
            icon: faShoppingCart,
        },
        confirmation: {
            label: 'Confirmación de compra',
            icon: faCheck,
        },
        sale_sent: {
            label: 'Pedido enviado',
            icon: faShoppingCart,
        },
        // Add more types as needed
    };

    const getNotificationConfig = (type) => {
        return notificationConfig[type] || { label: 'Notificación', icon: faBell };
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
    const currentNotifications = filteredNotifications.slice(indexOfFirstNotification, indexOfLastNotification);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const FilterButtons = ({ currentFilter }) => {
        const filters = [
            { key: 'all', label: 'Todas', icon: faList },
            { key: 'unread', label: 'No leídas', icon: faEnvelope },
            { key: 'read', label: 'Leídas', icon: faEnvelopeOpen },
            { key: 'purchase_confirmation', label: 'Nueva compra', icon: faShoppingCart },
            { key: 'confirmation', label: 'Confirmaciones', icon: faCheck },
            { key: 'sale_sent', label: 'Pedidos enviados', icon: faShoppingCart },
        ];

        return (
            <div className="filter-buttons mb-4">
                {filters.map(({ key, label, icon }) => (
                    <Button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={`filter-button ${currentFilter === key ? 'active' : ''}`}
                    >
                        <FontAwesomeIcon icon={icon} className="me-2" />
                        {label}
                    </Button>
                ))}
            </div>
        );
    };

    const handleDeleteNotificaction = async (notificationId) => { //BOTON ELIMINAR NOTIFICACIONES ////////
        try {
            const response = await axios.delete(`${process.env.BACKEND_URL}/notifications/${notificationId}/delete`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });

            if (response.status === 200) {
                setNotifications(notifications.filter(n => n.id !== notificationId));
            } else {
                showModalGlobal('Error', 'No se pudo eliminar la notificación. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            showModalGlobal('Error', 'Ocurrió un error al eliminar la notificación. Por favor, inténtalo de nuevo.');
        }
    };

    if (isLoading) return <Spinner />

    return (
        <>
            <div className="user-notifications container">
                <div className="d-flex justify-content-between align-items-center mb-4">                    
                        <h2>Notificaciones</h2>                     
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faBell} className="mr-2 me-2" />
                        <span className="badge">
                            {notifications.filter(n => !n.is_read).length} No leídas
                        </span>
                    </div>
                </div>

                <FilterButtons currentFilter={filter} />

                <Button onClick={handleMarkAllRead} variant="secondary" className="mb-4 custom-dropdown-toggle">
                    Marcar todas como leídas
                </Button>

                <Table className="notifications-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentNotifications.map((notification) => {
                            const config = getNotificationConfig(notification.type);
                            return (
                                <tr
                                    key={notification.id}
                                    onClick={() => handleNotificationClick(notification)}
                                    className='py-3 py-lg-0'
                                >
                                    <td data-label="Tipo">
                                        <FontAwesomeIcon icon={config.icon} className="me-2" />
                                        {config.label}
                                    </td>
                                    <td data-label="Fecha">{formatDate(notification.created_at)}</td>
                                    <td data-label="Estado">
                                        {notification.is_read ? (
                                            <FontAwesomeIcon icon={faEnvelopeOpen} className="text-muted" />
                                        ) : (
                                            <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                                        )}
                                    </td>
                                    <td data-label="Acciones">
                                        <Button className='me-4 '//BOTON ELIMINAR NOTIFICACIONES
                                            onClick={(e) => {
                                                e.stopPropagation();  // Evita que se dispare el evento de click en la fila
                                                handleDeleteNotificaction(notification.id);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} /> Borrar
                                        </Button>
                                        {notification.is_read && (
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={(e) => handleMarkAsUnread(e, notification.id)}
                                                id="mark-as-unread"
                                            >
                                                <FontAwesomeIcon icon={faEnvelope} /> Marcar como no léida
                                            </Button>
                                        )}

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div className="pagination">
                    {[...Array(Math.ceil(filteredNotifications.length / notificationsPerPage)).keys()].map(number => (
                        <Button
                            key={number + 1}
                            onClick={() => paginate(number + 1)}
                            className={currentPage === number + 1 ? 'active' : ''}
                        >
                            {number + 1}
                        </Button>
                    ))}
                </div>

                <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} className="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Detalles de la Notificación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="notification-details">
                            <h3>
                                <FontAwesomeIcon icon={getNotificationConfig(selectedNotification?.type).icon} className="me-2" />
                                {getNotificationConfig(selectedNotification?.type).label}
                            </h3>
                            <p>{selectedNotification?.content}</p>
                            <p>{selectedNotification ? formatDate(selectedNotification.created_at) : ''}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div >

            <ModalGlobal
                isOpen={modalGlobalOpen}
                onClose={() => setModalGlobalOpen(false)}
                title={modalGlobalContent.title}
                body={modalGlobalContent.body}
                buttonBody="Cerrar"
            />


        </>

    );
};

export default UserNotifications;