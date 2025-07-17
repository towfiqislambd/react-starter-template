import { useQuery } from "@tanstack/react-query";
import { AllRecipes, HomepageBanner } from "./cms.api";

// Homepage - Banner
export const useHomepageBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: HomepageBanner,
  });
};

// All Recipes
export const useAllRecipes = (category_id, age_group, tag_id, search) => {
  return useQuery({
    queryKey: ["all-recipes", category_id, age_group, tag_id, search],
    queryFn: () => AllRecipes(category_id, age_group, tag_id, search),
  });
};
