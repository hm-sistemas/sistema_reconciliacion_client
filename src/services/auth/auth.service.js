import axios from "axios";
import User from "../../classes/User";

const API_URL = "http://localhost:8000/api/";

class AuthService {
  login(email, password, device) {
    return axios
      .post(API_URL + "login", { email, password, device })
      .then((response) => {
        if (response.data.token) {
          const user = new User(
            response.data.data.id,
            response.data.data.name,
            response.data.data.email
          );
          user.token = response.data.token;
          localStorage.setItem("user", JSON.stringify(user));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  register(name, email, password, device) {
    return axios.post(API_URL + "register", {
      name,
      email,
      password,
      device,
    });
  }
}

export default new AuthService();
