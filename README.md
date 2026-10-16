# SkyLock — FSOC Electro-Optical Tracking System Website

A minimalist, high-performance, single-page product website built with **React**, **TypeScript**, and **Vite** for the **SkyLock — FSOC Electro-Optical Tracking System**, designed by **Team VYSAM** at **MLR Institute of Technology, Hyderabad** for **Smart India Hackathon 2026** (Problem Statement ID: 26169).

---

## 🌟 Highlights

- **Strict Minimal Light Theme**: Clean `#FFFFFF` and `#F7F8FA` surfaces, crisp typography using the **Inter** font family, and subtle `#2563EB` accents.
- **Centered Hero Presentation**: Focuses on core product identity with clear call-to-actions for application and presentation downloads.
- **Interactive Verification Gallery**: Showcase featuring the 3D Space Simulation, Camera Sensor Feed, and Telemetry & Controls with full-screen zoom preview modals.
- **3-Step Windows Quickstart Guide**: Clear, non-technical instructions for downloading, extracting, and launching the portable Windows package, accompanied by a comprehensive System Requirements and Troubleshooting matrix.
- **Full Team Attribution**: Accurate directory for all six members of Team VYSAM with direct `mailto:` and `tel:` links and consistent institutional affiliation.
- **Direct Deliverable Downloads**: Direct Google Drive downloads for `SkyLock-Portable.zip` (~300 MB) and the official project presentation `VYSAM-26169-PRESENTATION.pdf` (9.5 MB).

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS Modules with design tokens (`src/styles/variables.css`)

---

## 📁 Project Structure

```
sky-lock-guide/
├── public/
│   ├── assets/
│   │   ├── favicon.svg
│   │   └── screenshots/
│   │       ├── space-simulation.svg
│   │       ├── sensor-feed.svg
│   │       ├── telemetry-controls.svg
│   │       ├── step-download.svg
│   │       ├── step-extract.svg
│   │       └── step-launch.svg
│   └── downloads/
│       ├── SkyLock-Portable.zip
│       ├── VYSAM-26169-PRESENTATION.pdf
│       └── SkyLock-Project-Presentation.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   ├── ImageModal.tsx
│   │   ├── ImageModal.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   ├── OverviewFeatures.tsx
│   │   ├── OverviewFeatures.module.css
│   │   ├── ScreenshotsGallery.tsx
│   │   ├── ScreenshotsGallery.module.css
│   │   ├── InstallationGuide.tsx
│   │   ├── InstallationGuide.module.css
│   │   ├── TeamSection.tsx
│   │   ├── TeamSection.module.css
│   │   ├── ResourcesSection.tsx
│   │   └── ResourcesSection.module.css
│   ├── data/
│   │   └── content.ts
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   ├── variables.css
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ or v20+
- `npm` (bundled with Node.js)

### Installation

1. Open your terminal in the project directory:
   ```bash
   cd c:\Users\vedik\Downloads\sky-lock-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or `http://127.0.0.1:5173`).

### Production Build

Create an optimized production bundle:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

### Preview Production Build

Preview the compiled distribution locally:
```bash
npm run preview
```

---

## 🚢 Deployment to Vercel

The project is structured for zero-configuration deployment to [Vercel](https://vercel.com/):

1. **Push to Git**: Push this repository to GitHub, GitLab, or Bitbucket.
2. **Import Project into Vercel**:
   - Go to your Vercel Dashboard and click **"Add New..."** > **"Project"**.
   - Select your Git repository.
3. **Configure Build Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **Deploy**: Click **"Deploy"**. Vercel will build and publish the site with global CDN distribution.

---

## 👥 Team VYSAM Directory

| Member Name | Role | Email | Mobile | Institution |
|---|---|---|---|---|
| **Abhishek G** | Team Leader | 24r21a6779@mlrit.ac.in | 9652097857 | MLR Institute of Technology, Hyderabad |
| **Abhinav Sai G** | Team Member | 24r21a6778@mlrit.ac.in | 9133694540 | MLR Institute of Technology, Hyderabad |
| **Vedik G** | Team Member | 24r21a6771@mlrit.ac.in | 9515766733 | MLR Institute of Technology, Hyderabad |
| **Mahesh G** | Team Member | 24r21a6773@mlrit.ac.in | 8008712499 | MLR Institute of Technology, Hyderabad |
| **Sathvika B** | Team Member | 25r21a0511@mlrit.ac.in | 9398583305 | MLR Institute of Technology, Hyderabad |
| **Sandhya R** | Team Member | 25r21a0558@mlrit.ac.in | 6303020037 | MLR Institute of Technology, Hyderabad |

---

## 📄 License & Attribution

© 2026 Team VYSAM. Built for Smart India Hackathon 2026.
Academic Affiliation: **MLR Institute of Technology, Hyderabad**.
