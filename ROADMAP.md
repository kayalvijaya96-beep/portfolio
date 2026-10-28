# Project Roadmap: Automated Portfolio Website

**Owner:** Kayalvizhi Sureshkumar  
**Institution:** Chennai Institute of Technology (B.E. Computer Science & Engineering)  
**Primary Tech Stack:** Modern Front-End (Vite + React or Next.js), Tailwind CSS, Lucide Icons  
**Deployment Pipeline:** GitHub + Vercel (Continuous Automated Deployment)  
**Design Theme:** Professional Blue & White Aesthetic with Card Components & Enlarged Profile Picture  

---

## 1. Project Overview & Design System

### 1.1 Color Palette
- **Primary Blue:** `#2563EB` (Tailwind `blue-600`) — Headings, CTA buttons, active states
- **Deep Navy / Dark Accent:** `#1E3A8A` (Tailwind `blue-900`) — Hero accents, contrast text
- **Secondary Sky Blue:** `#38BDF8` (Tailwind `sky-400`) — Gradients, badges, hover rings
- **Background White / Ice Blue:** `#FFFFFF` and `#F8FAFC` (Tailwind `slate-50` / `blue-50/30`)
- **Card Surfaces:** Pure White (`#FFFFFF`) with subtle border (`border-blue-100`) and soft shadows (`shadow-sm hover:shadow-lg transition-all`)
- **Text:** Slate Dark (`#0F172A`) for high contrast and accessibility compliance (WCAG AAA)

### 1.2 Layout & Key Components
1. **Sticky Navigation Bar:** Glassmorphism backdrop (`backdrop-blur-md bg-white/90`), mobile hamburger drawer, smooth scroll navigation.
2. **Hero Section:**
   - **Enlarged Profile Picture:** Circular format (`w-36 h-36 md:w-44 md:h-44`) with outer ring border (`ring-4 ring-blue-500/20 shadow-2xl`), utilizing `./assets/profile.jpg`.
   - Name, headline (AI/ML & Full-Stack Developer), CGPA 9.04 badge, and quick CTA buttons ("View Projects", "Download Resume", "Contact Me").
3. **About Me:** Academic overview at Chennai Institute of Technology, interest summary (AI/ML, Computer Vision, Full Stack), and 365-day Duolingo German streak badge.
4. **Experience (Internships):**
   - CodeAlpha Virtual Internship for Artificial Intelligence (YOLOv8 Object Detection, Streamlit Language Translator).
   - CodeAlpha Virtual Internship for Java Development (Student Grade Tracker, Stock Trading Platform).
5. **Projects Showcase (Card Grid):**
   - *Object Detection (YOLOv8, OpenCV, Python)*
   - *Language Translator (Python, Streamlit, Googletrans)*
   - *Stock Trading Platform (Java OOP, HashMaps, Scanner)*
   - *Pantry-to-Plate (HTML/CSS/JS - Ideathon 2026)*
   - *StudyPilot Progress Tracker (Python, AI, Streamlit, NumPy)*
6. **Technical Skills (Categorized Badges):**
   - Programming Languages: Python, Java, C, C++
   - Web Technologies: HTML5, CSS3, JavaScript, Tailwind CSS
   - Databases: MySQL, MongoDB
   - Frameworks & AI: Streamlit, OpenCV, NumPy, Docker (Basics)
7. **Achievements & Certifications:**
   - LeetCode 360+ solved problems & SQL 50 badge
   - Ideathon 2026 & Made in India 2026 Hackathons
   - Certifications: Oracle, GDG, Cisco Python 1 & 2, MongoDB
8. **Contact Section & Footer:**
   - Interactive contact form (Name, Email, Subject, Message) via Formspree or EmailJS
   - Social links: GitHub (`github.com/kayalvijaya96-beep`), LinkedIn (`linkedin.com/in/kayalvizhi-sureshkumar-71473b383`), Email (`kayalvijaya96@gmail.com`), Phone (`+91 81228 90296`).

---

## 2. Step-by-Step Development Roadmap

```
Phase 1: Environment Setup & Project Initialization
   │
Phase 2: Architecture & Component Scaffold
   │
Phase 3: Resume Content Integration & Card Layout
   │
Phase 4: Mobile Responsiveness & Polish
   │
Phase 5: Local Testing & Validation
   │
Phase 6: Automated GitHub & Vercel Deployment
   │
Phase 7: Monitoring & Maintenance
```

### Phase 1: Environment Setup & Project Initialization
- Initialize project repository using Vite + React or Next.js.
- Install and configure Tailwind CSS and PostCSS (`tailwind.config.js`).
- Verify asset directory structure (`assets/profile.jpg` and `assets/Kayalvizhi_Resume.pdf`).
- Configure responsive viewport and Google Fonts (Plus Jakarta Sans or Inter).

### Phase 2: Design System & Shared Components
- Create standard `Card.jsx` / card containers with consistent blue-accented borders and shadow states.
- Build sticky `Navbar.jsx` with mobile toggle states.
- Build responsive `Footer.jsx` with social icons and quick anchors.
- Setup utility components for badges, tags, and section headers.

### Phase 3: Resume Content Integration
- Construct Hero component with enlarged profile avatar and call-to-action buttons.
- Build About & Education section highlighting Chennai Institute of Technology & CGPA 9.04.
- Build Experience section with timeline/card layout for CodeAlpha internships.
- Build Projects section using a responsive CSS grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Build Skills and Achievements grids with interactive tag badges.
- Implement Contact Form with simple client-side validation.

### Phase 4: Interactivity & Mobile Responsiveness
- Add smooth scrolling (`scroll-behavior: smooth`).
- Implement mobile hamburger menu with smooth slide-over drawer.
- Add hover transitions on cards (`hover:-translate-y-1 hover:shadow-xl duration-200`).
- Ensure touch targets for mobile buttons meet minimum 44px height guidelines.

### Phase 5: Testing & Quality Assurance
- Run development build and check for zero browser console warnings/errors.
- Responsive testing across breakpoints:
  - Mobile: 360px - 414px (iPhone / Android)
  - Tablet: 768px (iPad portrait)
  - Desktop: 1024px, 1280px, 1440px+
- Verify all links (LinkedIn, GitHub, mailto, phone) and resume download anchor.
- Run production build test: `npm run build` to verify clean compilation.

### Phase 6: Automated CI/CD & Deployment (GitHub + Vercel)
- Initialize local git repository, commit all code files, and push to GitHub (`main` branch).
- Link GitHub repository to Vercel via Vercel dashboard or CLI.
- Configure automatic deployment triggers on push to `main`.
- Add GitHub Actions workflow for pull request linting and preview validation.
- Verify live SSL certification and custom domain routing.

---

## 3. Antigravity IDE Prompts

Use the following detailed prompts in Antigravity IDE to execute each phase:

### Prompt 1: Creating the Portfolio
```text
I want to build my personal portfolio website using Vite + React and Tailwind CSS in the current directory.

Design Requirements:
1. Color Scheme: Blue and white palette (Primary Blue: #2563EB, Deep Navy: #1E3A8A, crisp white backgrounds, subtle blue borders #DBEAFE).
2. Enlarged Profile Picture: Place the profile image from './assets/profile.jpg' in the Hero section inside an enlarged circular frame (w-36 h-36 sm:w-44 sm:h-44) with an elegant ring-4 ring-blue-500/20 and shadow-2xl.
3. Mobile Responsiveness: All content must be organized in clean card components with grid-cols-1 md:grid-cols-2 lg:grid-cols-3 layouts.
4. Content based on my resume:
   - Name: Kayalvizhi Sureshkumar
   - Education: Chennai Institute of Technology, B.E. Computer Science and Engineering (CGPA: 9.04)
   - Internships: CodeAlpha (AI Intern: YOLOv8 Object Detection & Streamlit Translator; Java Intern: Student Grade Tracker & Stock Trading Platform)
   - Featured Projects: Real-time Object Detection (YOLOv8), Language Translator (Streamlit), Stock Trading Platform (Java), Pantry-to-Plate (HTML/CSS/JS - Ideathon 2026), StudyPilot (Python, AI, Streamlit, NumPy).
   - Skills: Python, Java, C, C++, HTML/CSS/JS, MySQL, MongoDB, Streamlit, OpenCV, NumPy, Docker (Basics).
   - Achievements: 360+ LeetCode problems solved, SQL 50 badge, Ideathon 2026, Made In India 2026 Hackathon, 365 Days Duolingo German streak.
   - Contact: kayalvijaya96@gmail.com, +91 81228 90296, GitHub: kayalvijaya96-beep, LinkedIn: kayalvizhi-sureshkumar-71473b383.

Please initialize the project, install dependencies, configure Tailwind CSS, and generate the complete modular components (Navbar, Hero, About, Experience, Projects, Skills, Achievements, Contact, Footer).
```

### Prompt 2: Running the Project Locally
```text
Please start the local development server for the portfolio project inside Antigravity IDE. Check that all packages and dependencies are properly installed, verify there are no compilation errors or missing CSS imports, and provide the local URL (e.g. http://localhost:5173) so I can preview the portfolio.
```

### Prompt 3: Testing the Project
```text
Please perform a comprehensive quality assurance check and test suite for the portfolio website:
1. Verify that `npm run build` succeeds without any TypeScript, JSX, or Tailwind bundling errors.
2. Test responsive layout breakpoints on mobile (375px), tablet (768px), and desktop (1280px) to ensure no card elements overflow horizontally.
3. Verify that the enlarged profile picture scales properly without distortion on small screens.
4. Test that all project links, resume download button, and social links (GitHub, LinkedIn, Email) open correctly with valid attributes (target="_blank" rel="noopener noreferrer").
5. Check accessibility: ensure good color contrast ratios for blue text on white backgrounds and alt tags for images.
```

### Prompt 4: Deploying to GitHub and Vercel
```text
Please guide and automate the deployment process to GitHub and Vercel:
1. Initialize Git in this directory if not already done, check `.gitignore` to ensure `node_modules` and `.env` are ignored, and commit all project files with a clean commit message.
2. Link the repository to my GitHub account (`github.com/kayalvijaya96-beep/portfolio`) and push the `main` branch.
3. Create a GitHub Actions workflow (`.github/workflows/deploy.yml`) to validate builds on pull requests.
4. Set up deployment on Vercel: provide step-by-step instructions or automate using the Vercel CLI to connect the GitHub repo so that every push to the `main` branch automatically builds and deploys to production with zero downtime.
```

---

## 4. Potential Issues & Recommended Solutions

| Category | Potential Issue | Recommended Solution |
| :--- | :--- | :--- |
| **Image Display** | Enlarged profile picture looks distorted or oval on mobile screens. | Apply `aspect-square object-cover rounded-full` in Tailwind to force an exact 1:1 ratio. |
| **Tailwind Purging** | CSS styles for cards or dynamic classes disappear in production build. | Ensure `content` array in `tailwind.config.js` includes all template paths: `["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`. |
| **Horizontal Overflow** | Mobile screens display unwanted horizontal scrollbar due to wide card margins. | Wrap top-level container with `overflow-x-hidden w-full` and use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. |
| **Vercel Build Failure** | Case sensitivity in imports causes 404 errors on Vercel's Linux servers (e.g. importing `Navbar` as `navbar`). | Strictly match filename casing across all imports and components. |
| **Contact Form Spam** | Plain mailto links trigger email client popup or get exposed to scrapers. | Integrate a free backend-less form endpoint such as Formspree, Web3Forms, or EmailJS. |
| **Asset Paths on Deploy** | Profile picture or resume PDF 404s after Vercel deployment. | Store static public assets in the `/public` root folder so they resolve directly from `/profile.jpg` and `/resume.pdf`. |

