import unplash from "../../api/unsplash";

const image = async (input, page = 1) => {
  const data = await unplash.get("/search/photos", {
    params: {
      query: input,
      page,
      per_page: 9,
    },
  });

  return data;
};

export default image;
