export default class Invoice {
  type: number;
  comments: string = "";
  id: number;
  incomeId: number;
  amount: number = 0;
  currency: number = 0;
  payment: number = 0;
  number: number = 0;

  constructor(id: number, type: number, incomeId: number, number: number) {
    this.type = type;
    this.id = id;
    this.incomeId = incomeId;
    this.number = number;
  }

  getCurrency() {
    switch (this.currency) {
      case 0:
        return "Pesos";

      case 1:
        return "Dólares";

      default:
        // code...
        break;
    }
  }

  getType() {
    switch (this.type) {
      case 0:
        return "Consulta";

      case 1:
        return "Farmacia";

      default:
        // code...
        break;
    }
  }

  getPayment() {
    switch (this.payment) {
      case 0:
        return "Efectivo";

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
