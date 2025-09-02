import { gql } from "@apollo/client";

/* Update me */
export const UPDATE_ME = gql`
  mutation updateMe($dataInput: MeInput) {
    updateMe(dataInput: $dataInput) {
      id
      email
      last_name
      first_name

      # 1.3. Add field
    }
  }
`;
