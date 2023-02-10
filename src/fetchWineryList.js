const fetchWineryList = async () => {
  const apiAddress = import.meta.env.VITE_WINERY_REVIEWS;
  const Parameters = "?fields=title%2CtotalScore%2CreviewsCount";

  const apiRes = await fetch(apiAddress + Parameters);

  if (!apiRes.ok) {
    throw new Error("fetchWineryList fetch not ok");
  }

  return apiRes.json();
};

export default fetchWineryList;
