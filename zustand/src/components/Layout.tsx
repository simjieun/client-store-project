import { Link, Outlet, useLocation } from 'react-router-dom';

import { useSyncExternalStore } from 'react';
import { useUserStore } from '../store/user.ts';
import SwitchTheme from './SwitchTheme.tsx';

const userSubscribe = (callback: () => void) => useUserStore.subscribe(callback);
const getUserSnapshot = () => useUserStore.getState().userName;

const Heading = ({ heading }: { heading: string }) => {
  const userName = useSyncExternalStore(userSubscribe, getUserSnapshot);
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="h-14 w-full">
      <nav className="flex items-center justify-between m-2.5">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          <a href="/">{heading}</a>
        </h1>
        <div className="flex items-center gap-1.5">
          {userName ? (
            <span className="text-black dark:text-white">안녕하세요, {userName}님!</span>
          ) : (
            pathname !== '/login' && (
              <Link
                to="/login"
                className="rounded-lg text-[15px] font-semibold h-10 leading-[30px] bg-[#d72e36] text-white dark:text-black text-center box-border w-[80px]"
              >
                로그인
              </Link>
            )
          )}
          <SwitchTheme />
        </div>
      </nav>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  bg-white dark:bg-gray-900 transition-colors">
      <Heading heading="Client Store" />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
