import axios from "axios";

export const baseURL = "http://localhost:4000";

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const CarsAPI = {
  getAllCars() {
    return instance.post("/api", {
      query: `query GetAllCars {
        cars {
          id
          brand
          model
          color
          model_year
          img_src
          price
          description
          availability
        }
        }`,
    }).then(res => res.data)
  },
  getCarsByName(search: string) {
    return instance.post("/api", {
      query: `query GetAllCars($search: String) {
        cars(search: $search) {
          id
          brand
          model
          color
          model_year
          img_src
          price
          description
          availability
        }
        
        }`,
      variables: { search },
    }).then(res => res.data)
  },
};
