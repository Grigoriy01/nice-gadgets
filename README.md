# Nice Gadgets Store 📱💻⌚

Modern e-commerce web application for browsing and purchasing phones, tablets, and accessories.

🔗 **[Live Demo](https://grigoriy01.github.io/nice-gadgets/)**


## ✨ Features

- **Catalog & Filtering:** Browse by categories (`Phones`, `Tablets`, `Accessories`), search with URL query sync and debounce, sort, and paginate.
- **Product Details:** Dynamic variant switching (color & capacity), image gallery, and suggested products.
- **Cart & Favorites:** Persistent state via `localStorage` with item counters and checkout flow.
- **Dark / Light Theme:** Automatic system theme detection with manual toggle.
- **Resilient UX:** Skeleton loaders, offline status detection, and automatic retry on network recovery.
- **URL State Sync:** Search queries, sorting, and pagination are synced with URL search params (`useSearchParams`), preserving state on page reload and link sharing.

## 🛠 Tech Stack

- **Core:** React 18, TypeScript, Vite
- **Routing:** React Router
- **Styling:** SCSS (BEM methodology, CSS Custom Properties)
- **Libraries:** Swiper, Classnames

## 🚀 Run Locally

\`\`\`bash
npm install
npm run dev
\`\`\`
