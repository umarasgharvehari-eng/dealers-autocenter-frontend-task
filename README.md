# Frontend Assessment - React JS (Vite)

This project is a frontend assessment built using **React (Vite)**. It demonstrates the implementation of an API-based dashboard and a validated user input form.

---

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (Custom Styling)
- React Hooks (useState, useEffect, useMemo)
- React Router DOM

---

## Features

### Task 1: Product Listing Dashboard

- Fetches product data from a public API
- Displays products in a responsive grid layout
- Each product card shows:
  - Product Image
  - Title
  - Price
- Search functionality (filter by product name)
- Sorting options:
  - Name (A-Z / Z-A)
  - Price (Low to High / High to Low)
- Loading state handling
- Error state handling
- Responsive design (mobile-friendly)

---

### Task 2: User Form with Validation

- Form fields:
  - Full Name
  - Email
  - Phone Number
  - Password
- Validation rules:
  - All fields are required
  - Email must be in valid format
  - Password must be at least 6 characters
- Inline error messages for each field
- Prevents submission if validation fails
- Displays success message on valid submission

---

## API Used

- Fake Store API  
  https://fakestoreapi.com/products

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   └── SortSelect.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── UserForm.jsx
├── services/
│   └── api.js
├── styles/
│   ├── app.css
│   ├── navbar.css
│   ├── dashboard.css
│   └── form.css
├── App.jsx
└── main.jsx