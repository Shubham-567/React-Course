// OnChange =  Event handler used primarily used with form elements
//             eg. <input>, <textarea>, <select>, <radio>, etc...
//             Triggers a function every time the value of input changes.

import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivery");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      Name: <input type='text' value={name} onChange={handleNameChange} />
      <p>{`Your name is: ${name}`}</p>
      <br />
      Quantity:
      <input type='number' value={quantity} onChange={handleQuantityChange} />
      <p>{`Quantity: ${quantity}`}</p>
      <br />
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder='Enter delevery instructions'
      />
      <p>Comment: {comment}</p>
      <br />
      <select value={payment} onChange={handlePaymentChange}>
        <option value=''>Select a option</option>
        <option value='visa'>Visa</option>
        <option value='mastercard'>Mastercard</option>
        <option value='giftcard'>Giftcard</option>
      </select>
      <p>{`Payment Mode: ${payment}`}</p>
      <br />
      <label>
        <input
          type='radio'
          value='Pick Up'
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type='radio'
          value='Delivery'
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>{`Shipping: ${shipping}`}</p>
    </div>
  );
}

export default MyComponent;
