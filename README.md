# Movie List Application

This project is a simple **Movie List Application** built with **Vite**, **React**, and **TypeScript**. It demonstrates basic CRUD (Create, Read, Update, Delete) functionality and uses **React Context API** for state management. The app also includes a **search feature** to find movies by name or description.

---

## **Features**

- Add new movies (name and description).
- Edit existing movies.
- Delete movies from the list.
- View (read) the list of movies.
- Search for movies by name.

---

## **Getting Started**

Follow these steps to set up and run the project on your local machine.

### **Prerequisites**

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/Abuka-Victor/movie_list.git
   cd movie_list
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## **Running the Application**

### **Development Mode**

Start the development server to run the application locally:

```bash
npm run dev
# or
yarn dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) (or a different port as specified in your terminal).

### **Build for Production**

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The production files will be generated in the `dist` folder.

### **Preview Production Build**

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## **Project Structure**

Here's an overview of the main project files and folders:

```
movie-list-app/
├── public/          # Static assets
├── src/
│   ├── context/     # React Context API for state management
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Entry point
│   ├── ListPage.tsx # The root page of the application that displays the list of movies
│   ├── ListCard.tsx # The movie card component
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── tailwind.config.json    # Tailwind configuration
```

---

## **How It Works**

1. **State Management**: The app uses React Context to manage global state for movies.
2. **CRUD Operations**:
   - **Add/Edit/Delete**: State updates are handled via context actions.
   - **Read/Search**: Filters the movie list based on search input.
3. **TypeScript**: Provides static type checking to ensure robust and error-free code.

---
