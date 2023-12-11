import { getPlayingGame } from "../services/gamesService";

const useGetGames = () => {

    const getGameToPlay = async (type) => {
        const games = await getPlayingGame(type);

        console.log(games)
    }
    

    return {
        getGameToPlay
    }
  
}
export default useGetGames