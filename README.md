# Nice Gadgets Store 📱💻⌚

Modern e-commerce web application for browsing and purchasing phones, tablets, and accessories.

🔗 **[Live Demo](https://grigoriy01.github.io/nice-gadgets/)**

## ✨ Features

- **Catalog & Filtering:** Browse by categories (`Phones`, `Tablets`, `Accessories`), search with URL query sync and debounce, sort, and paginate[cite: 8].
- **Product Details:** Dynamic variant switching (color & capacity), image gallery, and suggested products.
- **Cart & Favorites:** Persistent state via `localStorage` with item counters and checkout flow[cite: 8].
- **Dark / Light Theme:** Automatic system theme detection with manual toggle[cite: 6].
- **Resilient UX:** Skeleton loaders, offline status detection, and automatic retry on network recovery[cite: 5,
  8].
- **URL State Sync:** Search queries, sorting, and pagination are synced with URL search params (`useSearchParams`), preserving state on page reload and link sharing.

## 🛠 Tech Stack

- **Core:** React 18, TypeScript, Vite[cite: 4, 6]
- **Routing:** React Router[cite: 4]
- **Styling:** SCSS (BEM methodology, CSS Custom Properties)[cite: 5, 6]
- **Libraries:** Swiper, Classnames[cite: 4]

## 🚀 Run Locally

\`\`\`bash
npm install
npm run dev
\`\`\`
