import React, { useState, useEffect } from 'react';

// Function to validate credit card using Luhn algorithm
const isValidCard = (cardNumber) => {
  let numArray = cardNumber.split("");
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(numArray[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit.length > 1) {
        let digitAray = digit.split("");
        digit = digitAray[1] + digitAray[0]
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(isValidCard(cardNumber));
  }, [cardNumber]);

  const handleChange = (e) => {
    setCardNumber(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="cardNumber">Credit Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={handleChange}
        />
      </form>
      {isValid ? <p>Card is valid!</p> : <p>Card is not valid!</p>}
    </div>
  );
};

export default CreditCard;
