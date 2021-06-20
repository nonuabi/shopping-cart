import React, { Component } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../css/CartItem.css";

class Cartitem extends Component {
  render() {
    const {
      item,
      index,
      handleDeleteProduct,
      productQty,
      handleIncreamentProduct,
      handleDecrementProduct,
    } = this.props;
    return (
      <div className="cartItem">
        <div className="item_content_container">
          <div className="content_img_container">
            <img src={item.img_url} alt="" />
          </div>
          <div className="content_right_container">
            <div className="content_item_details">
              <p>{item.name}</p>
            </div>
            <div className="content_item_delete_btn">
              <button
                onClick={() => {
                  handleDeleteProduct(item.id);
                }}
              >
                <MdClose size="2em" color="gray" />
              </button>
            </div>
          </div>
        </div>
        <div className="qty_container">
          <div className="qty_decrement_btn_container">
            <button
              className="qty_decrement_btn"
              onClick={() => handleDecrementProduct(index + 1)}
            >
              <AiOutlineMinus size="1em" />
            </button>
          </div>
          <div className="qty_display_container">
            {productQty[index + 1].qty}
          </div>
          <div className="qty_increment_btn_container">
            <button
              className="qty_increment_btn"
              onClick={() => handleIncreamentProduct(index + 1)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className="price_container">${item.price}</div>
      </div>
    );
  }
}

export default Cartitem;
