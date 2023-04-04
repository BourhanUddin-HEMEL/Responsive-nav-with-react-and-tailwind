import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

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
       <div className="grid grid-cols-3 gap-3 mx-2">
       {
        prices.map(price => <PriceCard 
            key = {price.id}
            price = {price}
        ></PriceCard>)
       }
       </div>
    </div>
  );
};

export default PriceList;
