
# 📁 Project Structure and Architecture

## 🚀 Overview

I adopted a **feature-based folder structure** to ensure the project remains **scalable**, **maintainable**, and **performance-optimized** as it grows. This approach organizes the code by feature, grouping related components, screens, Redux slices, services, and hooks together. 

✅ **Key Benefits:**
- Each feature is **self-contained** and can evolve **independently**.
- Minimizes unintended side effects in other parts of the application.
- Enhances scalability and maintainability.

---

## 📂 Project Structure

```plaintext
/src
│
├── /app                         # Next.js 13+ App Router
│   ├── layout.tsx               # Global layout (header, footer, theme)
│   └── page.tsx                 # Root search page ("/")
│
├── /features                    # 💡 Self-contained features
│   ├── /search                  # 🔍 Search feature
│   │   ├── screens/             # Search-specific screens
│   │   │   └── SearchScreen.tsx # Main search screen
│   │   ├── components/          # Search-specific UI components
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchResultsList.tsx
│   │   ├── hooks/               # Search-related custom hooks
│   │   │   └── useDebouncedSearch.ts
│   │   ├── services/            # API service for search
│   │   │   └── searchService.ts
│   │   ├── slices/              # Redux slices for search state
│   │   │   └── searchSlice.ts
│   │   ├── types.ts             # Data models (interfaces, types)
│   │   └── index.ts             # Barrel export for search feature
│
│   ├── /productDetail           # 🛒 Product detail feature
│   │   ├── screens/             # Product detail screen
│   │   │   └── ProductDetailScreen.tsx
│   │   ├── components/          # Product detail UI components
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ProductImage.tsx
│   │   ├── hooks/               # Custom hooks for product detail
│   │   │   └── useProductDetails.ts
│   │   ├── services/            # API service for product details
│   │   │   └── productService.ts
│   │   ├── slices/              # Redux slice for product detail state
│   │   │   └── productDetailSlice.ts
│   │   ├── types.ts             # Product detail interfaces
│   │   └── index.ts             # Barrel export for productDetail
│
│   └── /breadcrumb              # 🔗 Breadcrumb navigation (Optional UX feature)
│       ├── components/
│       │   └── Breadcrumbs.tsx
│       ├── hooks/
│       │   └── useBreadcrumbs.ts
│       ├── slices/
│       │   └── breadcrumbSlice.ts
│       └── index.ts
│
├── /components                  # 🧩 Global reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Loader.tsx
│   ├── ErrorBoundary.tsx
│   └── Pagination.tsx
│
├── /layouts                     # 📐 Shared layouts
│   ├── MainLayout.tsx           # Main layout for pages
│   └── ProductLayout.tsx        # Product-specific layout
│
├── /services                    # 🌊 Shared API configurations
│   ├── axiosConfig.ts           # Axios global instance/config
│   └── apiRoutes.ts             # Centralized API endpoint definitions
│
├── /store                       # 🏪 Redux store and typed hooks
│   ├── store.ts                 # Redux store configuration
│   ├── rootReducer.ts           # Combine all slices
│   └── hooks.ts                 # useAppDispatch/useAppSelector (typed)
│
├── /hooks                       # 🪝 Global custom hooks
│   └── useSSR.ts                # Detect SSR vs. client rendering
│
├── /styles                      # 🎨 Theming and global styles
│   ├── theme.ts                 # MUI custom theme
│   ├── global.css
│   └── darkTheme.ts             # Optional dark mode theme
│
├── /utils                       # 🔧 Utility functions/helpers
│   ├── formatPrice.ts
│   └── debounce.ts
│
├── /tests                       # 🧪 Testing structure
│   ├── /unit
│   ├── /integration
│   └── /mocks
│
└── /public                      # 🌐 Static assets
    └── favicon.ico
```
