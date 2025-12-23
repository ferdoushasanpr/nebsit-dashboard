## Project Overview

This project is a modern **HR & Notice Management Dashboard** designed to streamline internal company communications and employee management. It features a robust sidebar navigation with nested dropdowns, a real-time notification system, and a comprehensive notice management module. The interface is built with a focus on clean user experience, professional aesthetics, and a responsive fixed-layout architecture.

## Tech Stack

- **Framework:** [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)

---

## Installation Steps

Follow these steps to get your development environment running:

1. **Clone the repository:**

```bash
git clone https://github.com/ferdoushasanpr/nebs-it-dashboard.git
cd nebsit-dashboard

```

2. **Install dependencies:**

```bash
npm install
# or
yarn install

```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev

```

4. **Open the app:**
   Navigate to `http://localhost:5173` in your browser.

---

## ENV Variable Instructions

To ensure the application functions correctly with your backend services or external APIs, you need to set up your environment variables.

1. Create a `.env` file in the **root** directory of the project:

```bash
touch .env

```

2. Add the following variables to the file:

```env
# The base URL for your API service
VITE_API_BASE_URL=https://nebsit-backend.vercel.app

```
