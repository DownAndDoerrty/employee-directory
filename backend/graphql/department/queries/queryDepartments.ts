import gql from 'graphql-tag';
import { Department } from '@prisma/client';
import { Context } from '../../context';

export const QueryDepartmentsDefinition = gql`
  type Query {
    departments: [Department]
  }
`;

export const QueryDepartmentsResolver = {
  departments: async (_parent: Department, _args: undefined, context: Context): Promise<Array<Department>> =>
    await context.prisma.department.findMany(),
};
