import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { IconContext } from "react-icons";
import {
  VeggiesArea,
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

const Veggies = () => {
  const [veggiesList, setVeggiesList] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/veggies").then((response) => {
      setVeggiesList(response.data);
    });
  }, [veggiesList]);

  const onSubmit = async (data) => {
    await Axios.post("http://localhost:3001/orders/veggies", {
      item: data.veggies,
      quantity: data.veggiesQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        reset();
      }
    });
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

  return (
    <div>
      <>
        <VeggiesArea>
          <form onSubmit={handleSubmit(onSubmit)}>
            <OrdersSectionText>Veggies</OrdersSectionText>
            <InputText
              type='text'
              name='veggies'
              ref={register({ required: true })}
            />
            {errors.veggies && errors.veggies.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='veggiesQ'
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
            {veggiesList.length === 0 ? (
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
                    {veggiesList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{val.item}</td>
                          <td>{val.quantity}</td>
                          <td>
                            <OrdersDeleteButton
                              onClick={() => {
                                deleteVeggiesItem(val._id);
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
                <Email section='Veggies' />
              </>
            )}
          </OrdersSection>
        </VeggiesArea>
      </>
    </div>
  );
};

export default Veggies;
