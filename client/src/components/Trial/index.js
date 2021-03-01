import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

  // const [trentsInput, setTrentsInput] = useState("");

  // const addTrentsInput = (e) => {
  //   setTrentsInput(e.target.value);
  // };
  const onSubmitT = (data) => {
    console.log(data.trents);
    if (data.trentsQ === "") {
      data.trentsQ = 1;
      console.log(data.trentsQ);
    }
    reset();
  };

  const onSubmitV = (data) => {
    console.log(data.veggies);
    resetV();
  };
  const onSubmitM = (data) => {
    console.log(data.meat);
    resetM();
  };
  const onSubmitA = (data) => {
    console.log(data.asian);
    resetA();
  };

  return (
    <>
      <OrdersContainer>
        <TrentsArea>
          <form onSubmit={handleSubmit(onSubmitT)}>
            <h1>Trents</h1>
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
            <h1>Veggies</h1>
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
            <h1>Meat</h1>
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
            <h1>Asian</h1>
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
        <TotalTag>
          <h3>Total:</h3>
        </TotalTag>
        <TotalOrders></TotalOrders>
      </OrdersContainer>
    </>
  );
};

export default Trial;
