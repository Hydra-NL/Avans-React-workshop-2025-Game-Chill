import { gql } from "@apollo/client";
import { AUTH_FRAGMENT } from "./user.fragment";

/* Get the current user */
export const GET_ME = gql`
  query me {
    me {
      ...AuthFields
    }
  }
  ${AUTH_FRAGMENT}
`;
