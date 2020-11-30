import axios from "axios";

const API_URL = "https://sidofqa.segob.gob.mx/dof/sidof/indicadores/";

class RateService {
  search(date: string) {
    return axios.get(API_URL + date).then((response: any) => {
      if (response.ListaIndicadores.length > 1) {
        const value = response.ListaIndicadores[0].valor;
        return value;
      } else {
        return 0;
      }
    });
  }
}

export default new RateService();
