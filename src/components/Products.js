import React from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";

export const productsData = [
  {
    id: 1,
    name: "NIKE Liteforce Blue Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status: "Available"
  },
  {
    id: 2,
    name: "U.S. POLO ASSN. Slippers",
    description:
      "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status: "Available"
  },
  {
    id: 3,
    name: "ADIDAS Adispree Running Shoes",
    description:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status: "Available"
  },
  {
    id: 4,
    name: "Lee Cooper Mid Sneakers",
    description:
      "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status: "Out of Stock"
  }
];
const data = [
  {
    id: 1,
    name: "NIKE Liteforce Blue Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status: "Available"
  },
  {
    id: 2,
    name: "U.S. POLO ASSN. Slippers",
    description:
      "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status: "Available"
  },
  {
    id: 3,
    name: "ADIDAS Adispree Running Shoes",
    description:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status: "Available"
  },
  {
    id: 4,
    name: "Lee Cooper Mid Sneakers",
    description:
      "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status: "Out of Stock"
  }
];
//const Products = ({ match }) => {
class Products extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    //let linkList = productsData.map(product => {
      let linkList = data.map(product => {
      return (
        <li key={product.id}>
          <Link to={`${this.props.match.url}/${product.id}`}>{product.name}</Link>
        </li>
      );
    });
    return(
      <div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <div
          style={{
            float: "left",
            padding: "10px",
            width: "30%",
            background: "#f0f0f0",
            marginLeft: "auto"
          }}
        >
          <h3> Products</h3>
          <ul style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            {" "}
            {linkList}{" "}
          </ul>
        </div>
      </div>

      {/*<Route
        path={`${this.props.match.url}/:productId`}
        //component={Product}
        render={props => <Product {...props} />}
        //render={props => <Product data={productsData} {...props} />}
      />
      <Route
        exact
        path={this.props.match.url}
        render={() => (
          <div style={{ textAlign: "center" }}>Please select a product.</div>
        )}
        />*/}
    </div>
    );
  }
}
  
export default Products;
