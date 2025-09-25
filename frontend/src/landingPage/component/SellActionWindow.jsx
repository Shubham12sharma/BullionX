import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GeneralContext from './GenralContext';
// import './SellActionWindow.css';

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios
      .post('http://localhost:5002/newOrder', {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: 'SELL',
      })
      .then(() => {
        closeSellWindow();
      })
      .catch((err) => {
        console.error('Error placing sell order:', err);
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container fixed bottom-0 left-[35%] w-[40%] h-[63%] bg-gray-100 border border-gray-200 rounded-[var(--radius)] z-[100] cursor-move">
      <div className="regular-order p-6 bg-white pb-8">
        <div className="inputs flex justify-between mt-4 mb-4">
          <fieldset className="border border-gray-300 max-w-[120px] mr-2">
            <legend className="text-sm font-semibold px-1">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              className="w-full p-3 border-none text-lg focus:outline-none"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset className="border border-gray-300 max-w-[120px]">
            <legend className="text-sm font-semibold px-1 text-gray-400">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              className="w-full p-3 border-none text-lg focus:outline-none"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons flex justify-between items-center px-5 relative top-[10%]">
        <span className="text-sm">Margin required ₹140.65</span>
        <div className="flex gap-1">
          <Link
            to="#"
            className="btn btn-blue bg-blue-600 text-white px-5 py-2.5 rounded-sm hover:bg-blue-400"
            onClick={handleSellClick}
          >
            Sell
          </Link>
          <Link
            to="#"
            className="btn btn-grey bg-gray-300 text-gray-600 px-5 py-2.5 rounded-sm hover:bg-gray-500 hover:text-white"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;