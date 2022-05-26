import { gql } from '@apollo/client';

export const CREATE_EMPLOYEE_MUTATION = gql`
  mutation CreateEmployeeMutation(
    $email: String!
    $phoneNumber: String!
    $forename: String!
    $surname: String!
    $profileImage: String!
    $title: String!
    $departmentName: String!
  ) {
    createEmployee(
      input: {
        email: $email
        phoneNumber: $phoneNumber
        forename: $forename
        surname: $surname
        profileImage: $profileImage
        title: $title
        departmentName: $departmentName
      }
    ) {
      id
      email
    }
  }
`;
