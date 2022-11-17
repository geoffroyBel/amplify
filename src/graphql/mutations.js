/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrestation = /* GraphQL */ `
  mutation CreatePrestation(
    $input: CreatePrestationInput!
    $condition: ModelPrestationConditionInput
  ) {
    createPrestation(input: $input, condition: $condition) {
      id
      name
      companyName
      createdAt
      updatedAt
    }
  }
`;
export const updatePrestation = /* GraphQL */ `
  mutation UpdatePrestation(
    $input: UpdatePrestationInput!
    $condition: ModelPrestationConditionInput
  ) {
    updatePrestation(input: $input, condition: $condition) {
      id
      name
      companyName
      createdAt
      updatedAt
    }
  }
`;
export const deletePrestation = /* GraphQL */ `
  mutation DeletePrestation(
    $input: DeletePrestationInput!
    $condition: ModelPrestationConditionInput
  ) {
    deletePrestation(input: $input, condition: $condition) {
      id
      name
      companyName
      createdAt
      updatedAt
    }
  }
`;
