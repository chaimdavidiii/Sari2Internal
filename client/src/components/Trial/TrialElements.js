import styled from "styled-components";

export const OrdersContainer = styled.div`
  margin: auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 35px 2fr;
  gap: 5px;
  grid-template-areas: "trents veggies meat asian" "totaltag totaltag totaltag totaltag" "total total total total";
`;

export const Errors = styled.div`
  color: #ff0000;
  text-align: center;
`;

export const InputNum = styled.input`
  width: 50px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const TrentsArea = styled.div`
  grid-area: trents;
  background: pink;
  margin-bottom: 5px;
`;

export const VeggiesArea = styled.div`
  grid-area: veggies;
  background: green;
`;

export const MeatArea = styled.div`
  grid-area: meat;
  background: brown;
`;

export const AsianArea = styled.div`
  grid-area: asian;
  background: yellow;
`;

export const TotalTag = styled.div`
  text-align: center;
  grid-area: totaltag;
`;

export const TotalOrders = styled.div`
  background: blue;
  grid-area: total;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
`;
