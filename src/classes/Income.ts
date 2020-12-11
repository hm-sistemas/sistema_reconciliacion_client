import dayjs from "dayjs";
export default class Income {
  exchangeRate: number;
  comments: string = "";
  id: number;
  depositId: number;
  year: number = 0;
  month: number = 0;
  total: number = 0;
  totalCorresponsal: number = 0;
  totalPesosCash: number = 0;
  totalPesosCredit: number = 0;
  totalPesosDebit: number = 0;
  totalPesosCard: number = 0;
  totalPesos: number = 0;
  totalPesosUSD: number = 0;
  totalVoucher: number = 0;
  date: dayjs.Dayjs = dayjs();
  constructor(
    id: number,
    exchangeRate: number,
    comments: string,
    depositId: number,
    date: string
  ) {
    this.exchangeRate = exchangeRate;
    this.comments = comments;
    this.id = id;
    this.depositId = depositId;
    this.date = dayjs(date);
  }
}
