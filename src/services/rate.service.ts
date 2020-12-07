import axios from "axios";

const API_URL = "https://sidofqa.segob.gob.mx/dof/sidof/indicadores/";

class RateService {
  async search(date: string) {
    return axios
      .get(API_URL + date)
      .then((response: any) => {
        if (response.data.ListaIndicadores.length > 1) {
          const value = response.data.ListaIndicadores[0].valor;
          return value;
        } else {
          return 0;
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}

export default new RateService();
