# 🛒 Shopping Cart Application - ASE Challenge

This repository contains a **full-stack Shopping Cart application** built as part of the **Associate Software Engineer (ASE) recruitment challenge at Verto**.

The project demonstrates a complete e-commerce workflow with a **RESTful backend API** and a **responsive frontend single-page app**. It highlights best practices in state management, persistence, security, and testing.

---

## ✨ Features

### 🔧 Backend (Node.js + Express)

- REST API endpoints to:
  - Retrieve all products
  - Retrieve product details
  - Process checkout orders
- Products data mocked with JSON for easy extension
- Input validation & thorough error handling
- Order logging for review
- Secure configuration with:
  - Environment variables
  - CORS
  - Helmet
  - Rate limiting
- Tested with **Jest** & **Supertest**

### 🎨 Frontend (React + Tailwind CSS)

- Product listing with images, descriptions, prices & ratings
- Add to Cart functionality with quantity management
- Cart displayed in a **slide-out sidebar**
- Cart persisted in **localStorage**
- Responsive design for desktop, tablet, and mobile
- Smooth UI animations and transitions
- Tested with **Vitest** & **React Testing Library**

---

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js, Jest, Supertest, dotenv, Helmet, CORS, rate-limit
- **Frontend:** React, Tailwind CSS, React Context API, Vitest, React Testing Library
- **Build Tools:** Vite, Babel, ESLint, Prettier

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### 📥 Installation

Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/shopping-cart-ase.git
cd shopping-cart-ase
\`\`\`

Install dependencies:
\`\`\`bash
npm run setup
\`\`\`

Copy environment variables:
\`\`\`bash
cp .env.example .env
cp server/.env.example server/.env
\`\`\`

---

### ▶️ Running Locally

Start both frontend and backend:
\`\`\`bash
npm run dev
\`\`\`

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001](http://localhost:3001)

---

### 🧪 Running Tests

Run all tests:
\`\`\`bash
npm test
\`\`\`

Run backend tests only:
\`\`\`bash
cd server && npm test
\`\`\`

Run frontend tests only:
\`\`\`bash
cd client && npm test
\`\`\`

---

## ⚙️ How It Works

- The **backend** exposes REST API endpoints to fetch product data and process checkout orders.
- The **frontend** fetches product data, displays it in a responsive grid, and allows users to manage a cart.
- Cart state is managed globally using **React Context API** and persisted in **localStorage**.
- Checkout submits cart data to the backend, which logs order details.
- Tests ensure reliability of backend endpoints and frontend components.

---

## 💡 Why This Approach?

- Clear separation of backend and frontend
- Modern React features (hooks & context) for clean state management
- Tailwind CSS for consistent, scalable, and responsive UI
- Comprehensive testing ensures maintainability
- Designed for easy scalability (future database, authentication, payments, etc.)

---

## 👤 Author

**Prasad Waster**  
_Associate Software Engineer Candidate_
