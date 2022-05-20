import gql from 'graphql-tag';

export const EmployeeTypeDefinition = gql`
  type Employee {
    id:           ID!
    email:        String
    forename:     String
    surname:      String
    profileImage: String
    title:        String
  }
`;
