import React, { useEffect, useState } from "react";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('prices.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);get the api data
        setPrices(data)
      });
  }, []);
  return (
    <div>
        <h3 className="text-center text-4xl font-medium pt-5">
            Affortable price
        </h3>
       {
        prices.map(price =>console.log(price.name))
       }
    </div>
  );
};

export default PriceList;
