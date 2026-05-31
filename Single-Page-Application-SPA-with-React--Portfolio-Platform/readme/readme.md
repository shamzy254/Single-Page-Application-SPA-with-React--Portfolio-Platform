# Creative Agency Project Showcase

A modern, responsive, and dynamic web application built to showcase past projects for a creative agency. This platform provides a seamless user experience for potential clients and collaborators to browse work, search through projects, and dynamically add new portfolio items in real time.

## 🚀 Core Features

- **Project Landing Page:** A clean, modern grid layout inspired by professional design mockups to display agency work.
- **Dynamic Project Creation:** An interactive form allowing users to add new projects (Title, Description, Technologies, and Image URLs) without reloading the page.
- **Real-time Filter & Search:** Instant filtering capabilities to search through projects by name, description, or technology tags.
- **Responsive Layout:** Optimized with fluid grid layouts for mobile, tablet, and desktop viewports using Tailwind CSS.
- **Robust Component Architecture:** Modular React components ensuring clean, maintainable, and reusable code.

## 🛠️ Tech Stack

- **Frontend Library:** React (Vite)
- **Styling:** Tailwind CSS (Utility-first CSS Framework)
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Testing Suite:** Jest & React Testing Library

---

## 💻 Getting Started

Follow these steps to set up, run, and test the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v16.x or higher)
- **npm** (v7.x or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-github-repository-url>
   cd agency-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.*

---

## 📂 Project Structure

```text
agency-portfolio/
├── src/
│   ├── components/       # Reusable UI elements (Navbar, ProjectCard, ProjectForm)
│   ├── data/             # Mock initial data (projects.json)
│   ├── pages/            # Application views (Home/Landing Page, Details Page)
│   ├── App.jsx           # Main application wrapper and state manager
│   ├── index.css         # Global styles and Tailwind directives
│   └── main.jsx          # React application entry point
├── package.json          # Project metadata and script commands
├── tailwind.config.js    # Tailwind configuration settings
└── README.md             # Project documentation
```

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** to ensure component reliability and state management validation.

To execute the test suite, run the following command in your terminal:
```bash
npm run test
```

### Verified Test Cases:
- Validates that the project grid renders all initial mockup data successfully.
- Tests the interactive search input to ensure it accurately filters shown projects.
- Verifies form behavior, confirming that newly submitted projects are instantly injected into the DOM layout.

---

## 🤝 Contribution & License

This project was built as a personal project showcase application. Feel free to fork it, customize the styles, or add backend integration. 
