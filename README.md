# Harnoor Kaur - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional experience.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Animated Elements**: Smooth animations and transitions for a better user experience
- **Interactive Projects**: Showcase of my work with detailed descriptions and links
- **Contact Form**: Integrated contact form using FormSpree
- **Modern UI**: Clean, professional design with Material-UI components

## 🛠️ Technologies Used

- **Frontend**: React.js, Vite
- **Styling**: Material-UI, CSS-in-JS
- **Animations**: Framer Motion, Typed.js
- **Form Handling**: FormSpree
- **Deployment**: Cloudfare Pages

## 📋 Sections

- **Hero**: Introduction with animated role descriptions
- **Projects**: Showcase of my work with GitHub and live demo links
- **Skills**: Technical skills and expertise
- **Education**: Academic background and qualifications
- **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/harnoorkaur/portfolio-hk.git
   cd portfolio-hk
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your FormSpree endpoint
   ```
   VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🔧 Customization

- **Projects**: Update the projects array in `src/sections/Projects.jsx`
- **Skills**: Modify the skills in `src/sections/Skills.jsx`
- **Education**: Update education details in `src/sections/Education.jsx`
- **Contact**: Configure FormSpree endpoint in `src/sections/Contact.jsx`
- **Theme**: Customize colors and theme in `src/context/ThemeContext.jsx`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: harnoor1009@gmail.com
- **LinkedIn**: [Harnoor Kaur](https://www.linkedin.com/in/harnoorkaur1009/)
- **GitHub**: [harnoor497](https://github.com/harnoor497)

---

© 2025 Harnoor Kaur. All rights reserved.