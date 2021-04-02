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
  margin-top: 80px;
`;

export const OrdersTitle = styled.h1`
  text-align: center;
`;

export const InputText = styled.input`
  margin-left: 4px;
`;

export const OrdersSectionText = styled.h3`
  text-align: center;
`;

export const OrdersWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  @media screen and (max-width: 1128px) {
    flex-wrap: wrap;
    gap: 2em;
  }

  @media screen and (max-width: 758px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-bottom: 2em;
  }
`;

export const Errors = styled.div`
  color: #ff0000;
  text-align: center;
`;

export const OrdersSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  list-style-type: none;
  margin-left: 5px;
  padding: 0;
  margin-bottom: 5px;
`;

export const OrdersP = styled.p`
  text-decoration: none;
  list-style-type: none;
  margin-bottom: 5px;
`;

export const InputNum = styled.input`
  width: 50px;
  margin: auto;
  /* margin-left: 4px;
  margin-right: 4px; */
`;

export const TrentsArea = styled.div`
  background: pink;

  @media screen and (max-width: 758px) {
    width: 400px;
  }
`;

export const VeggiesArea = styled.div`
  background: green;

  @media screen and (max-width: 758px) {
    width: 400px;
  }
`;

export const MeatArea = styled.div`
  background: brown;

  @media screen and (max-width: 758px) {
    width: 400px;
  }
`;

export const AsianArea = styled.div`
  background: yellow;

  @media screen and (max-width: 758px) {
    width: 400px;
  }
`;

export const OrdersDeleteButton = styled.button`
  text-decoration: none;
  background: transparent;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 25px;
  /* background: #ea0000; */
  white-space: nowrap;
  padding: 0 5px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;

  &:hover {
    color: #ea0000;
    text-decoration: none;
  }
`;

export const OrdersAddButton = styled.button`
  text-decoration: none;
  background: transparent;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 25px;
  /* background: #ea0000; */
  white-space: nowrap;
  padding: 0 5px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;

  &:hover {
    color: #00ae00;
    text-decoration: none;
  }
`;
