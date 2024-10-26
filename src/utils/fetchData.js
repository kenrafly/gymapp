export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b9554be384msh17e06d4922d6e15p1637afjsn4867dcdb078e",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b9554be384msh17e06d4922d6e15p1637afjsn4867dcdb078e",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
