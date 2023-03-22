import { Loan } from "entities/loan";

export interface CustomerType {
  idCard: string;
  firstName: string;
  lastName: string;
  password: string;
  telephone: number;
  email: string;
  dob: Date;
  employed: boolean;
}

export interface CustomerAccess {
  idCard: string;
  email: string;
  password: string;
}

export interface CustomerDetails {
  idCard: string;
  firstName: string;
  lastName: string;
  email: string;
  loans: Loan[];
}
