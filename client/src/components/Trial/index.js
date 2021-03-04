import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import {
  OrdersContainer,
  TrentsArea,
  VeggiesArea,
  MeatArea,
  AsianArea,
  TotalOrders,
  TotalTag,
  InputNum,
  Errors,
  OrdersWrapper,
  OrdersTitle,
  OrdersSectionText,
  OrdersTotalText,
} from "./TrialElements";

const Trial = () => {
  const [trentsList, setTrentsList] = useState([]);
  const [veggiesList, setVeggiesList] = useState([]);
  const [meatList, setMeatList] = useState([]);
  const [asianList, setAsianList] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();
  const {
    register: registerV,
    handleSubmit: handleSubmitV,
    errors: errorsV,
    reset: resetV,
  } = useForm();
  const {
    register: registerM,
    handleSubmit: handleSubmitM,
    errors: errorsM,
    reset: resetM,
  } = useForm();
  const {
    register: registerA,
    handleSubmit: handleSubmitA,
    errors: errorsA,
    reset: resetA,
  } = useForm();

  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/trents").then((response) => {
      setTrentsList(response.data);
    });
  }, [trentsList]);

  const onSubmitT = async (data) => {
    await Axios.post("http://localhost:3001/orders/trents", {
      item: data.trents,
      quantity: data.trentsQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        reset();
      }
    });
  };

  const onSubmitV = (data) => {
    let obj = { item: data.veggies, quantity: data.veggiesQ };
    setVeggiesList([...veggiesList, obj]);
    resetV();
  };
  const onSubmitM = (data) => {
    let obj = { item: data.meat, quantity: data.meatQ };
    setMeatList([...meatList, obj]);
    resetM();
  };
  const onSubmitA = (data) => {
    let obj = { item: data.asian, quantity: data.asianQ };
    setAsianList([...asianList, obj]);
    resetA();
  };

  const deleteTrentsItem = (item) => {
    console.log(item);
    let tList = [...trentsList];
  };

  return (
    <OrdersContainer>
      <OrdersTitle>Orders</OrdersTitle>
      <OrdersWrapper>
        <TrentsArea>
          <form onSubmit={handleSubmit(onSubmitT)}>
            <OrdersSectionText>Trents</OrdersSectionText>
            <input
              type='text'
              name='trents'
              ref={register({
                required: true,
              })}
            />
            {errors.trents && errors.trents.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='trentsQ'
              ref={register()}
              defaultValue='1'
            />
            <button type='submit'>Add</button>
          </form>
        </TrentsArea>
        <VeggiesArea>
          <form onSubmit={handleSubmitV(onSubmitV)}>
            <OrdersSectionText>Veggies</OrdersSectionText>
            <input
              type='text'
              name='veggies'
              ref={registerV({ required: true })}
            />
            {errorsV.veggies && errorsV.veggies.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='veggiesQ'
              ref={registerV()}
              defaultValue='1'
            />
            <button type='submit'>Add</button>
          </form>
        </VeggiesArea>
        <MeatArea onSubmit={handleSubmitM(onSubmitM)}>
          <form>
            <OrdersSectionText>Meat</OrdersSectionText>
            <input
              type='text'
              name='meat'
              ref={registerM({ required: true })}
            />
            {errorsM.meat && errorsM.meat.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='meatQ'
              ref={registerM()}
              defaultValue='1'
            />
            <button type='submit'>Add</button>
          </form>
        </MeatArea>
        <AsianArea onSubmit={handleSubmitA(onSubmitA)}>
          <form>
            <OrdersSectionText>Asian</OrdersSectionText>
            <input
              type='text'
              name='asian'
              ref={registerA({ required: true })}
            />
            {errorsA.asian && errorsA.asian.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='asianQ'
              ref={registerA()}
              defaultValue='1'
            />

            <button type='submit'>Add</button>
          </form>
        </AsianArea>
      </OrdersWrapper>

      <TotalTag>
        <OrdersTitle>Total:</OrdersTitle>
      </TotalTag>
      <TotalOrders>
        <TrentsArea>
          <OrdersTotalText>Trents</OrdersTotalText>
          <ul>
            {trentsList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              trentsList.map((val, key) => {
                return (
                  <li key={key}>
                    {`${val.item} x${val.quantity}`}{" "}
                    <button
                      onClick={() => {
                        deleteTrentsItem(val.item);
                      }}
                    >
                      X
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </TrentsArea>
        <VeggiesArea>
          <OrdersTotalText>Veggies</OrdersTotalText>
          <ul>
            {veggiesList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              veggiesList.map((val, key) => {
                return <li key={key}>{`${val.item} x${val.quantity}`}</li>;
              })
            )}
          </ul>
        </VeggiesArea>
        <MeatArea>
          <OrdersTotalText>Meat</OrdersTotalText>
          <ul>
            {meatList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              meatList.map((val, key) => {
                return <li key={key}>{`${val.item} x${val.quantity}`}</li>;
              })
            )}
          </ul>
        </MeatArea>
        <AsianArea>
          <OrdersTotalText>Asian</OrdersTotalText>
          <ul>
            {asianList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              asianList.map((val, key) => {
                return <li key={key}>{`${val.item} x${val.quantity}`}</li>;
              })
            )}
          </ul>
        </AsianArea>
      </TotalOrders>
    </OrdersContainer>
  );
};

export default Trial;
