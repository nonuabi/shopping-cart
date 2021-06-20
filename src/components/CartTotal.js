import React, { Component } from "react";
import "../css/CartTotal.css";
class CartTotal extends Component {
  render() {
    const { totalItems, totalPrice, totalDiscount, TypeDiscount } = this.props;
    let total = totalPrice - totalDiscount - TypeDiscount;
    return (
      <div>
        <div className="cardtotal">
          <div className="cardtotal_heading">
            <h4>Total</h4>
          </div>
          <div className="cardtotal_subheadlines">
            <div className="totalItems left_container">Items({totalItems})</div>
            <div className="colon">:</div>
            <div className="totalItems_price">${totalPrice}</div>
          </div>
          <div className="discount_container">
            <div className="cardtotal_subheadlines">
              <div className="discount left_container">Discount</div>
              <div className="colon">:</div>
              <div className="totalItems_discount">-${totalDiscount}</div>
            </div>
            <div className="cardtotal_subheadlines">
              <div className="discount left_container">Type discount</div>
              <div className="colon">:</div>
              <div className="totalItems_type_discount">-${TypeDiscount}</div>
            </div>
          </div>
        </div>
        <div className="orderTotal cardtotal_subheadlines">
          <div>Order total</div>
          <div>${total}</div>
        </div>
      </div>
    );
  }
}

export default CartTotal;
