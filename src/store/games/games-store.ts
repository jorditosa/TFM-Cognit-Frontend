import { Game } from '@/interfaces/game-interfaces';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface State {
  currentGame: Game;
  setCurrentGame: (game: Game) => void;
}

export const useGameStore = create<State>()(
  persist(
    (set) => ({
      currentGame: {
        title: '',
        explanation: '',
        categoryId: 0,
        points_reward: '0'
      },

      setCurrentGame: (game: Game) => {
        set({currentGame: game})
      }
    }),
    { name: "games" }
  ),
)
