# 🛍️ Modern E-Commerce Platform

A feature-rich, high-performance e-commerce platform built with the latest **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project offers a seamless shopping experience with secure authentication, real-time cart updates, integrated payments, and a powerful admin dashboard.

---

## 🚀 Key Features

-   **🔒 Secure Authentication:** Implemented via NextAuth.js with JWT and bcryptjs for password hashing.
-   **🛒 Advanced Shopping Cart:** Real-time persistence and updates using Redux Toolkit.
-   **💳 Integrated Payments:** Seamless checkout experience powered by Razorpay.
-   **🖼️ Image Management:** Fast and optimized image handling with Cloudinary integration.
-   **📊 Admin Dashboard:** Interactive data visualization using Chart.js for tracking sales and user activity.
-   **🎨 Premium UI/UX:** Built with NextUI and Radix UI, featuring smooth animations powered by Framer Motion.
-   **📱 Fully Responsive:** Optimized for all devices—from smartphones to high-resolution monitors.
-   **🔎 Smart Search:** Efficient product discovery with specialized search features.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/), [React Redux](https://react-redux.js.org/) |
| **Backend/Database** | [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), [Mongoose](https://mongoosejs.com/), [MongoDB](https://www.mongodb.com/) |
| **Security & Auth** | [NextAuth.js](https://next-auth.js.org/), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) |
| **Payments** | [Razorpay](https://razorpay.com/) |
| **Utilities/UI** | [NextUI](https://nextui.org/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/) |
| **Images** | [Cloudinary](https://cloudinary.com/) |

---

## 🏁 Getting Started

### 1. Prerequisites
-   Node.js (LTS version)
-   MongoDB Atlas account
-   Cloudinary account
-   Razorpay account (Test mode supported)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd e-commerce
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add the following:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NEXT_PUBLIC_RAZORPAY_API_KEY=your_razorpay_key
NEXT_PUBLIC_RAZORPAY_API_SECRET=your_razorpay_secret

NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```text
├── app/               # Next.js App Router (Layouts, Pages, API)
├── components/        # Reusable UI components
├── context/           # React Context providers
├── lib/               # Utility functions and database configuration
├── models/            # Mongoose schemas (User, Product, Cart)
├── public/            # Static assets
├── redux/             # Redux slices and store configuration
└── styles/            # Global styling
```

---

## 📸 Screenshots & Demo
*(Tip: Add your high-quality screenshots here to showcase the stunning UI!)*

---

## 📄 License
This project is licensed under the MIT License.

---

Developed with ❤️ by [Abhishek Shukla](https://github.com/Abhishekshukla8097)
