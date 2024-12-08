import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './ListPage';
import { MovieProvider } from './context/movieContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListPage />,
  },
]);

function App() {
  return (
    <>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </>
  );
}

export default App;
