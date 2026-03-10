# Store Front 🛒

A shopping cart application built with React, TypeScript, and the FakeStore API. Built using the Reducer + Context pattern with no prop drilling.

---

## Project Overview

Store Front is a fully functional e-commerce shopping cart that fetches real product data from [fakestoreapi.com](https://fakestoreapi.com). Users can browse products, add them to a cart, adjust quantities, and view a live cart summary — all powered by a central reducer and React Context.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety, no `any` |
| Vite | Build tool |
| Chakra UI | Component styling |
| HeroUI | Navbar component |
| Tailwind CSS | Utility styling |
| vite-plugin-pwa | Service worker + PWA manifest |
| FakeStore API | Product data source |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd Store_Front

# Install dependencies
npm install
```

### Running the app

```bash
# Development mode
npm run dev

# Production build
npm run build

# Preview production build (required for Lighthouse testing)
npm run preview
```

---

## Component Structure

```
src/
├── store/
│   ├── types.ts              # All TypeScript interfaces and types
│   ├── cartReducer.ts        # Reducer function + initial state
│   └── CartContext.tsx       # CartProvider, useCart, useCartDispatch
├── components/
│   ├── Nav.tsx               # Navbar component
│   ├── Products.tsx          # ProductList + ProductGrid with Suspense
│   └── Summary.tsx           # CartSummary with totals
├── API/
│   └── data.ts               # getAllProducts fetch function
└── App.tsx                   # Layout only — wraps everything in CartProvider
```

---

## How the Reducer Works

All cart state lives in a single reducer — no standalone `useState` for cart data.

### State Shape

```ts
interface stateOfCartItems {
  products: cartProducts[];
}

interface cartProducts {
  product: Props;
  quantity: number;
}
```

### Available Actions

| Action | Payload | Description |
|---|---|---|
| `add` | `Props` (full product) | Adds product to cart or increases quantity if it exists |
| `remove` | `number` (product id) | Removes product from cart entirely |
| `increaseQuantity` | `number` (product id) | Increases quantity by 1 |
| `decreaseQuantity` | `number` (product id) | Decreases quantity by 1, removes if it reaches 0 |
| `clear` | none | Empties the entire cart |

### Dispatching Actions

```tsx
// Reading cart state
const cart = useCart();

// Dispatching actions
const dispatch = useCartDispatch();

dispatch({ type: "add", payload: product });
dispatch({ type: "remove", payload: product.id });
dispatch({ type: "increaseQuantity", payload: product.id });
dispatch({ type: "decreaseQuantity", payload: product.id });
dispatch({ type: "clear" });
```

### Custom Hooks

```ts
useCart()         // returns current cart state
useCartDispatch() // returns dispatch function
```

Both hooks must be used inside a `CartProvider` or they will throw an error.

---

## Git Flow Process

This project follows the Git Flow branching strategy.

### Branch Structure

```
main           ← production ready code only
dev            ← integration branch, all features merge here
feature/*      ← individual feature branches
```

### Dispatching Actions

```tsx
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, increaseQuantity, decreaseQuantity, clear } from '@/feature/cart/cartSlice';
import type { RootState } from '@/app/store';

// Reading cart state
const products = useSelector((state: RootState) => state.cart.products);

// Dispatching actions
const dispatch = useDispatch();

dispatch(add(product));
dispatch(remove(product.id));
dispatch(increaseQuantity(product.id));
dispatch(decreaseQuantity(product.id));
dispatch(clear());
```

### RTK Query — Data Fetching

```tsx
import { useGetProductsQuery } from '@/API/data';

const { data: products, isLoading, isError } = useGetProductsQuery();
```

RTK Query automatically handles caching, loading states and error states — no manual fetch calls needed.

---


### Workflow

```bash
# Create a new feature branch from dev
git checkout dev
git checkout -b feature/your-feature-name

# Work on your feature, then stage and commit
git add .
git commit -m "feat(scope): description of change"

# Merge back into dev when done
git checkout dev
git merge feature/your-feature-name
git push origin dev
```

### Commit Prefix Convention

| Prefix | When to use |
|---|---|
| `feat` | Adding new functionality |
| `fix` | Bug fixes |
| `style` | CSS / UI changes only |
| `refactor` | Restructuring code without changing behaviour |
| `chore` | Config, dependencies, setup |
| `docs` | Documentation changes |

---

## PWA & Lighthouse

This app is configured as a Progressive Web App using `vite-plugin-pwa`.

On production build the following are auto generated:

```
dist/sw.js                  ← service worker
dist/manifest.webmanifest   ← PWA manifest
```

To run a Lighthouse audit:

```bash
npm run build
npm run preview
```

Then open Chrome → Inspect → Lighthouse → Analyze page load.
