import { gql } from '@apollo/client';

export const DELETE_EMPLOYEE_MUTATION = gql`
  mutation DeleteEmployeeMutation($id: ID!) {
    deleteEmployee(input: { id: $id }) {
      id
      email
    }
  }
`;
