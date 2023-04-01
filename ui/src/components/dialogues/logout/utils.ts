import axios from "axios";

export const logOut = async (path: string) => {
  try {
    const url = `http://localhost:5000/${path}`;

    const res = await axios.post(url, {}, { withCredentials: true });
    //console.log(res);
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (err) {

    return false;
  }
};
