import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface State {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<State>()(
  persist(
    (set) => ({
      language: 'ca',

      setLanguage: (language) => {
        set({language: language})
      }
    }),
    { name: "language" }
  ),
)
