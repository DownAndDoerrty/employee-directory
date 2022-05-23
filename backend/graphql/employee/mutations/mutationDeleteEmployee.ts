

import gql from 'graphql-tag';
import { Employee } from '@prisma/client';
import { Context } from '../../context';

export const MutationDeleteEmployeeDefinition = gql`
  "Employee ID to delete"
  input DeleteEmployeeInput {
    id: ID!
  }
  
  type Mutation {
    "Delete the employee record."
    deleteEmployee(input: DeleteEmployeeInput): Employee
  }
`;

export const MutationDeleteEmployeeResolver = {
  deleteEmployee: async (
    _parent: Employee,
    { input }: { input: Pick<Employee, 'id'>},
    context: Context,
  ): Promise<Employee> => await context.prisma.employee.delete({
    where: {
      id: input.id,
    },
  }),
};
