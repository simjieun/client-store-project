import { useEffect, useSyncExternalStore } from 'react';
import { Switch } from '@headlessui/react';
import { useThemeStore } from './store/theme.ts';
import { useUserStore } from './store/user.ts';
import LoginPage from './pages/login.tsx';

const userSubscribe = (callback: () => void) => useUserStore.subscribe(callback);
const getUserSnapshot = () => useUserStore.getState().userName;

function App() {
  const { theme, setTheme } = useThemeStore();
  const userName = useSyncExternalStore(userSubscribe, getUserSnapshot);
  // const { userName } = useUserStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-white dark:bg-gray-900 transition-colors">
      <h1 className="m-10 text-3xl font-bold text-black dark:text-white">Client Store Project</h1>
      <div className="flex gap-2.5">
        <p className="text-black dark:text-white">Zustand를 이용한 다크모드{userName}</p>
        <Switch
          checked={theme === 'dark'}
          onChange={handleThemeChange}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>
      </div>
      <LoginPage />
    </div>
  );
}

export default App;
