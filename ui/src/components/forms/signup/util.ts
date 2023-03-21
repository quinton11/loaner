import axios from "axios";
import { CustomerType } from "../../../interfaces/customer";

export const signUp = async (path: string, data: any) => {
  const url = `http://localhost:5000/${path}`;

  const res = await axios.post(url, data, { withCredentials: true });
  console.log(res.status);
};

export const convert = (data: any): CustomerType => {
  const cus: CustomerType = {
    idCard: data["idCard"],
    firstName: data["First Name"],
    lastName: data["Last Name"],
    password: data["Password"],
    telephone: data["telephone"],
    email: data["Email"],
    dob: data["Date of Birth"],
    employed: data["isEmployed"],
  };

  return cus;
};
