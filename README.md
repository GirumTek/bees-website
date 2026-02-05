# 🐝 BEES Website (Black Economic Empowerment Society)

The official website for the **Black Economic Empowerment Society (BEES)** at the University of Virginia. This platform serves as a central hub for student members to connect, view upcoming events, meet the executive board, and learn about the organization's impact.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Sanity.io** (Headless CMS).

---

## 🚀 Tech Stack

* **Frontend Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Content Management (CMS):** [Sanity.io](https://www.sanity.io/)
* **Deployment:** Vercel (Recommended)

---

## ✨ Key Features

* **📱 Mobile-First Design:** Fully responsive navigation with a custom hamburger menu.
* **⚡ Dynamic Content:** Events and Executive Board members are fetched in real-time from Sanity CMS.
* **🎨 Modern UI:** Clean, accessible interface using Tailwind CSS.
* **🖼️ Image Optimization:** Automatic image resizing and lazy loading.
* **🔍 SEO Ready:** Built-in metadata and semantic HTML structure.

---

## 🛠️ Quick Start

Run these commands in your terminal to set up the project from scratch.

```bash
# 1. Clone and enter the repository
git clone https://github.com/GirumTek/bees-website.git
cd bees-website

# 2. Install dependencies
npm install

# 3. Create the environment file
# (IMPORTANT: Replace 'your_project_id' below with your actual Sanity ID)
echo "NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id" > .env.local
echo "NEXT_PUBLIC_SANITY_DATASET=production" >> .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Content Management (Sanity Studio)

This project includes an embedded Sanity Studio for managing content.

1.  Go to `http://localhost:3000/studio`
2.  Login with your Sanity credentials.
3.  **Events:** Add, edit, or remove upcoming events.
4.  **Executive:** Update board member profiles and headshots.

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router
│   ├── components/       # Reusable UI components (Navbar, Footer)
│   ├── events/           # Events page (Sanity fetch)
│   ├── exec/             # Executive Board page (Sanity fetch)
│   ├── studio/           # Embedded Sanity Studio
│   └── layout.tsx        # Root layout (Metadata, Fonts)
├── sanity/               # Sanity CMS configuration
│   ├── schemas/          # Data models (event.ts, executive.ts)
│   └── lib/              # Sanity client & image utilities
└── public/               # Static assets (logos, icons)
```

---

