import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/home.tsx';
import List from './pages/list.tsx';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        path: 'list',
        Component: List,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

export default App;
