import { IResolvers } from '@graphql-tools/utils';

// Imports for model resolvers
import { modelResolvers } from './modelResolvers';

export const resolvers: IResolvers = {
  ...modelResolvers,
};
