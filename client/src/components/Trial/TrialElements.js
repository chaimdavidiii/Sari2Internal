import styled from "styled-components";

// export const OrdersContainer = styled.div`
//   margin: auto;
//   text-align: center;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: 1fr 35px 2fr;
//   gap: 5px;
//   grid-template-areas: "trents veggies meat asian" "totaltag totaltag totaltag totaltag" "total total total total";
// `;
export const OrdersContainer = styled.div`
  margin: auto;
`;

export const OrdersTitle = styled.h1`
  text-align: center;
`;

export const OrdersSectionText = styled.h3`
  text-align: center;
`;

export const OrdersTotalText = styled.h2`
  text-align: center;
`;

export const OrdersWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
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
  background: pink;
`;

export const VeggiesArea = styled.div`
  background: green;
`;

export const MeatArea = styled.div`
  background: brown;
`;

export const AsianArea = styled.div`
  background: yellow;
`;

export const TotalTag = styled.div`
  text-align: center;
`;

export const TotalOrders = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
`;
