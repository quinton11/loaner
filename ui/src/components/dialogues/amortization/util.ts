import { LoanInfo, LoanPieItem } from "../../../interfaces/loan";

const dateMap: Map<number, string> = new Map<number, string>([
  [0, "Jan"],
  [1, "Feb"],
  [2, "Mar"],
  [3, "Apr"],
  [4, "Apr"],
  [5, "May"],
  [6, "Jun"],
  [7, "Jul"],
  [8, "Aug"],
  [9, "Sep"],
  [10, "Oct"],
  [11, "Nov"],
]);

export const mapping = () => {
  return dateMap;
};

export const getMonth = (date: string): string => {
  const d = new Date(date).getMonth();
  const val = dateMap.get(d) as string;
  return val;
};

export const getYear = (date: string): string => {
  const d = new Date(date).getFullYear();
  return d.toString();
};

export const getPieItems = (loan: LoanInfo): LoanPieItem[] => {
  const pieItems = new Array<LoanPieItem>();

  //principal
  const pItem: LoanPieItem = {
    value: loan.principal,
    category: "principal",
    summary: `Principal of loan #${loan.id}`,
  };

  //interest
  const iItem: LoanPieItem = {
    value: loan.interest,
    category: "interest",
    summary: `Interest of loan #${loan.id}`,
  };

  pieItems.push(pItem, iItem);
  console.log(pieItems)
  return pieItems;
};
