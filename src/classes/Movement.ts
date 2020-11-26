import dayjs from "dayjs";
export default class Split {
  amount: number;
  card_number: string = "";
  id: number;
  incomeId: number;
  type: number = 2;
  dateTimeProcessed: dayjs.Dayjs = dayjs();
  constructor(
    id: number,
    amount: number,
    card_number: string,
    incomeId: number
  ) {
    this.amount = amount;
    this.card_number = card_number;
    this.id = id;
    this.incomeId = incomeId;
  }
  getType() {
    switch (this.type) {
      case 1:
        return "Tarjeta crédito";

      case 2:
        return "Tarjeta débito";

      default:
        // code...
        break;
    }
  }
}
