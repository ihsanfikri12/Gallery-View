import unplash from "../../api/unsplash";

const image = async (input, page = 1) => {
  const data = await unplash.get("/search/photos", {
    params: {
      query: input,
      page,
      per_page: 9,
    },
  });

  const { results } = data.data;

  if (results.length === 0) return;

  return [+data.data.total_pages, results];
};

export default image;
