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

The Restaurant POS System provides a comprehensive set of features to simplify restaurant operations and improve billing efficiency.

## 🔐 Authentication

- Secure user login using Supabase Authentication
- Persistent user sessions
- Safe logout with confirmation dialog

---

## 🍽️ Menu Management

- Create, update, and delete menu categories
- Create, update, and delete menu items
- Assign menu items to categories
- Mark menu items as **Available** or **Unavailable**
- Search and organize menu items efficiently

---

## 🧾 Billing System

- Fast menu item search
- Category-based menu filtering
- Interactive shopping cart
- Increase or decrease item quantity
- Automatic bill number generation
- Customer information collection
- Optional WhatsApp invoice support
- Real-time total amount calculation
- Generate professional customer bills

---

## 📜 Bill History

- View previously generated bills
- Access complete bill details
- Display purchased items
- Store customer information
- View bill totals and timestamps

---

## 📊 Sales Dashboard

- Total revenue overview
- Today's sales summary
- Total bills generated
- Simple sales analytics

---

## 📋 Customer Menu

- Category-wise menu browsing
- Display only available menu items
- Clean and customer-friendly interface

---

## 📱 Mobile Experience

- Responsive Android interface
- Touch-friendly navigation
- Optimized billing workflow
- Smooth user experience

## 📱 Application Screenshots

### Login Screen

![Login](screenshots/login.png)

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

The Restaurant POS System is organized into multiple functional modules, each designed to handle a specific aspect of restaurant operations.

| Module | Description |
|---------|-------------|
| 🔐 Authentication | Secure login and session management using Supabase Authentication. |
| 🍽️ Menu Management | Manage menu categories and menu items with availability control. |
| 🧾 Billing | Generate customer bills, manage shopping cart, and calculate totals. |
| 📜 Bill History | View previously generated bills and complete billing details. |
| 📊 Sales Dashboard | Monitor total revenue, today's sales, and billing statistics. |
| 📋 Customer Menu | Browse available menu items category-wise through a clean interface. |



# 🏗️ System Architecture

```text
                    Restaurant POS System
                             │
                             ▼
                  React Native Mobile App
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
Authentication          Business Logic         User Interface
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
                        Supabase Backend
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
 Authentication       PostgreSQL Database     REST API
```


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

## 1. Clone the Repository

```bash
git clone https://github.com/AK177144/Restaurant-POS-System.git
```

---

## 2. Navigate to the Project Directory

```bash
cd Restaurant-POS-System
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
EXPO_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

## 5. Start the Development Server

```bash
npx expo start
```

---

## 6. Run the Application

You can run the application using:

- 📱 Expo Go (Android)
- 🤖 Android Emulator
- 🌐 Web Browser (limited support)


# 📖 Usage Guide

After logging into the application, users can perform the following operations:

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

## Current Version

**v1.0.0**

### Release Highlights

- Secure Authentication
- Complete Menu Management
- Restaurant Billing System
- WhatsApp Invoice Support
- Bill History
- Sales Dashboard
- Customer Menu Viewer

The latest release APK will be available from the **Releases** section of this repository.


# 🛣️ Future Roadmap

The Restaurant POS System is designed with scalability in mind. Future releases will focus on expanding the application's capabilities to support larger restaurants and improve operational efficiency.

## Version 1.1

- QR Code Digital Menu
- Printable PDF Bills
- Customer Search
- Enhanced Sales Analytics
- Discount and Coupon Support

---

## Version 1.2

- Inventory Management
- Expense Management
- Profit & Loss Dashboard
- Kitchen Order Display (KDS)
- Low Stock Notifications

---

## Version 2.0

- Multi-Branch Restaurant Support
- Employee Management
- Role-Based Access Control
- Cloud Synchronization
- Online Ordering Integration
- Table Reservation System
- Customer Loyalty Program
- UPI & Card Payment Integration


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
