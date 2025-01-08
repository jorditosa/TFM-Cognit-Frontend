import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface State {
  game: {
    game_title: string;
    game_description: string;
  }
  currentGame: number;
  setGame: (games: number) => void;
}

export const useGameStore = create<State>()(
  persist(
    (set) => ({
      game: {
        game_title: '',
        game_description: ''
      },

      currentGame: 2,

      setGame: (games) => {
        set({currentGame: games})
      }
    }),
    { name: "games" }
  ),
)
