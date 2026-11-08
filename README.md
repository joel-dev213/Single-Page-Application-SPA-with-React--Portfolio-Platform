# Joel Maina — Project Showcase

A single-page React application for showcasing software projects that I have been creating. Visitors can browse a seeded project list, filter it by category, like/unlike projects, and add new projects through a form. The UI is built with Tailwind CSS and is responsive from mobile to desktop. This makes it reliable for any user to access the (SPA) with any device of choice.


## Tech Stack Used to create the (SPA)

- **React 19** — component-based UI and state management
- **Vite 8** — development server and production build
- **Tailwind CSS 4** (via `@tailwindcss/vite`) — styling
- **ESLint 9** — linting (React, hooks, and refresh rules)

## Prerequisites so as to run  the programme on you terminal

- Node.js (required by Vite 8)
- npm(or a compatible package manager)

Check your versions:

```bash
node --version
npm --version
```

## Process on how you can get to Setup

1. git clone the repository to your terminal to get access to the Directory.

2. Navigate to the project directory:

   ```bash
   cd my-app
   ```

3.  Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL printed in the terminal (usually <http://localhost:5173>) in your browser.


## Usage

- **Browse projects**
- **Search for your project**
- **Filter projects** — Get to filter the projects available with the available grid above.
- **Like / unlike** — click `Like` on a card to increment its count; the button becomes `Unlike` and clicking again decrements it. The count updates immediately.
- **Add a project** — fill in the form at the top:
  - **Title** (required)
  - **Category** (select from the available tech options for the project)
  - **Description** (Describe what your project is about and what it does and how it got built)
  
 

## Project Structure

```
my-app/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Page shell + project state
    ├── Navigation.jsx      # Top navigation bar
    ├── Header.jsx          # Hero header
    ├── Projectform.jsx     # Add-project form
    ├── Project.jsx         # Project list, filtering, categories
    ├── Searchbar.jsx       # Search input with clear button
    ├── FilterButton.jsx    # Reusable filter pill
    ├── Projectcard.jsx     # Individual project card + like state
    ├── data.js             # Seed projects and tech options
    ├── index.css           # Tailwind import + base styles
    └── assets/             # Static images
```

### Component tree

```
App
├── Navigation
├── Header
├── Projectform
└── Projects
    ├── FilterButton (one per category)
    └── Projectcard (one per project)
```

## Features for the (SPA)

- **Clear component hierarchy** 
- **State management**
- **Derived filtering**
- **Event handling**
- **Props flow** 
- **Responsive design** 
- **Accessibility basics** 
- **Empty state**
- **Clean tooling**

## Known Limitations

- **No persistence** 
- **No edit or delete** 
- **Filtering is title-based** 
- **Likes are local and unsaved** 
- **Category options** 
- **No authentication or user accounts** — anyone using the app can add projects and like them.
- **No automated test suite** — there are no unit or end-to-end tests. Behaviour was verified manually (add, filter, like, form reset, and responsive layout).
- **Basic accessibility** — the app uses labels and ARIA toggles, but it has not been audited with a screen reader or automated accessibility tooling.

