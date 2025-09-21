import axios from "axios";

export const getAllPokemon = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("ポケモン一覧の取得に失敗しました", error);
    throw error;
  }
};

export const getPokemon = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("ポケモン詳細の取得に失敗しました", error);
    throw error;
  }
};
