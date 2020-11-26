import dayjs from "dayjs";
export default class Deposit {
  comments: string = "";
  id: number;
  type: number;
  total: number = 0;
  totalDollars: number = 0;
  totalPesos: number = 0;
  pending: boolean = true;
  date: dayjs.Dayjs = dayjs();
  dateFrom: dayjs.Dayjs = dayjs();
  dateTo: dayjs.Dayjs = dayjs();
  constructor(id: number, comments: string, type: number) {
    this.comments = comments;
    this.id = id;
    this.type = type;
  }

  getType() {
    switch (this.type) {
      case 0:
        return "Electrónico";

      case 1:
        return "Efectivo";

      default:
        return "Deposito pendiente";
    }
  }
}
