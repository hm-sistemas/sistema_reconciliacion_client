export class Split {
  Z: number;
  comments: string = "";
  id: number;
  total: number = 0;
  totalCorresponsal: number = 0;
  totalPesosCash: number = 0;
  totalPesosCredit: number = 0;
  totalPesosDebit: number = 0;
  totalPesosCard: number = 0;
  constructor(id: number, Z: number, comments: string) {
    this.Z = Z;
    this.comments = comments;
    this.id = id;
  }
}
