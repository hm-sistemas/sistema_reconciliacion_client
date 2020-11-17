import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        console.log(response);
        /* if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data; */
      });
  }

  logout() {
    localStorage.removeItem("user");
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
