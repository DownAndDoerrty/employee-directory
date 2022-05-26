
import gql from 'graphql-tag';
import { Department } from '@prisma/client';
import { Context } from '../../context';

export const QueryDepartmentDefinition = gql`
  type Query {
    department(departmentId: ID!): Department
  }
`;

export const QueryDepartmentResolver = {
  department: async (_parent: Department, { departmentId }: { departmentId: string }, context: Context): Promise<Department> => {
    try {
      return await context.prisma.department.findUnique({
        where: {
          id: departmentId,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};
