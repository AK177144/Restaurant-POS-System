# 🍽️ Restaurant POS System

![React Native](https://img.shields.io/badge/React_Native-0.81-blue)
![Expo](https://img.shields.io/badge/Expo-SDK_54-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Android](https://img.shields.io/badge/Platform-Android-success)
![License](https://img.shields.io/badge/License-Proprietary-red)

A modern **Restaurant Point of Sale (POS) System** developed using **React Native**, **Expo**, **TypeScript**, and **Supabase**.

The application provides restaurant owners and cashiers with a complete mobile solution for managing menu categories, menu items, customer billing, bill history, sales analytics, and customer menu viewing through an intuitive Android interface.

Designed with a modular architecture and cloud-based backend, the application delivers a fast, scalable, and user-friendly experience suitable for small and medium-sized restaurants.


## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Application Modules](#-application-modules)
- [Application Screenshots](#-application-screenshots)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Release Information](#-release-information)
- [Future Roadmap](#-future-roadmap)
- [License](#-license)
- [Author](#-author)

## 📖 Overview

Restaurant POS System is a comprehensive Android-based Point of Sale application designed to simplify restaurant operations by integrating menu management, billing, sales monitoring, and customer menu viewing into a single mobile application.

The application enables restaurant staff to efficiently manage menu categories and items, generate customer bills, maintain billing history, analyze daily sales performance, and present an interactive digital menu to customers.

The project follows a modular software architecture developed using React Native and Expo for the mobile application, TypeScript for maintainable code, and Supabase as the backend service for authentication and PostgreSQL database management.

The primary objective of this project is to provide a lightweight, scalable, and easy-to-use restaurant management solution while demonstrating modern mobile application development practices.



# ✨ Features
---

### Dashboard

![Dashboard](screenshots/dashboard.png)

---

### Billing Interface

![Billing](screenshots/billing.png)

---

### Bill Details

![Bill Details](screenshots/bill-details.png)

---

### Bill History

![Bill History](screenshots/bill-history.png)

---

### Current Order

![Current Order](screenshots/current-order.png)

---

### Menu Items

![Menu Items](screenshots/menu-items.png)

---

### Menu Management

![Menu Management](screenshots/menu-management.png)

---

### Sales dashboard

![Sales Dashboard](screenshots/sale-dashboard.png)

---

### View Menu

![View Menu](screenshots/view-menu.png)


# 🧩 Application Modules


# 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| React Native | Developed for Android devices using React Native and Expo. |
| Expo SDK 54 | Development, testing, and deployment |
| TypeScript | Static typing and improved maintainability |
| Supabase | Backend-as-a-Service |
| PostgreSQL | Relational database management |
| React Navigation | Screen navigation |
| Async Storage | Local session persistence |
| Git & GitHub | Version control and project hosting |


# 🗄️ Database Schema

The application uses **Supabase PostgreSQL** as the backend database for storing restaurant data, billing information, and user authentication.

| Table | Purpose |
|---------|---------|
| **categories** | Stores menu categories (e.g., Starters, Main Course, Desserts, Beverages). |
| **menu_items** | Stores menu items, prices, category associations, and availability status. |
| **bills** | Stores bill details, customer information, bill number, total amount, and billing timestamp. |
| **bill_items** | Stores individual items included in each generated bill along with quantities and prices. |
| **auth.users** | Managed by Supabase Authentication for secure user login and session management. |


# 📁 Project Structure

```text
Restaurant-POS-System
│
├── assets/                     # Application icons and images
│
├── src/
│   ├── components/
│   │   ├── billing/
│   │   └── common/
│   │
│   ├── hooks/
│   │
│   ├── navigation/
│   │
│   ├── screens/
│   │
│   ├── services/
│   │
│   └── utils/
│
├── App.tsx
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```


# ⚙️ Installation
### 🍽️ Menu Management

- Create menu categories.
- Add new menu items.
- Update item details.
- Mark items as available or unavailable.

---

### 🧾 Billing

- Browse menu items.
- Add items to the cart.
- Adjust item quantities.
- Enter optional customer information.
- Generate bills.
- Share invoices via WhatsApp.

---

### 📜 Bill History

- View previously generated bills.
- Review bill details.
- Access purchased item information.

---

### 📊 Sales Dashboard

- View today's sales.
- Monitor total revenue.
- Track billing statistics.

---

### 📋 Customer Menu

- Browse available menu items.
- View categories.
- Display only currently available dishes.


# 🏷️ Release Information


# 📄 License

Copyright © 2026 Anandu K.

This project is provided for portfolio and educational purposes.

No part of this software may be copied, modified, redistributed, sublicensed, sold, reverse engineered, or used commercially without prior written permission from the author.

For licensing or commercial usage, please contact the author.


# 👨‍💻 Author

## Anandu K

Computer Science Engineering Student

### Areas of Interest

- Mobile Application Development
- React Native
- TypeScript
- Internet of Things (IoT)
- Machine Learning
- Full Stack Development

### GitHub

https://github.com/AK177144

# 🙏 Acknowledgements

Special thanks to the following technologies and communities that made this project possible.

- React Native
- Expo
- TypeScript
- Supabase
- PostgreSQL
- React Navigation
- Open Source Community

Their tools, documentation, and community support greatly contributed to the successful development of this project.


# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support motivates further development and future enhancements.
