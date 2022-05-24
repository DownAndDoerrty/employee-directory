import { gql } from '@apollo/client';

export const EMPLOYEES_QUERY = gql`
  query EmployeesQuery {
    employees {
      id
      email
      phoneNumber
      forename
      surname
      profileImage
      title
    }
  }
`;
