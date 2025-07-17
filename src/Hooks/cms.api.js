import { axiosPublic } from "./useAxiosPublic";
import { axiosSecure } from "./useAxiosSecure";

// Homepage - Banner
export const HomepageBanner = async () => {
  const { data } = await axiosPublic("/api/cms/home-banner");
  return data?.data;
};

export const AllRecipes = async (category_id, age_group, tag_id, search) => {
  let url = "/api/guest/recipes?";

  if (category_id) url += `category_id=${category_id}&`;
  if (age_group) url += `age_group=${age_group}&`;
  if (tag_id) url += `tag_id=${tag_id}&`;
  if (search) url += `search=${search}&`;

  // Remove the last '&' if we added any parameters
  url = url.endsWith("&") ? url.slice(0, -1) : url;
  // If no parameters were added, remove the '?'
  url = url.endsWith("?") ? url.slice(0, -1) : url;

  const { data } = await axiosPublic(url);
  return data?.data;
};
