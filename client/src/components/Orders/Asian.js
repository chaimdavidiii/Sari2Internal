import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { IconContext } from "react-icons";
import {
  AsianArea,
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

const Asian = () => {
  const [asianList, setAsianList] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(async () => {
    await Axios.get("http://localhost:3001/orders/asian").then((response) => {
      setAsianList(response.data);
    });
  }, [asianList]);

  const onSubmit = async (data) => {
    await Axios.post("http://localhost:3001/orders/asian", {
      item: data.asian,
      quantity: data.asianQ,
    }).then((response) => {
      if (response.statusText === "OK") {
        reset();
      }
    });
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
    <div>
      <>
        <AsianArea onSubmit={handleSubmit(onSubmit)}>
          <form>
            <OrdersSectionText>Asian</OrdersSectionText>
            <InputText
              type='text'
              name='asian'
              ref={register({ required: true })}
            />
            {errors.asian && errors.asian.type === "required" && (
              <Errors>This field is required.</Errors>
            )}
            <InputNum
              type='number'
              min='1'
              name='asianQ'
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
            {asianList.length === 0 ? (
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
                    {asianList.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>{val.item}</td>
                          <td>{val.quantity}</td>
                          <td>
                            <OrdersDeleteButton
                              onClick={() => {
                                deleteAsianItem(val._id);
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
                <Email section='Asian' />
              </>
            )}
          </OrdersSection>
        </AsianArea>
      </>
    </div>
  );
};

export default Asian;
