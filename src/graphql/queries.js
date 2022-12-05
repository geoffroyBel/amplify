/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrestation = /* GraphQL */ `
  query GetPrestation($id: ID!) {
    getPrestation(id: $id) {
      id
      name
      owner
      companyID
      company {
        id
        companyOwner
        accountID
        name
        status
        prestations {
          nextToken
        }
        owner {
          id
          username
          email
          customerID
          createdAt
          updatedAt
          userCompanyId
        }
        createdAt
        updatedAt
        companyOwnerId
      }
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
        owner
        companyID
        company {
          id
          companyOwner
          accountID
          name
          status
          createdAt
          updatedAt
          companyOwnerId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const prestaByOwner = /* GraphQL */ `
  query PrestaByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPrestationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prestaByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        companyID
        company {
          id
          companyOwner
          accountID
          name
          status
          createdAt
          updatedAt
          companyOwnerId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      customerID
      company {
        id
        companyOwner
        accountID
        name
        status
        prestations {
          nextToken
        }
        owner {
          id
          username
          email
          customerID
          createdAt
          updatedAt
          userCompanyId
        }
        createdAt
        updatedAt
        companyOwnerId
      }
      createdAt
      updatedAt
      userCompanyId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        customerID
        company {
          id
          companyOwner
          accountID
          name
          status
          createdAt
          updatedAt
          companyOwnerId
        }
        createdAt
        updatedAt
        userCompanyId
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      companyOwner
      accountID
      name
      status
      prestations {
        items {
          id
          name
          owner
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      owner {
        id
        username
        email
        customerID
        company {
          id
          companyOwner
          accountID
          name
          status
          createdAt
          updatedAt
          companyOwnerId
        }
        createdAt
        updatedAt
        userCompanyId
      }
      createdAt
      updatedAt
      companyOwnerId
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyOwner
        accountID
        name
        status
        prestations {
          nextToken
        }
        owner {
          id
          username
          email
          customerID
          createdAt
          updatedAt
          userCompanyId
        }
        createdAt
        updatedAt
        companyOwnerId
      }
      nextToken
    }
  }
`;
export const getByStripeId = /* GraphQL */ `
  query GetByStripeId(
    $accountID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByStripeId(
      accountID: $accountID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyOwner
        accountID
        name
        status
        prestations {
          nextToken
        }
        owner {
          id
          username
          email
          customerID
          createdAt
          updatedAt
          userCompanyId
        }
        createdAt
        updatedAt
        companyOwnerId
      }
      nextToken
    }
  }
`;
