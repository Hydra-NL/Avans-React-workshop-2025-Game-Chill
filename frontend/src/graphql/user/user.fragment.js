import { gql } from "@apollo/client";

/* Get the me user fields */
export const AUTH_FRAGMENT = gql`
  fragment AuthFields on User {
    id
    email
    first_name
    last_name
    status

    # 1.2. Update GraphQL schema and FE query
    # 1.4. Update counter logic
  }
`;
