import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Products extends Component {
  state = {
    products: [
      { id: 11, name: "Primero", price: 150 },
      { id: 12, name: "Segundo", price: 200 },
      { id: 13, name: "Tercero", price: 50 },
      { id: 14, name: "Cuarto", price: 10 },
      { id: 15, name: "Quinto", price: 170 },
      { id: 16, name: "Sexto", price: 850 },
      { id: 17, name: "Septimo", price: 80 },
      { id: 18, name: "Octavo", price: 15 }
    ]
  };

  render() {
    return (
      <div>
        <div className="row p-2">
          {this.state.products.map(product => (
            <div className="col-md-4 p-2" key={product.id}>
              <div class="card">
                <img
                  src="https://picsum.photos/200"
                  class="card-img-top"
                  alt="Product"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h5 className="card-title">${product.price}</h5>
                  <Link to="/products" className="btn btn-success">
                    Buy!
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li className="page-item">
              <Link to="/products" className="page-link">
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link to="/products" className="page-link">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link to="/products" className="page-link">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link to="/products" className="page-link">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link to="/products" className="page-link">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Products;
