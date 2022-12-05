/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount($input: AccountInput!) {
    createAccount(input: $input) {
      accountID
      url
    }
  }
`;
export const createPrestation = /* GraphQL */ `
  mutation CreatePrestation(
    $input: CreatePrestationInput!
    $condition: ModelPrestationConditionInput
  ) {
    createPrestation(input: $input, condition: $condition) {
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
export const updatePrestation = /* GraphQL */ `
  mutation UpdatePrestation(
    $input: UpdatePrestationInput!
    $condition: ModelPrestationConditionInput
  ) {
    updatePrestation(input: $input, condition: $condition) {
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
export const deletePrestation = /* GraphQL */ `
  mutation DeletePrestation(
    $input: DeletePrestationInput!
    $condition: ModelPrestationConditionInput
  ) {
    deletePrestation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
