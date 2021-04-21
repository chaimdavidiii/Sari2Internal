import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { IconContext } from "react-icons";
import {
  TrentsArea,
  OrdersSectionText,
  InputText,
  InputNum,
  OrdersAddButton,
  Errors,
  OrdersSection,
  OrdersP,
  OrdersDeleteButton,
} from "./OrderElements";
import Email from "./Email";

const Trents = () => {
  const [trentsList, setTrentsList] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/trents").then((response) => {
      setTrentsList(response.data);
    });
  }, [trentsList]);

  const onSubmit = async (data) => {
    await Axios.post("http://localhost:3001/orders/trents", {
      item: data.trents,
      quantity: data.trentsQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        reset();
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

  return (
    <div>
      <>
        <TrentsArea>
          <form onSubmit={handleSubmit(onSubmit)}>
            <OrdersSectionText>Trents</OrdersSectionText>
            <InputText
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
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <OrdersAddButton type='submit'>
                <GrFormAdd />
              </OrdersAddButton>
            </IconContext.Provider>
          </form>

          <OrdersSection>
            {trentsList.length === 0 ? (
              <OrdersP>No orders Yet.</OrdersP>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {trentsList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{val.item}</td>
                          <td>{val.quantity}</td>
                          <td>
                            <OrdersDeleteButton
                              onClick={() => {
                                deleteTrentsItem(val._id);
                              }}
                            >
                              <BsFillTrashFill />
                            </OrdersDeleteButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Email section='Trents' />
              </>
            )}
          </OrdersSection>
        </TrentsArea>
      </>
    </div>
  );
};

export default Trents;
