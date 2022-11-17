/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrestation = /* GraphQL */ `
  query GetPrestation($id: ID!) {
    getPrestation(id: $id) {
      id
      name
      companyName
      createdAt
      updatedAt
    }
  }
`;
export const listPrestations = /* GraphQL */ `
  query ListPrestations(
    $filter: ModelPrestationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrestations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        companyName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const prestaByCompany = /* GraphQL */ `
  query PrestaByCompany(
    $companyName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPrestationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prestaByCompany(
      companyName: $companyName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        companyName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
