import React, { useState } from 'react';

export default function Checkout({ total, cart }) {
  const [payment, setPayment] = useState(0);
  const [receipt, setReceipt] = useState(null);

  const handlePayment = () => {
    if (payment >= total) {
      const change = payment - total;
      const items = cart.map((item) => item.name).join(', ');
      const newReceipt = {
        items,
        total,
        paid: payment,
        change,
      };
      setReceipt(newReceipt);
    } else {
      alert('Insufficient payment.');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {receipt ? (
        <div className="receipt">
          <h3>Receipt</h3>
          <p>Items: {receipt.items}</p>
          <p>Total: ${receipt.total}</p>
          <p>Paid: ${receipt.paid}</p>
          <p>Change: ${receipt.change}</p>
        </div>
      ) : (
        <>
          <div>
            <input
              type="number"
              value={payment}
              onChange={(e) => setPayment(Number(e.target.value))}
              placeholder="Enter payment amount"
            />
          </div>
          <button onClick={handlePayment}>Complete Purchase</button>
        </>
      )}
    </div>
  );
}
