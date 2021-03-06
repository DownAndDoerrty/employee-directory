

import gql from 'graphql-tag';
import { Employee } from '@prisma/client';
import { Context } from '../../context';

export const UpdateEmployeeMutationDefinition = gql`
  "Inputs for updating the employee record."
  input UpdateEmployeeInput {
    id:           ID!
    email:        String
    phoneNumber:  String
    forename:     String
    surname:      String
    profileImage: String
    title:        String
    departmentName: String
  }
  
  type Mutation {
    "Updates the employee record."
    updateEmployee(input: UpdateEmployeeInput): Employee
  }
`;

export const UpdateEmployeeMutationResolver = {
  updateEmployee: async (
    _parent: Employee,
    { input }: { input: Omit<Employee, 'updatedAt' | 'createdAt'> },
    context: Context,
  ): Promise<Employee> => {
    try {
      return await context.prisma.employee.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};
