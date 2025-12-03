# 📝 MyBlog — Simple CRUD Blog with Next.js

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![Built with](https://img.shields.io/badge/Built%20With-Next.js%2016.0.6-blue)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC)
![LocalStorage](https://img.shields.io/badge/Storage-localStorage-yellow)

A clean and simple **CRUD Blog App** built using **Next.js 16 (App Router)**,  
**React**, **TypeScript**, and **Tailwind CSS** — fully stored in the browser using `localStorage`.

Create, read, update, delete, search, and filter articles — everything runs on the client side.

---

## 🚀 Features

### 🧾 Create, Read, Update, Delete (CRUD)
- Add new articles  
- View full article details  
- Edit existing articles  
- Delete articles  
- All data saved in `localStorage` (no backend needed)

### 🔍 Search & Category Filter
- Search by title (case-insensitive)
- Dynamic category filter (categories generated from user input)
- Instant filtering without reload

### 🧭 Global Layout (Navbar)
- Consistent header across all pages
- Clean, simple design (Next.js App Router layout)

### 📄 Article Details Page
- View title, category, and full content
- Styled detail page with "Back to articles" link

### ✏️ Edit Page
- Form pre-filled with the article’s original data
- Save changes instantly to localStorage

### 🎨 UI & Styling
- Fully responsive layout
- Tailwind CSS modern design
- Clean spacing and components

---

## 🛠 Tech Stack
- **Next.js 16.0.6 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **localStorage API**
- 100% client-side CRUD logic

---

## 📸 Screenshots

### 🏠 Home Page  
![Home](./public/screenshots/home.jpg)

### 🧾 Article Details  
![Details](./public/screenshots/details.jpg)

### ✏️ Edit Article  
![Edit](./public/screenshots/edit.jpg)

### 🗑 Empty / No Articles  
![Empty](./public/screenshots/empty.jpg)

---

## ▶️ Run Locally

```bash
git clone https://github.com/ahmadashraf7x/myblog-nextjs.git
cd myblog-nextjs
npm install
npm run dev
```