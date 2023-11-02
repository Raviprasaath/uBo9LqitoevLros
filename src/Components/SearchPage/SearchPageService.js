import { instance } from "../ApiFetch";

const searchSuggestionResults = async (input) => {
  try {
    const search = encodeURIComponent(`{"title":"${input}"}`);
    const suffix = `/ott/show?search=${search}&limit=500`;
    const response = await instance.get(suffix);
    console.log("res", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}

export { searchSuggestionResults };
