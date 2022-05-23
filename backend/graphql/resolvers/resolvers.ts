// Imports for model resolvers
import { modelResolvers } from './modelResolvers';

// Imports for query resolvers
import { QueryResolvers } from './queryResolvers';

export const resolvers = {
  Query: QueryResolvers,
  ...modelResolvers,
};
