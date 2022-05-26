import gql from 'graphql-tag';

export const EmployeeTypeDefinition = gql`
  type Employee {
    id:           ID!
    email:        String
    phoneNumber:   String
    forename:     String
    surname:      String
    profileImage: String
    title:        String
    departmentName:   String
    department:   Department
    createdAt:   DateTime
    updatedAt:   DateTime
  }
`;
