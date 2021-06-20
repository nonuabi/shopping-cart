import React, { Component } from "react";
import { IoReloadOutline } from "react-icons/io5";
import "../css/Navbar.css";
class Navbar extends Component {
  // const {product} = this.props;
  handleClick = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="navbar">
        <h1>SHOPPING CART</h1>
        <div className="reload_data_btn">
          <button onClick={this.handleClick}>
            Reload{" "}
            <IoReloadOutline
              size="1em"
              style={{
                marginTop: "",
                marginBottom: "-2px",
              }}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
