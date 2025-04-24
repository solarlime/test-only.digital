interface IDate {
  date: number;
  content: string;
}

interface IPeriod {
  from: number;
  to: number;
  theme: string;
  dates: IDate[];
}

interface IExtendedPeriod extends IPeriod {
  number: number;
}

export type { IPeriod, IDate, IExtendedPeriod };
