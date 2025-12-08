import axios from "axios";
const api = "https://to-dos-api.softclub.tj/api/to-dos";
export const getData = async () => {
  try {
    const { data } = await axios.get(api);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
