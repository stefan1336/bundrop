import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import styles from "../style/Modal.css";

function CheckOut() {
  const [modalVisible, setModalVisible] = useState(false);
  const [customer, setCustomer] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cartItems);
  }, []);

  const [errors, setErrors] = useState([
    { name: "firstName" },
    { name: "lastName" },
    { name: "city" },
    { name: "adress" },
    { name: "zip" },
  ]);
  const [isAllValid, setIsAllValid] = useState(false);

  function updateCustomerInput(e, propertyName) {
    setCustomer({ ...customer, [propertyName]: e.target.value });
    checkInput(e.target.value, propertyName);
  }

  function checkInput(input, propertyName) {
    if (propertyName === "firstName" || propertyName === "lastName") {
      if (input.length >= 2) {
        validateInput(propertyName);
      } else {
        const errorMessage = "Must be longer than 1 letter!";

        invalidateInput(propertyName, errorMessage);
      }
    } else if (propertyName === "city") {
      if (input.length >= 6) {
        validateInput(propertyName);
      } else {
        const errorMessage = "Must be longer than 5 letters!";

        invalidateInput(propertyName, errorMessage);
      }
    } else if (propertyName === "adress") {
      if (input.length >= 9) {
        validateInput(propertyName);
      } else {
        const errorMessage = "Must be longer than 8 letters!";

        invalidateInput(propertyName, errorMessage);
      }
    } else if (propertyName === "zip") {
      if (input.length >= 5) {
        validateInput(propertyName);
      } else {
        const errorMessage = "Must be longer than 5 digits!";

        invalidateInput(propertyName, errorMessage);
      }
    }
  }

  function validateInput(propertyName) {
    const updatedErrors = [...errors];

    const err = updatedErrors.find((e) => e.name === propertyName);

    if (err) {
      const errIndex = updatedErrors.indexOf(
        updatedErrors.find((e) => e.name === propertyName)
      );

      updatedErrors.splice(errIndex, 1);

      setErrors(updatedErrors);
    }

    if (updatedErrors.length <= 0) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  }

  function invalidateInput(propertyName, errorMessage) {
    const updatedErrors = [...errors];

    const err = updatedErrors.find((e) => e.name === propertyName);

    if (!err) {
      updatedErrors.push({
        name: propertyName,
        message: errorMessage,
      });
    } else if (!err.hasOwnProperty("message")) {
      const errorIndex = updatedErrors.indexOf(
        updatedErrors.find((e) => e.name === propertyName)
      );

      updatedErrors.splice(errorIndex, 1, {
        name: propertyName,
        message: errorMessage,
      });
    }

    setErrors(updatedErrors);

    setIsAllValid(false);
  }

  function choosePaymentMethod(paymentMethod) {
    setPaymentMethod(paymentMethod);
  }

  function toggleModal(paymentMethod) {
    setModalVisible(!modalVisible);
  }

  if (cartItems.length > 0) {
    return (
      <div>
        {modalVisible ? (
          <Modal
            toggleModal={toggleModal}
            customer={customer}
            paymentMethod={paymentMethod}
          />
        ) : (
          ""
        )}
        <div className="headline-container">
          <h2>CheckOut</h2>
        </div>
        <div>
          <div className="headline-container ">
            <div className="checkout-container ">
              <div className="checkout-display ">
                <div className=" headline-container ">
                  <div className="input-display ">
                    <input
                      className="input-style"
                      type="text"
                      placeholder="First name"
                      onChange={(e) => {
                        updateCustomerInput(e, "firstName");
                      }}
                    />
                    {errors
                      .filter((e) => e.name === "firstName")
                      .map((e, index) => (
                        <span
                          key={index}
                          className="span-style first-name-error"
                        >
                          {e.message}
                        </span>
                      ))}
                    <input
                      className="input-style"
                      type="text"
                      placeholder="Last name"
                      onChange={(e) => {
                        updateCustomerInput(e, "lastName");
                      }}
                    />
                    {errors
                      .filter((e) => e.name === "lastName")
                      .map((e, index) => (
                        <span
                          key={index}
                          className="span-style second-name-error"
                        >
                          {e.message}
                        </span>
                      ))}
                    <input
                      className="input-style "
                      type="text"
                      placeholder="City"
                      onChange={(e) => {
                        updateCustomerInput(e, "city");
                      }}
                    />
                    {errors
                      .filter((e) => e.name === "city")
                      .map((e, index) => (
                        <span
                          key={index}
                          className="span-style city-name-error"
                        >
                          {e.message}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="adress-container ">
                  <input
                    className="input-style"
                    id="adress-style"
                    type="text"
                    placeholder="Adress"
                    onChange={(e) => {
                      updateCustomerInput(e, "adress");
                    }}
                  />
                  {errors
                    .filter((e) => e.name === "adress")
                    .map((e, index) => (
                      <span key={index} className="span-style adress-error">
                        {e.message}
                      </span>
                    ))}
                  <input
                    className="input-style"
                    id="zip-style"
                    type="text"
                    placeholder="Zip"
                    onChange={(e) => {
                      updateCustomerInput(e, "zip");
                    }}
                  />
                  {errors
                    .filter((e) => e.name === "zip")
                    .map((e, index) => (
                      <span key={index} className="span-style zip-error">
                        {e.message}
                      </span>
                    ))}
                </div>
                <div className="btn-container flex-container">
                  {isAllValid ? (
                    <button
                      onClick={() => {
                        choosePaymentMethod("swish");
                        toggleModal();
                      }}
                      className="payment-btn"
                    >
                      <img
                        id="swish-img"
                        src="/images/Swish_Logo_Secondary_Light-BG_P3.png"
                        alt=""
                      />
                    </button>
                  ) : (
                    <button disabled className="payment-btn">
                      <img
                        id="swish-img"
                        src="/images/Swish_Logo_Secondary_Light-BG_P3.png"
                        alt=""
                      />
                    </button>
                  )}
                  {isAllValid ? (
                    <Link to="/summary">
                      <button className="payment-btn">
                        <img
                          id="klarna-img"
                          src="/images/2560px-Klarna_Logo_black.svg.png"
                          alt=""
                        />
                      </button>
                    </Link>
                  ) : (
                    <button disabled className="payment-btn">
                      <img
                        id="klarna-img"
                        src="/images/2560px-Klarna_Logo_black.svg.png"
                        alt=""
                      />
                    </button>
                  )}
                  {isAllValid ? (
                    <button
                      onClick={() => {
                        choosePaymentMethod("card");
                        toggleModal();
                      }}
                      className="payment-btn"
                    >
                      <img
                        id="mc-img"
                        src="/images/mc_symbol_opt_45_3x.png"
                        alt=""
                      />
                    </button>
                  ) : (
                    <button disabled className="payment-btn">
                      <img
                        id="mc-img"
                        src="/images/mc_symbol_opt_45_3x.png"
                        alt=""
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Nothing in cart</div>;
}

export default CheckOut;
