import { gql } from "@apollo/client";

/* Get the me user fields */
export const AUTH_FRAGMENT = gql`
  fragment AuthFields on User {
    id
    email
    first_name
    last_name
    status
  }
`;
