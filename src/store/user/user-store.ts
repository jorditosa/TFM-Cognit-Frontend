import { Player } from '../../interfaces/user-interfaces';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface State {
  player: Player | null;
  setPlayer: (player: Player) => void;
  updatePlayerPoints: (points: string) => void;
  deletePlayer: () => void;

}

export const usePlayerStore = create<State>()(
  persist(
    (set) => ({
      player: {
        email: '',
        points: '',
      },

      setPlayer: (player: Player) => {
        set({player: player})
      },

      updatePlayerPoints: (points: string) => {
        set((state) => {
          if (state.player) {
            return { player: { ...state.player, points } };
          }
          return state;
        });
      },

      deletePlayer: () => {
        set({player: null})
      }
    }),
    { name: "player" }
  ),
)
