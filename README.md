# 🎁 Liquiboxes: Mystery Boxes, Unbox Excitement!

Liquiboxes is an innovative platform that revolutionizes how businesses manage inventory and how customers shop. We connect small and large vendors looking to **liquidate stock** quickly with buyers seeking **quality products at irresistible prices** through **personalized Mystery Boxes**. 🛍️

Esto es una prueba

---

## 🧑‍💼 About Us

Liquiboxes was founded by three passionate programming students: **Miguel**, **Michell**, and **Elis**. Our mission is to help businesses efficiently liquidate their stock while connecting them with customers looking for **high-quality products at unbeatable prices**.

---

## 🎯 Our Mission

We aim to **transform** the way businesses manage their inventory while offering customers a **unique shopping experience**. The excitement of receiving a **Mystery Box** is combined with the satisfaction of discovering products tailored to their preferences. 🎉

---

## 👥 User Types

### 🛍️ Customers
Those who make purchases on the platform.

![GIFUsuario-ezgif com-optimize](https://github.com/user-attachments/assets/8a9373f2-b7c6-41af-992e-79fb420cf8a0)


### 🏪 Stores
Those who create and sell mystery boxes.

![GIF TIENDA](https://github.com/user-attachments/assets/17d71458-c318-4f97-a6db-d1f7fb83dfb6)

### 👨‍💼 Administrators
In charge of website management and technical support for the platform.

![GIF AADMIN](https://github.com/user-attachments/assets/1debe716-da1a-492f-9142-e8af54082fff)

---

## 🛠️ How Liquiboxes Works

### For Stores 🏪:
- 📦 Create Mystery Boxes of various sizes and prices.
- 🛒 Select potential products for each box and specify the number of items it will contain.

### For Customers 🛍️:
- 📋 Register and choose preferences (sizes, colors, product types, categories).
- 🎁 Purchase Mystery Boxes from participating stores.

### Behind the Scenes 🔄:
- 🤖 **Liquiboxes** randomly generates the contents of each box from available inventory.
- 📨 Stores receive notifications with user preferences to confirm stock availability.
- 🔄 Stores can adjust the box contents if necessary (subject to admin approval).

### Delivery 🚚:
- 📄 Stores receive a **PDF** with the shipping order, selected items, and user data.

---

## 🌟 Key Features
- ⚡ **Seamless** connection between vendors and buyers.
- 🎁 **Personalized** Mystery Boxes based on user preferences.
- 📊 Efficient **stock management** for businesses.
- 🛍️ Exciting **shopping experience** for customers.
- 💳 Secure **payment processing**.
- 🖥️ **User-friendly interface** for both vendors and buyers.

---

## 🧰 Technologies Used
- **Frontend**: React.js ⚛️
- **Backend**: Python 🐍 & Flask 🔥
- **Database**: SQLAlchemy 🗄️
- **Responsive Design**: Bootstrap 📱
- **Payments**: Stripe 💳
- **Images**: Cloudinary ☁️

---

## ⚙️ Installation and Setup

> **Tip**: If you use **Github Codespaces** (recommended) or **Gitpod**, the template will come pre-installed with Python, Node, and a PostgreSQL Database.

### Backend Installation 🛠️:

1. **Ensure you have **Python 3.10**, **Pipenv**, and a database engine (PostgreSQL recommended). 🐍**
2. **Install Python packages:**
   
   ```bash
   $ pipenv install
   ```
  
3. **Create an `.env` file from the example:**

   ```bash
   $ cp .env.example .env
   ```
4. **Set up your database and configure the `DATABASE_URL` environment variable:**

| Engine    | DATABASE_URL                                      |
| --------- | ------------------------------------------------- |
| SQLite    | sqlite:////test.db                                |
| MySQL     | mysql://username:password@localhost:port/example   |
| Postgres  | postgres://username:password@localhost:5432/example|

5. **Run database migrations:**
   
   ```bash
   $ pipenv run migrate
   ```

6. **Apply migrations:**
   
   ```bash
   $ pipenv run upgrade
   ```

7. **Run the application:**
      
   ```bash
   $ pipenv run start
   ```

> **Note**: Codespaces users can connect to PostgreSQL by typing:

   ```bash
   $ psql -h localhost -U gitpod example
   ```

---

### Undo a Migration 🔄

You can also undo a migration by running:

   ```bash
   $ pipenv run downgrade
   ```

---

### Backend: Populate the Database 🗃️

To insert test shops and mystery boxes into the database, run:

   ```bash
   $ pipenv run flask init-db
   ```

To create the first superuser to access admin methods, run:

   ```bash
   $ pipenv run flask create-superuser
   ```

---

### Frontend Manual Installation:

- Make sure you're using **Node version 14+** and have already installed and started the backend.

1. **Install the packages:**

   ```bash
   $ npm install
   ```

2. **Start coding and launch the webpack dev server:**

   ```bash
   $ npm run start
   ```
---

💻 **Contributors**  
This project was built as part of the **4Geeks Academy Coding Bootcamp** by **Alejandro Sanchez** and other contributors. Explore the [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer) and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

---

🔗 **Live Demo**  
Experience Liquiboxes in action: [Liquiboxes Demo](https://sample-service-name-3no0.onrender.com/)

---

🤝 **Contributing**  
We welcome contributions! Make a pull request without a doubt!
