import { create } from 'zustand';

type ThemeStoreState = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};
export const useThemeStore = create<ThemeStoreState>((set) => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));
