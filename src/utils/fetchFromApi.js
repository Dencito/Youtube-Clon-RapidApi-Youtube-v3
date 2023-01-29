import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '26a4f30e8fmsh9ef34f12c72e006p1221e0jsn4ee8e1da108f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);

  return data;
};

