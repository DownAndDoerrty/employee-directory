import gql from 'graphql-tag';

export const DepartmentTypeDefinition = gql`
  type Department {
    id:        ID!
    name:      String
    employees: [Employee]
  }
`;
