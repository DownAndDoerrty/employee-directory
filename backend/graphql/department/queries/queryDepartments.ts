import gql from 'graphql-tag';
import { Department } from '@prisma/client';
import { Context } from '../../context';

export const QueryDepartmentsDefinition = gql`
  type Query {
    departments: [Department]
  }
`;

export const QueryDepartmentsResolver = {
  departments: async (_parent: Department, _args: undefined, context: Context): Promise<Array<Department>> => {
    try {
      return await context.prisma.department.findMany();
    } catch (error) {
      throw new Error(error);
    }
  },
};
