import axios from "axios";
import Income from "../classes/Income";
import authHeader from "./auth/auth-header";

const API_URL = process.env.REACT_APP_API_URL;

class IncomeService {
  get() {
    return axios.get(API_URL + "incomes", { headers: authHeader() });
  }
  create(income: Income) {
    return axios.post(API_URL + "incomes", income, { headers: authHeader() });
  }
}

export default new IncomeService();
