import dayjs from "dayjs";
export default class Split {
  amount: number;
  card_number: string = "";
  id: number;
  incomeId: number;
  type: number = 2;
  dateTimeProcessed: dayjs.Dayjs;
  constructor(
    id: number,
    amount: number,
    card_number: string,
    incomeId: number,
    dateTimeProcessed: string
  ) {
    this.amount = amount;
    this.card_number = card_number;
    this.id = id;
    this.incomeId = incomeId;
    this.dateTimeProcessed = dayjs(dateTimeProcessed);
  }
}
