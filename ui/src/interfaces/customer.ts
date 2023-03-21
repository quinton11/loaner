export interface CustomerType {
  idCard: string;
  firstName: string;
  lastName: string;
  password: string;
  telephone: number;
  email: string;
  dob: string;
  employed: boolean;
}


export interface CustomerAccess {
  idCard: string;
  email: string;
  password: string;
}
