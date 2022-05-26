import { Department, Employee } from '@prisma/client';
import { Context } from '../context';

export const DepartmentResolver = {
  employees: (parent: Department, _args: unknown, context: Context): Employee =>
    context.prisma.employee.findMany({
      where: { departmentName: parent?.name },
    }) as unknown as Employee,
};
