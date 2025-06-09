
# 🛒 Whatbytes - Frontend Assignment

This is a frontend assignment built with **Next.js** and **Tailwind CSS**, based on the given UI and feature requirements. The project includes product listing, filtering, a product details page, and an optional cart page with full functionality.

---

## 🔗 Live Link
👉 [View Live Site](https://[YOUR_LIVE_LINK])

## 🧾 GitHub Repository
👉 [GitHub Repo](https://github.com/Dipto842/Whatbytes)

---

## 🧰 Tech Stack

- Next.js
- Tailwind CSS
- React Context API (for Cart State) ← *(replace with Zustand/Redux if used)*
- Lucide React (for icons)
- localStorage (to persist cart)

---

## 📁 Features Implemented

### ✅ Home Page (`/`)

- Responsive Header with:
  - Logo (left)
  - Search bar (center)
  - Cart button with badge and avatar (right)
- Sidebar Filters:
  - Category filter (checkboxes)
  - Price Range Slider
  - Brand Filter
- Product Grid:
  - Responsive (3/2/1 columns)
  - Product Card:
    - Image
    - Title
    - Price
    - Rating Stars (optional)
    - Add to Cart button
- Footer with copyright

---

### ✅ Product Details Page (`/product/[id]`)

- Product image
- Title, Price, Category
- Description
- Quantity selector
- Add to Cart button
- Optional: Reviews section

---

### ✅ Bonus - Cart Page (`/cart`)

- List of added products
- Quantity update feature
- Remove item button
- Cart total price
- Checkout button
- Persistent cart state using `localStorage`

---

## 💻 Folder Structure

```
/app
  /product/[id]  → Product details page
  /cart          → Cart page
/components      → Reusable UI components
/data            → JSON product data
/context         → Cart context (if used)
```

---

## ⚙️ Functionality & Logic

- URL-based filtering (`?category=electronics&price=0-1000`)
- String-based search filter
- Category, Brand, and Price range filters
- Dynamic routing for product detail pages
- Conditional rendering (e.g., No products found)
- Cart state is managed with `[STATE_MANAGEMENT_USED]` and saved to `localStorage`

---

## ⚠️ Commit Note

> Due to time constraints, commits were not done feature-by-feature. I understand the importance of feature-based commits and will ensure proper version control in future projects.

---

## 📜 License

This project was developed as part of a recruitment assignment for Whatbytes.
