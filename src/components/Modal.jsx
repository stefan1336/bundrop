import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Modal(props) {
  const [randomTime, setRandomTime] = useState(0);
  const navigate = useNavigate();
  const [phoneNumber, setPhonenumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [myNumber, setMYNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [swishErrorMessage, setSwishErrorMessage] = useState("");
  const [cardErrorMessage, setCardErrorMessage] = useState("");
  const [monthYearErrorMessage, setMonthYearErrorMessage] = useState("");
  const [cvcErrorMessage, setCvcErrorMessage] = useState("");

  function toggleModal(e) {
    if (e.target.classList.contains("modal-container")) {
      props.toggleModal();
    }
  }

  const validateSwish = () => {
    if (!phoneNumber) {
      setSwishErrorMessage("Please enter 7 digits.");
    } else {
      setSwishErrorMessage("");
    }
  };

  const validateMonthYear = () => {
    if (!myNumber) {
      setMonthYearErrorMessage("Please enter 4 digits");
    } else {
      setMonthYearErrorMessage("");
    }
  };

  const validateCvc = () => {
    if (!cvc) {
      setCvcErrorMessage("Please enter 3 digits");
    } else {
      setCvcErrorMessage("");
    }
  };

  const validateCard = () => {
    if (!cardNumber || !myNumber || !cvc) {
      setCardErrorMessage("Please enter 16 digits.");
    } else if (cardNumber.length !== 16 || myNumber !== 4 || cvc !== 3) {
      setCardErrorMessage("I reapeat, please fill all card details...");
    } else {
      setCardErrorMessage("");
    }
  };

  function pay() {
    if (props.paymentMethod === "swish") {
      navigate("/summary");
    }
    if (props.paymentMethod === "card") {
      navigate("/summary");
    }
    if (props.paymentMethod === "klarna") {
      navigate("/summary");
    }
  }

  useEffect(() => {
    deliveryTime();
  }, []);

  const deliveryTime = () => {
    const minMinutes = 15;
    const maxMinutes = 60;
    const randomMinutes = Math.floor(
      Math.random() * (maxMinutes - minMinutes + 1) + minMinutes
    );
    setRandomTime(randomMinutes);
  };

  if (props.paymentMethod === "swish") {
    return (
      <div className="modal-container" onClick={toggleModal}>
        <div className="modal-content">
          <h1 className="modal-header">Swish</h1>
          <input
            className="swish-input"
            type="number"
            placeholder="Number"
            value={phoneNumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            onClick={validateSwish}
          />
          <a className="swish-message" href="">
            {swishErrorMessage}
          </a>
          <button
            onClick={pay}
            disabled={!phoneNumber || phoneNumber.length !== 7}
            className="swish-btn"
          >
            Pay
          </button>
        </div>
      </div>
    );
  } else if (props.paymentMethod === "klarna") {
    return (
      <div className="modal-container" onClick={toggleModal}>
        <div className="modal-content">
          <div className="modal-style">
            <h1 className="modal-header">Thank you for paying with Klarna!</h1>
            <h4 className="klarna-text">
              <em>{props.customer.firstName}</em>
              {randomTime !== null && (
                <a>
                  {props.firstName} your order will arrive in {randomTime} min
                </a>
              )}
            </h4>
          </div>
        </div>
      </div>
    );
  } else if (props.paymentMethod === "card") {
    return (
      <div className="modal-container" onClick={toggleModal}>
        <div className="modal-content">
          <div className="card-div">
            {" "}
            <h1 className="modal-header">Pay with card</h1>
            <input
              className="mc-input"
              type="number"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              onClick={validateCard}
            />
            <p className="cardnumber-message" href="">
              {cardErrorMessage}
            </p>
            <div className="cardnumber-inputs">
              <input
                className="my-input"
                type="number"
                placeholder="m/y"
                value={myNumber}
                onClick={validateMonthYear}
                onChange={(e) => setMYNumber(e.target.value)}
              />

              <p className="validation-message" href="">
                {monthYearErrorMessage}
              </p>

              <input
                className="cvc-input"
                type="number"
                placeholder="cvc"
                value={cvc}
                onClick={validateCvc}
                onChange={(e) => setCvc(e.target.value)}
              />
              <p className="cvc-warning" href="">
                {cvcErrorMessage}
              </p>
            </div>
            <button
              onClick={pay}
              disabled={
                !cardNumber ||
                !myNumber ||
                !cvc ||
                cardNumber.length !== 16 ||
                myNumber.length !== 4 ||
                cvc.length !== 3
              }
              className="mc-btn"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
