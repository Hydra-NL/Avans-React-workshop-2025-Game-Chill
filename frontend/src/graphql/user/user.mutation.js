import { gql } from "@apollo/client";

/* Update me */
export const UPDATE_ME = gql`
  mutation updateMe($dataInput: MeInput) {
    updateMe(dataInput: $dataInput) {
      id
      email
      last_name
      first_name
      gamer_tag
      description
      tagline
      age
      city
      country
      bio
      platform
      genre
      availability
      play_style
    }
  }
`;
