# 🌴 Project Khajoor

> **Caffeine-Free Date Seed Coffee | A Zero-Waste, Women-Led Circular Economy Initiative**

Project Khajoor is a web application designed to support and showcase a pioneering zero-waste, circular economy project. The initiative transforms discarded date seeds into a healthy, naturally sweet, caffeine-free alternative to traditional coffee, while simultaneously empowering women in local communities.

---

## 🌟 Mission & Impact

Project Khajoor is built around three core pillars:

*   **Zero-Waste Philosophy**: Repurposing agricultural waste by converting discarded date seeds into healthy coffee. Upcycling used coffee grounds into natural scrubs.
*   **Women Empowerment**: Training and employing women to operate home-based packaging and processing units with fair wages.
*   **Conscious Living**: Providing consumers with a stomach-friendly, caffeine-free, and naturally sweet beverage alternative.

### 📊 Key Impact Metrics

| Metric | Achievement | Impact Area |
| :--- | :--- | :--- |
| **Agri-Waste Recycled** | `200kg+` | Environmental Sustainability |
| **Women Trained & Empowered** | `30+` | Community Development & Livelihoods |
| **Total Women Engagements** | `11,800+` | Social Outreach & Inclusion |
| **Zero-Waste Goal** | `100%` | Sustainable Circular Economy |

---

## 🚀 Key Features

*   **Modern Landing Page**: Highlighting our mission, zero-waste story, and community impact.
*   **Product Showcase & Catalog**: Detailed view of our premium Date Seed Coffee with interactive image galleries.
*   **Lead-Capture & Ordering System**: Seamless, responsive pre-order and contact submission forms integrated directly with Supabase.
*   **Dynamic Metrics Dashboard**: Visually rich indicators representing live social and environmental impact statistics.
*   **Responsiveness**: Designed for all device screens, utilizing fluid modern typography and clean grids.

---

## 🛠️ Technology Stack

This application is built using modern, production-ready frontend technologies:

*   **Core Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/) (optimized for super-fast hot module replacement)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom extensions & [shadcn/ui](https://ui.shadcn.com/) component library
*   **Database/Backend-as-a-Service**: [Supabase](https://supabase.com/) (real-time data insertion for client inquiries and orders)
*   **State Management & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
*   **Routing**: [React Router DOM v6](https://reactrouter.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
projectkhajoor/
├── src/
│   ├── assets/       # Images and graphic assets (product, hero, mission illustration)
│   ├── components/   # Reusable UI components
│   │   ├── ui/       # shadcn/ui components (cards, inputs, badges, buttons, etc.)
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities and shared library configurations
│   │   ├── supabase.ts # Supabase client initialization
│   │   └── utils.ts    # Class merger utilities (cn) for Tailwind
│   ├── pages/        # Route page views
│   │   ├── About.tsx   # Team, mission, and circular model
│   │   ├── Contact.tsx # Customer feedback and general inquiries
│   │   ├── Home.tsx    # Landing page and metrics snapshot
│   │   ├── Impact.tsx  # Deep dive into the environmental & social metrics
│   │   ├── NotFound.tsx# 404 fallback page
│   │   └── Shop.tsx    # Product showcase and pre-order workflow
│   ├── App.tsx       # Main application layout and routes definition
│   └── main.tsx      # React DOM entry point
├── public/           # Static assets, favicon, robots.txt
├── index.html        # HTML entry point
├── package.json      # Dependencies and execution scripts
├── tailwind.config.ts# Custom styling configurations
└── tsconfig.json     # TypeScript configuration
```

---

## ⚙️ Setup and Installation

Follow these steps to run the project locally.

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
*   `npm` or `yarn` / `bun`

### Steps

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/RaghavGupta2006/khajoor-eco-hub.git
    cd projectkhajoor
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Once started, the application will be accessible at `http://localhost:8080`.

4.  **Production Build**:
    To compile and optimize the app for production:
    ```bash
    npm run build
    ```
    To test the production build locally:
    ```bash
    npm run preview
    ```

---

## 🗄️ Backend Integration (Supabase)

This frontend communicates directly with Supabase via `@supabase/supabase-js`. 

### Contacts Table Schema

Pre-orders and newsletter registrations from the `Shop` and `Contact` pages are inserted into the `contacts` table in Supabase. The expected database columns are:

| Column Name | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID / Int | Primary Key (auto-generated) |
| `full_name` | Text | Full name of the user placing the order |
| `contact_number` | Text | Mobile or phone number |
| `email_address` | Text | Email address for confirmation & newsletter |
| `quantity` | Integer | Quantity of date seed coffee requested |
| `created_at` | Timestamp | Timestamp of insertion (default `now()`) |

---

## 🤝 Contributing

We welcome contributions to help improve Project Khajoor! Feel free to:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more details.
