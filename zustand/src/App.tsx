import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.tsx';
import Layout from './components/Layout.tsx';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'login',
        Component: LoginPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

export default App;
