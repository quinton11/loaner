import axios from "axios";
import { CustomerAccess } from "../../../interfaces/customer";

export const signIn = async (path: string, data: any): Promise<boolean> => {
  const url = `http://localhost:5000/${path}`;

  const res = await axios.post(url, data, { withCredentials: true });
  //console.log(res.status);
  if (res.status === 200) {
    return true;
  }
  return false;
};

export const convert = (data: any): CustomerAccess => {
  const cus: CustomerAccess = {
    idCard: data["idCard"],
    password: data["Password"],
    email: data["Email"],
  };

  return cus;
};
