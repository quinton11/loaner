import axios from "axios";

export const fetchUser = async (path: string) => {
  try {
    const url = `http://localhost:5000/${path}`;

    const res = await axios.post(
      url,
      { data: "Hello" },
      { withCredentials: true }
    );

    if (res.status === 200) {
      return res.data;
    }
    return null;
  } catch (err) {
    return null;
  }
};
