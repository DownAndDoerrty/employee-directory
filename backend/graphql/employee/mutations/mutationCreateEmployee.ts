

import gql from 'graphql-tag';
import { Employee } from '@prisma/client';
import { Context } from '../../context';

export const MutationCreateEmployeeDefinition = gql`
  "Inputs for creating an employee record."
  input CreateEmployeeInput {
    email:        String
    phoneNumber:  String
    forename:     String
    surname:      String
    profileImage: String
    title:        String
    departmentId: String
  }

  type Mutation {
    "Create an employee record."
    createEmployee(input: CreateEmployeeInput): Employee
  }
`;

export const MutationCreateEmployeeResolver = {
  createEmployee: async (
    _parent: Employee,
    { input }: { input: Omit<Employee, 'updatedAt' | 'createdAt' | 'id'> },
    context: Context,
  ): Promise<Employee> => await context.prisma.employee.create({
    data: input,
  }),
};
