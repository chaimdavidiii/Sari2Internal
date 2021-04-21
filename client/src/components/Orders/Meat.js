import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { IconContext } from "react-icons";
import {
  MeatArea,
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

const Meat = () => {
  const [meatList, setMeatList] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/meat").then((response) => {
      setMeatList(response.data);
    });
  }, [meatList]);

  const onSubmit = async (data) => {
    await Axios.post("http://localhost:3001/orders/meat", {
      item: data.meat,
      quantity: data.meatQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        reset();
      }
    });
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

  return (
    <div>
      <>
        <MeatArea onSubmit={handleSubmit(onSubmit)}>
          <form>
            <OrdersSectionText>Meat</OrdersSectionText>
            <InputText
              type='text'
              name='meat'
              ref={register({ required: true })}
            />
            {errors.meat && errors.meat.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='meatQ'
              ref={register()}
              defaultValue='1'
            />

            <OrdersAddButton type='submit'>
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <GrFormAdd />
              </IconContext.Provider>
            </OrdersAddButton>
          </form>
          <OrdersSection>
            {meatList.length === 0 ? (
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
                    {meatList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{val.item}</td>
                          <td>{val.quantity}</td>
                          <td>
                            <OrdersDeleteButton
                              onClick={() => {
                                deleteMeatItem(val._id);
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
                <Email section='Meat' />
              </>
            )}
          </OrdersSection>
        </MeatArea>
      </>
    </div>
  );
};

export default Meat;
