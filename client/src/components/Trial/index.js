import React from "react";
import {
  TableContainer,
  TableRecipe,
  THeadRecipe,
  THRecipe,
  TDRecipe,
  TDActions,
  TDLinkView,
  TDLinkEdit,
  TDLinkDelete,
} from "./TrialElements";

const Trial = () => {
  return (
    <>
      <TableContainer>
        <TableRecipe>
          <THeadRecipe>
            <tr>
              <THRecipe>#</THRecipe>
              <THRecipe>Title</THRecipe>
              <THRecipe>Description</THRecipe>
              <THRecipe>Ingredients</THRecipe>
              <THRecipe>Actions</THRecipe>
            </tr>
          </THeadRecipe>
          <tbody>
            <tr>
              <TDRecipe>1231</TDRecipe>
              <TDRecipe>123123121sdawasd</TDRecipe>
              <TDRecipe>1231sadwasd</TDRecipe>
              <TDRecipe>12321asdwasd</TDRecipe>
              <TDActions>
                <TDLinkView>View</TDLinkView>
                <TDLinkEdit>Edit</TDLinkEdit>
                <TDLinkDelete>Delete</TDLinkDelete>
              </TDActions>
            </tr>
          </tbody>
        </TableRecipe>
      </TableContainer>
    </>
  );
};

export default Trial;
