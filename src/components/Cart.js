import React, { Component } from "react";
import { Cartitem, CartTotal } from "./Index";
import { FaLessThan } from "react-icons/fa";
import "../css/Cart.css";
class Cart extends Component {
  render() {
    const {
      product,
      handleDeleteProduct,
      productQty,
      handleIncreamentProduct,
      handleDecrementProduct,
      totalPrice,
      totalDiscount,
      TypeDiscount,
    } = this.props;
    return (
      <div className="Cart">
        <div className="cart_list_container">
          <div className="cart_list_headline">
            <div className="cart_list_heading_logo">
              <FaLessThan />
            </div>
            <h3>Order Summary</h3>
          </div>
          <hr />
          <div className="cart_list_subheadline">
            <div className="cart_list_subheading_items">
              <p>Items({product.length})</p>
            </div>
            <div className="cart_list_subheading_right_contaier">
              <div className="cart_list_subheading_qty">
                <p>Qty</p>
              </div>
              <div className="cart_list_subheading_price">
                <p>Price</p>
              </div>
            </div>
          </div>
          <hr />
          {product.map((item, index) => (
            <Cartitem
              key={index}
              item={item}
              index={index}
              handleDeleteProduct={handleDeleteProduct}
              productQty={productQty}
              handleIncreamentProduct={handleIncreamentProduct}
              handleDecrementProduct={handleDecrementProduct}
            />
          ))}
        </div>
        <div className="cart_list_total_price_container">
          <CartTotal
            totalItems={product.length}
            totalPrice={totalPrice}
            totalDiscount={totalDiscount}
            TypeDiscount={TypeDiscount}
          />
        </div>
      </div>
    );
  }
}

export default Cart;
