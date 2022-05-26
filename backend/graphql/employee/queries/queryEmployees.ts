import gql from 'graphql-tag';
import { Employee } from '@prisma/client';
import { Context } from '../../context';


export const QueryEmployeesDefinition = gql`
  type EmployeeRecords {
    count: Int
    records: [Employee]
  }
  
  type Query {
    employees(offset: Int, limit: Int, departmentName: String, searchField: String): EmployeeRecords
  }
`;

export const QueryEmployeesResolver = {
  employees: async (
    _parent: Employee,
    args: { offset: number, limit: number, departmentName: string, searchField: string },
    context: Context): Promise<{ records: Array<Employee>, count: number }> => {
    let records: Employee[];
    let count: number;

    if (args.departmentName !== 'All' && args.searchField.length === 0) {
      records = await context.prisma.employee.findMany({
        where: {
          departmentName: args.departmentName
        },
        skip: args.offset,
        take: args.limit
      });
      count = await context.prisma.employee.count({
        where: {
          departmentName: args.departmentName
        }
      });
      return {
        records,
        count,
      }
    } else if (args.departmentName === 'All' && args.searchField.length > 0) {
      records = await context.prisma.employee.findMany({
        where: {
          forename: {
            contains: args.searchField,
            mode: 'insensitive',
          },
        },
        skip: args.offset,
        take: args.limit
      });
      count = await context.prisma.employee.count({
        where: {
          forename: {
            contains: args.searchField,
            mode: 'insensitive',
          }
        }
      });
      return {
        records,
        count,
      }
    } else if (args.departmentName !== 'All' && args.searchField.length > 0) {
      records = await context.prisma.employee.findMany({
        where: {
          departmentName: args.departmentName,
          forename: {
            contains: args.searchField,
            mode: 'insensitive',
          },
        },
        skip: args.offset,
        take: args.limit
      });
      count = await context.prisma.employee.count({
        where: {
          departmentName: args.departmentName,
          forename: {
            contains: args.searchField,
            mode: 'insensitive',
          }
        }
      });
      return {
        records,
        count,
      }
    } else {
      records = await context.prisma.employee.findMany({
        skip: args.offset,
        take: args.limit
      });
      count = await context.prisma.employee.count();
      return {
        records,
        count,
      }
    }
  }
};
