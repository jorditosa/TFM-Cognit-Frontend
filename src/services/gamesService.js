import axios from 'axios';

export const getGames = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/games`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getPlayingGame = async (type) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/games?search=${type}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}