import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListDetail from './ListDetail';
import ListPage from './ListPage';
import { MovieProvider } from './context/movieContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListPage />,
  },
  {
    path: 'detail',
    element: <ListDetail />,
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
