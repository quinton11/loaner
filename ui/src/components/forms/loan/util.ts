import axios from "axios";
import { CreateLoan } from "../../../interfaces/loan";

export const createLoan = async (path: string, data: any): Promise<boolean> => {
  const url = `http://localhost:5000/${path}`;

  const res = await axios.post(url, data, { withCredentials: true });
  //console.log(res.status);
  if (res.status === 200) {
    return true;
  }
  return false;
};

export const convert = (data: any): CreateLoan => {
  const loan: CreateLoan = {
    idCard: "",
    principal: data["principal"],
    payDate: data["Due Date"],
    rate: 0,
  };

  return loan;
};
