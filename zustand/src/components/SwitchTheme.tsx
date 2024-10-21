import { useThemeStore } from '../store/theme.ts';
import { useEffect, useSyncExternalStore } from 'react';
import { Switch } from '@headlessui/react';

const themeSubscribe = (callback: () => void) => useThemeStore.subscribe(callback);
const getThemeSnapshot = () => useThemeStore.getState();

const SwitchTheme = () => {
  //const { theme, setTheme } = useThemeStore();
  const { theme, setTheme } = useSyncExternalStore(themeSubscribe, getThemeSnapshot);

  console.log('theme:', theme);
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
    <div className="flex gap-2.5">
      <span className="flex items-center justify-center w-[30px] h-[30px] bg-gray-400 dark:bg-white rounded-full border border-gray-400">
        {theme === 'light' ? <>🌙</> : <>🌑</>}
      </span>
      <Switch
        checked={theme === 'dark'}
        onChange={handleThemeChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600 h-7"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    </div>
  );
};

export default SwitchTheme;
