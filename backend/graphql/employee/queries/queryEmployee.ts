
import gql from 'graphql-tag';
import { Employee } from '@prisma/client';
import { Context } from '../../context';

export const QueryEmployeeDefinition = gql`
  type Query {
    employee(employeeId: ID!): Employee
  }
`;

export const QueryEmployeeResolver = {
  employee: async (_parent: Employee, { employeeId }: { employeeId: string }, context: Context): Promise<Employee> =>
    await context.prisma.employee.findUnique({
      where: {
        id: employeeId,
      },
    }),
};
