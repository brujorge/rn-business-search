import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ir_Y_55hTbTY-yuV4lHe1N63RBgAZyLfnpqErnPfh1MvzhwwahwRFiYWTx4NUJR5TLnHgrbL6qyKWslQwzKparvGtCXiZwgcCrVaTeBAX7ua_3AZ_4uPqtwkIjj4XXYx"
  }
});
