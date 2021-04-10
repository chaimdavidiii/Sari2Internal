import React from "react";
import { OrdersContainer, OrdersWrapper, OrdersTitle } from "./OrderElements";
import Trents from "./Trents";
import Veggies from "./Veggies";
import Asian from "./Asian";
import Meat from "./Meat";

const Trial = () => {
  return (
    <>
      <OrdersContainer>
        <OrdersTitle>Orders</OrdersTitle>
        <OrdersWrapper>
          <Trents />
          <Veggies />
          <Asian />
          <Meat />
        </OrdersWrapper>
      </OrdersContainer>
    </>
  );
};

export default Trial;
