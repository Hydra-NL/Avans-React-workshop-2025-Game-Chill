import { gql } from "@apollo/client";

/* Get the me user fields */
export const AUTH_FRAGMENT = gql`
  fragment AuthFields on User {
    id
    email
    first_name
    last_name
    status
    platform

    # 1. Profile page
    # 1.2. Update GraphQL Frontend query
    # gamer_tag
    # description
    # tagline
    # age
    # city
    # country
    # bio
    # platform
    # genre
    # availability
    # play_style
  }
`;
