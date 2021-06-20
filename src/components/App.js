import { Cart, Navbar } from "./Index";
import { data } from "../data";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productQty: [
        {
          id: -1,
          qty: 1,
        },
      ],
    };
  }
  componentDidMount() {
    const { productQty } = this.state;

    data.forEach((item) => {
      this.state.productQty.push({
        id: item.id,
        qty: 1,
      });
    });

    this.setState({
      product: data,
      productQty,
    });
  }
  handleIncreamentProduct = (index) => {
    const { productQty } = this.state;
    productQty[index].qty += 1;
    this.setState({
      productQty,
    });
  };
  handleDecrementProduct = (index) => {
    const { productQty } = this.state;
    if (productQty[index].qty === 1) return;
    productQty[index].qty -= 1;
    this.setState({
      productQty,
    });
  };
  handleDeleteProduct = (id) => {
    const { product, productQty } = this.state;
    const items = product.filter((item) => item.id !== id);
    const itemsQty = productQty.filter((item) => item.id !== id);
    // console.log("after delete ", items);

    this.setState({
      product: items,
      productQty: itemsQty,
    });
  };

  handleTotalPrice = () => {
    const { product, productQty } = this.state;
    let totalPriceofItems = 0;
    product.forEach((item, index) => {
      totalPriceofItems += item.price * productQty[index + 1].qty;
    });
    return totalPriceofItems;
  };
  handleTotalDiscount = () => {
    const { product, productQty } = this.state;
    let totalDiscount = 0;
    product.forEach((item, index) => {
      totalDiscount += item.discount * productQty[index + 1].qty;
    });
    return totalDiscount;
  };
  handleTypeDiscount = () => {
    const { product, productQty } = this.state;
    let typeDiscount = 0;
    let price = 0;
    product.forEach((item, index) => {
      if (item.type === "fiction") {
        price += item.price * productQty[index + 1].qty;
      }
    });
    typeDiscount = (price / 100) * 15;
    return typeDiscount;
  };
  render() {
    return (
      <div className="App">
        <Navbar product={this.state.product} />
        <Cart
          product={this.state.product}
          productQty={this.state.productQty}
          handleDeleteProduct={this.handleDeleteProduct}
          handleIncreamentProduct={this.handleIncreamentProduct}
          handleDecrementProduct={this.handleDecrementProduct}
          totalPrice={this.handleTotalPrice()}
          totalDiscount={this.handleTotalDiscount()}
          TypeDiscount={this.handleTypeDiscount()}
        />
      </div>
    );
  }
}

export default App;
