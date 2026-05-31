# Creative Agency - Responsive Portfolio Platform

A modern, responsive, and dynamic Single Page Application (SPA) built with React to showcase creative projects. This platform allows a creative agency to display their past work seamlessly, filter through projects in real-time, and dynamically add new work to their portfolio as it is completed.

## 🚀 Features

*   **Dynamic Project Showcase:** A clean landing page layout inspired by modern design mock-ups displaying all active agency projects.
*   **Real-Time Filtering:** A robust search feature that allows users to instantly find and filter projects dynamically by title or technology stack.
*   **Dynamic Project Management:** An interactive, client-side form to instantly add new projects (with fields for title, description, image URL, and tags) without requiring a hard reload.
*   **Fully Responsive Layout:** Optimised for desktop, tablet, and mobile viewing environments.
*   **Test-Driven Foundation:** Built-in unit and component testing using Jest and React Testing Library.

---

## 🛠️ Component Architecture & Hierarchy

The application structure is broken down into modular, reusable functional components to ensure easy maintenance:

```text
App (Manages global state: project list, search queries)
├── Header (Contains brand identity and core navigation)
├── SearchBar (Captures search inputs to filter parent state)
├── ProjectForm (Handles input validation and dynamic submission of new items)
└── ProjectGrid (Renders the collection of project elements)
    └── ProjectCard (Displays individual project details, images, and tech tags)
```

---

## 💾 State & Props Management

*   **Global State (`App.js`):**
    *   `projects`: An array of objects holding the database of portfolio items.
    *   `searchQuery`: A string track-pad capturing the live character input from the search utility.
*   **Data Flow:**
    *   `projects` and `searchQuery` flow downward as **props** to drive `ProjectGrid` and `ProjectCard`.
    *   An inverse functional callback (`handleAddProject`) is passed as a **prop** to `ProjectForm` to bubble new project inputs back up to the parent array.

---

## 💻 Tech Stack

*   **Frontend Library:** React (Functional Components, Hooks)
*   **Styling:** CSS3 / Modern Flexbox & CSS Grid
*   **Testing Suites:** Jest & React Testing Library
*   **Version Control:** Git & GitHub

---

## ⚙️ Getting Started

Follow these steps to set up, run, and test the project locally on your machine.

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed (v16.x or higher recommended).

### 1. Clone the Repository
```bash
git clone https://github.com
cd Single-Page-Application-SPA-with-React--Portfolio-Platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Local Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 4. Execute the Test Suite
To verify that components, rendering logic, and filtering states are functioning as intended:
```bash
npm test
```

---

## 📋 Software Development Lifecycle (SDLC) Blueprint

1.  **Task 1: Define the Problem:** Established component structure, isolated interactive states, and outlined hierarchical data pipelines.
2.  **Task 2: Determine the Design:** Mapped a structured UI skeleton matching mock-up guidelines emphasizing fluid grids for responsive views.
3.  **Task 3: Develop the Code:** Programmed pure UI presentation components, bound search filters via continuous state evaluation, and implemented custom form hooks.
4.  **Task 4: Test and Debug:** Conducted functional tests covering form submissions and input-state filtering actions using React Testing Library.
5.  **Task 5: Document and Maintain:** Created deployment parameters, structured clean variable trees, and constructed this README documentation.
