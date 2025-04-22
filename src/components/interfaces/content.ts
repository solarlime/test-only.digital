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

export type { IPeriod, IDate };
