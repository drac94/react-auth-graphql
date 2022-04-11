import { gql } from '@apollo/client';

export const QUERY = gql`
  query GetTodos {
    getTodos {
      id
      title
    }
  }
`;
