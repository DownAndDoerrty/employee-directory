import { gql } from '@apollo/client';

export const EMPLOYEES_QUERY = gql`
  query EmployeesQuery($offset: Int, $limit: Int, $departmentName: String, $searchField: String) {
    employees(
      offset: $offset
      limit: $limit
      departmentName: $departmentName
      searchField: $searchField
    ) {
      count
      records {
        id
        email
        phoneNumber
        forename
        surname
        profileImage
        title
        departmentName
      }
    }
    departments {
      name
    }
  }
`;
