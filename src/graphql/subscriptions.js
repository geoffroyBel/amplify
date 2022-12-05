/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePrestation = /* GraphQL */ `
  subscription OnCreatePrestation($owner: String) {
    onCreatePrestation(owner: $owner) {
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
export const onUpdatePrestation = /* GraphQL */ `
  subscription OnUpdatePrestation($owner: String) {
    onUpdatePrestation(owner: $owner) {
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
export const onDeletePrestation = /* GraphQL */ `
  subscription OnDeletePrestation($owner: String) {
    onDeletePrestation(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($companyOwner: String) {
    onCreateCompany(companyOwner: $companyOwner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($companyOwner: String) {
    onUpdateCompany(companyOwner: $companyOwner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($companyOwner: String) {
    onDeleteCompany(companyOwner: $companyOwner) {
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
