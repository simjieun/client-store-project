import { create } from 'zustand';

type UserStoreState = {
  isLoggedIn: boolean;
  userName: string;
  login: (userName: string) => void;
  logout: () => void;
};

export const useUserStore = create<UserStoreState>((set) => ({
  isLoggedIn: false,
  userName: localStorage.getItem('client_zustand_username') || '',
  login: (userName: string) => {
    localStorage.setItem('client_zustand_username', userName);
    set({ isLoggedIn: true, userName });
  },
  logout: () => {
    localStorage.removeItem('client_zustand_username');
    set({ isLoggedIn: false, userName: '' });
  },
}));
