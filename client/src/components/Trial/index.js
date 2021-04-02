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
  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/veggies").then((response) => {
      setVeggiesList(response.data);
    });
  }, [veggiesList]);
  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/asian").then((response) => {
      setAsianList(response.data);
    });
  }, [asianList]);
  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/meat").then((response) => {
      setMeatList(response.data);
    });
  }, [meatList]);

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

  const onSubmitV = async (data) => {
    await Axios.post("http://localhost:3001/orders/veggies", {
      item: data.veggies,
      quantity: data.veggiesQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        resetV();
      }
    });
  };
  const onSubmitM = async (data) => {
    await Axios.post("http://localhost:3001/orders/meat", {
      item: data.meat,
      quantity: data.meatQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        resetM();
      }
    });
  };
  const onSubmitA = async (data) => {
    await Axios.post("http://localhost:3001/orders/asian", {
      item: data.asian,
      quantity: data.asianQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        resetA();
      }
    });
  };

  const deleteTrentsItem = async (id) => {
    await Axios.delete(`http://localhost:3001/orders/trents/${id}`).then(
      (response) => {
        if (response.statusText === "OK") {
          console.log(response);
        }
      }
    );
  };
  const deleteMeatItem = async (id) => {
    await Axios.delete(`http://localhost:3001/orders/meat/${id}`).then(
      (response) => {
        if (response.statusText === "OK") {
          console.log(response);
        }
      }
    );
  };
  const deleteVeggiesItem = async (id) => {
    await Axios.delete(`http://localhost:3001/orders/veggies/${id}`).then(
      (response) => {
        if (response.statusText === "OK") {
          console.log(response);
        }
      }
    );
  };
  const deleteAsianItem = async (id) => {
    await Axios.delete(`http://localhost:3001/orders/asian/${id}`).then(
      (response) => {
        if (response.statusText === "OK") {
          console.log(response);
        }
      }
    );
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
                        deleteTrentsItem(val._id);
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
          <ul>
            {veggiesList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              veggiesList.map((val, key) => {
                return (
                  <li key={key}>
                    {`${val.item} x${val.quantity}`}{" "}
                    <button
                      onClick={() => {
                        deleteVeggiesItem(val._id);
                      }}
                    >
                      X
                    </button>
                  </li>
                );
              })
            )}
          </ul>
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
          <ul>
            {meatList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              meatList.map((val, key) => {
                return (
                  <li key={key}>
                    {`${val.item} x${val.quantity}`}{" "}
                    <button
                      onClick={() => {
                        deleteMeatItem(val._id);
                      }}
                    >
                      X
                    </button>
                  </li>
                );
              })
            )}
          </ul>
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
          <ul>
            {asianList.length === 0 ? (
              <li>No orders Yet.</li>
            ) : (
              asianList.map((val, key) => {
                return (
                  <li key={key}>
                    {`${val.item} x${val.quantity}`}{" "}
                    <button
                      onClick={() => {
                        deleteAsianItem(val._id);
                      }}
                    >
                      X
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </AsianArea>
      </OrdersWrapper>
    </OrdersContainer>
  );
};

export default Trial;
