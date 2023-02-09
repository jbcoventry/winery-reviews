const fetchList = async () => {
  const apiAddress = import.meta.env.VITE_WINERY_REVIEWS;
  const apiParameters = "fields=title%2CtotalScore%2CreviewsCount";

  const apiRes = await fetch(apiAddress + apiParameters);

  if (!apiRes.ok) {
    throw new Error("fetchList fetch not ok");
  }

  return apiRes.json();
};

export default fetchList;
