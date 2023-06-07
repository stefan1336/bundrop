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

  function toggleModal(e) {
    if (e.target.classList.contains("modal-container")) {
      props.toggleModal();
    }
  }

  const validateSwish = (phoneNumber) => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
    } else if (phoneNumber.length !== 7) {
      setSwishErrorMessage("Swish number should have 7 numbers.");
    } else {
      setSwishErrorMessage("");
    }
  };

  const validateCard = () => {
    if (!cardNumber || !myNumber || !cvc) {
      setCardErrorMessage("Please fill all card details.");

      //   setCardInputs(false);
    } else if (cardNumber.length !== 16 || myNumber !== 4 || cvc !== 3) {
      setCardErrorMessage("I reapeat, please fill all card details...");
    } else {
      setCardErrorMessage("");
    }
  };

  function pay() {
    validateSwish(phoneNumber);
    console.log("gabbe");
    if (props.paymentMethod === "swish") {
      if (phoneNumber && phoneNumber.length === 7 && !swishErrorMessage) {
        navigate("/summary");
      }
    }
    if (props.paymentMethod === "card") {
      validateCard();
      if (cardNumber && myNumber && cvc && !cardErrorMessage) {
        navigate("/summary");
      }
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
            type="text"
            placeholder="Number"
            value={phoneNumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <a href="">{swishErrorMessage}</a>
          {swishErrorMessage && (
            <p className="error-message">{swishErrorMessage}</p>
          )}
          <button
            onClick={validateSwish}
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
          <h1 className="modal-header">Pay with card</h1>
          <div>
            <input
              className="mc-input"
              type="text"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="my-cvc-container">
              <input
                className="my-input"
                type="text"
                placeholder="m/y"
                value={myNumber}
                onChange={(e) => setMYNumber(e.target.value)}
              />
              <input
                className="cvc-input"
                type="text"
                placeholder="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
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
    );
  }
}

export default Modal;
