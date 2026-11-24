# INNOVEXA AI 2.0 – Autonomous AI Innovation & Capstone Ecosystem

> **Learn. Innovate. Build the Future.**  
> A futuristic, production-grade artificial intelligence educational and capstone innovation ecosystem connecting innovators, students, mentors, and developers to architect, prototype, and deploy real-world AI solutions.

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Google Gemini](https://img.shields.io/badge/Gemini_1.5-Flash_AI-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)

---

## 🌟 Overview

**INNOVEXA AI** is an end-to-end full-stack AI engineering platform. It bridges foundational machine learning theories with tangible real-world deployments across 5 specialized domains:
1. **Education AI**: Adaptive study coaches, Bloom's taxonomy quiz generators, Socratic learning synthetics.
2. **Healthcare AI**: Preventive health analytics, first-aid triage simulation, sports physiology.
3. **Agriculture AI**: Crop disease pathology, soil moisture telemetry, precision irrigation advisory.
4. **Environmental AI**: Air quality index forecasting, circular waste classification, carbon telemetry.
5. **Smart City AI**: Dynamic traffic signal optimization, multimodal transit routing, urban logistics.

---

## 🚀 Key Features

### 1. Interactive 3D & Animation System
- **Three.js 3D Innovation Sphere**: Real-time WebGL geodesic sphere with counter-rotating orbital rings, 120-particle constellation, dynamic mouse parallax, and accessible CSS 3D fallback.
- **Physics-Based 3D Tilt Cards**: Reusable `Interactive3DCard` with specular cursor glare and perspective rotation.
- **Framer Motion Engine**: Smooth page transitions, staggered grid reveals, and tactile button spring physics.

### 2. Autonomous Multi-Domain AI Lab (15 Tools)
- Powered by a dual-path inference proxy: Live **Google Gemini 1.5 Flash** with sliding-window rate limiting, prompt sanitization, and fallback heuristics.
- Interactive parameter sliders for Temperature, Creativity, and Target Complexity Levels (MVP, Production, Advanced Research).
- Direct export of AI model outputs into project architecture task boards.

### 3. Structured 6-Stage Capstone Incubator
A disciplined, verifiable engineering progression:
1. **Stage 1 – Project Charter**: Define problem space and beneficiary communities.
2. **Stage 2 – Team Roster**: Multidisciplinary roles (ML Engineer, Data Specialist, IoT Hardware, UI/Docs).
3. **Stage 3 – Problem Scoping**: Socratic validation with automated feasibility and ethics review.
4. **Stage 4 – AI Tool Selection**: Neural tool discovery across the 5 domains.
5. **Stage 5 – Workspace & Sprint**: Task boards, telemetry loggers, and GitHub repository sync.
6. **Stage 6 – Finals & Review**: Deliverables submission (Whitepaper, Slides, Prototype URL, Video).

### 4. Automated 7-Criteria Quality Evaluation Rubric
- Multi-role jury evaluation: Problem Relevance (15%), Originality (20%), Tool Utilization (20%), Technical Implementation (15%), Impact (15%), Presentation (10%), and Ethics (5%).
- Cryptographically verifiable credential issuance with instant verification lookup.

### 5. Multi-Role Workspaces & Telemetry
- **Student / Innovator Console**: Personalized AI learning assistant, skill diagnostic radar, active sprint tracking.
- **Mentor & Reviewer Studio**: Team evaluation queues, proposal review cards, rubric grading.
- **Telemetry & Cluster Operations**: Compute workloads, cluster access keys, token usage telemetry.
- **Super-Admin Console**: System activity audit logs, token budgets, and security policy management.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 18, Vite 6, Tailwind CSS, Lucide Icons, Canvas Confetti.
- **3D & Motion**: Three.js, Framer Motion.
- **Backend & Middleware**: Node.js, Express.js proxy with CORS, Rate Limiting, and Gemini API integration.
- **Database & Storage**: Supabase PostgreSQL with Row Level Security (RLS) and real-time WebSocket listeners.

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/innovexa-ai.git
   cd innovexa-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (based on `.env.example`):
   ```env
   VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   GEMINI_API_KEY=your-google-gemini-api-key
   PORT=5000
   ```

4. **Start the Express AI Backend Server**:
   ```bash
   node server/index.js
   ```

5. **Start the Vite Frontend Development Server**:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173/` (or the port specified by Vite).

---

## 📦 Production Build

```bash
npm run build
```
Optimized assets with code-splitting will be generated in the `/dist` directory.

---

## 📄 License

This project is licensed under the MIT License.
