import { LoanInfo, LoanPieItem } from "../../../interfaces/loan";


export const optionsPie = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        font: {
          size: 10,
          family: "Montserrat",
          weight: "bold",
          fontColor: "rgba(225,225,225,0.7)",
        },
      },
    },
  },
};
export const options = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        font: {
          size: 10,
          family: "Montserrat",
          weight: "bold",
          fontColor: "rgba(225,225,225,0.7)",
        },
      },
      display: true,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
          family: "Montserrat",
          weight: "bold",
          fontColor: "rgba(225,225,225,0.7)",
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 10,
          family: "Montserrat",
          weight: "bold",
          fontColor: "rgba(225,225,225,0.7)",
        },
      },
    },
  },
};

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

export const getDay = (date: string): number => {
  const d = new Date(date).getDay() as number;
  return d;
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
  console.log(pieItems);
  return pieItems;
};

export const getPieData = (loan: LoanInfo) => {
  const periodicRate = (1 / 12) * (loan.rate / 100);
  console.log(periodicRate);

  //number of payments over loans lifetime
  const numPayments = loan.duration * 12;
  let monthlyPayment = monthlyPay(loan.principal, periodicRate, numPayments);
  const principals = new Array<number>();
  const interests = new Array<number>();
  const amounts = new Array<number>();
  const labels = new Array<number>();

  var outstandingBalance = loan.principal;
  var i = 0;
  while (outstandingBalance > 0) {
    //calc interest
    let interest = outstandingBalance * periodicRate;
    //calc payment
    let principal = monthlyPayment - interest;

    amounts.push(outstandingBalance);
    interests.push(interest);
    principals.push(principal);
    labels.push(i + 1);

    outstandingBalance -= principal + interest;
    //monthlyPayment = monthlyPay(principal, periodicRate, numPayments);
    i++;
  }
  const data: any = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "value",
        data: [
          principals.reduce(function (a, b) {
            return a + b;
          }, 0),
          interests.reduce(function (a, b) {
            return a + b;
          }, 0),
        ],
        backgroundColor: ["#00cdbe", "#ff7087"],
        borderWidth: 0,
        fontfamily: "Montserrat",
      },
    ],
  };
  return data;
};

export const calcAmortPlan = (loan: LoanInfo) => {
  //calculate payments of principal and interest for each month
  //calculate amount for each month
  //plot the data
  const periodicRate = (1 / 12) * (loan.rate / 100);
  console.log(periodicRate);

  //number of payments over loans lifetime
  const numPayments = loan.duration * 12;
  let monthlyPayment = monthlyPay(loan.principal, periodicRate, numPayments);
  const principals = new Array<number>();
  const interests = new Array<number>();
  const amounts = new Array<number>();
  const labels = new Array<number>();

  var outstandingBalance = loan.principal;
  var i = 0;
  while (outstandingBalance > 0) {
    //calc interest
    let interest = outstandingBalance * periodicRate;
    //calc payment
    let principal = monthlyPayment - interest;

    amounts.push(outstandingBalance);
    interests.push(interest);
    principals.push(principal);
    labels.push(i + 1);

    outstandingBalance -= principal + interest;
    //monthlyPayment = monthlyPay(principal, periodicRate, numPayments);
    i++;
  }
  console.log(interests.length);
  console.log(principals.length);
  console.log(amounts.length);

  const pdata = {
    label: "principal",
    data: principals,
    lineTension: 0,
    fill: false,
    borderColor: "#00cdbe",
    fontfamily: "Montserrat",
  };
  const idata = {
    label: "interest",
    data: interests,
    lineTension: 0,
    fill: false,
    borderColor: "#ff7087",
    fontfamily: "Montserrat",
  };

  const balance = {
    label: "balance",
    data: amounts,
    lineTension: 0,
    fill: false,
    borderColor: "white",
    fontfamily: "Montserrat",
  };

  const data: any = {
    labels: labels.map((val) => `${val} mth`),
    datasets: [pdata, idata, balance],
    fontColor: "white",
  };

  return data;
};

const monthlyPay = (amount: number, pR: number, np: number) => {
  //monthly payments
  const mPayment = amount * ((pR * (1 + pR) ** np) / ((1 + pR) ** np - 1));
  return mPayment;
};
