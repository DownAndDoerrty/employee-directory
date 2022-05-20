import { Department, Employee } from '@prisma/client';
import { Context } from '../context';

export const EmployeeResolver = {
  department: (parent: Employee, _args: unknown, context: Context): Department =>
    context.prisma.department.findUnique({
      where: { id: parent?.departmentId },
    }) as unknown as Department,
};
