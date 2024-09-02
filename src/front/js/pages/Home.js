import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import SearchBar from "../component/Home/SearchBar";
import CardScroll from "../component/Home/CardScroll";

export const Home = () => {
    const { store, actions } = useContext(Context);

    // Ejemplo de datos para las tarjetas
    const cardsData = [
        {
            image_shop_url: "https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&w=600",
            id: 1,
            shop_name: "Card 1",
            shop_summary: "Description for card 1",
            link: "/link1"
        },
        {
            image_shop_url: "https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&w=600'",
            id: 2,

            shop_name: "Card 2",
            shop_summary: "Description for card 2",
            link: "/link2"
        },
        {
            image_shop_url: "https://images.pexels.com/photos/1050283/pexels-photo-1050283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 3,

            shop_name: "Card 3",
            shop_summary: "Description for card 3",
            link: "/link3"
        },
        {
            image_shop_url: "https://images.pexels.com/photos/1050283/pexels-photo-1050283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 4,
            shop_name: "Card 3",
            shop_summary: "Description for card 3",
            link: "/link3"
        },
        {
            image_shop_url: "https://images.pexels.com/photos/1050283/pexels-photo-1050283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 5,
            shop_name: "Card 3",
            shop_summary: "Description for card 3",
            link: "/link3"
        },
        {
            image_shop_url: "https://images.pexels.com/photos/1050283/pexels-photo-1050283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 6,
            shop_name: "Card 3",
            shop_summary: "Description for card 3",
            link: "/link3"
        }
        // Agrega más tarjetas según sea necesario
    ];

    return (
        <div className="text-center mt-5 mx-5">
            <h1>LiquiBoxes</h1>
            <div>
                <SearchBar />
            </div>
            {/* Renderiza CardScroll y pasa los datos de las tarjetas */}
            <CardScroll cardsData={cardsData} />
        </div>
    );
};
