import React from "react";

const PriceCard = ({ price }) => {
  return (
    <card>
      <div className="w-96 bg-base-100 h-96 rounded-lg shadow-2xl mx-4">
        <div className="  w-12/12 h-2/5 mx-auto">
          <img
            className="w-full h-full p-2 rounded-2xl"
            src={price.image}
            alt=""
          />
        </div>
        <div className="ml-2 mt-3">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{price.name}</h1>
            <h1 className="text-2xl text-red-800 font-bold mr-3">
              {price.price}$
            </h1>
          </div>
          <h1 className="text-2xl pl-2 mt-2 text-red-600 font-semibold">
            Features
          </h1>
          <h1 className="pl-5 mt-2">
            {price.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </h1>
          
        </div>
        <div className=" w-full  flex items-center ">
            <button className=" w-full p-2 mt-6 bg-red-400 rounded-lg w-12/12 mx-auto">Buy Now</button>
          </div>
      </div>
    </card>
  );
};

export default PriceCard;
