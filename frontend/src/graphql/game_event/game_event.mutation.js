import { gql } from "@apollo/client";

/* Create game event */
// export const CREATE_GAME_EVENT = gql`
//   # 2.3. GraphQL mutation resolver/schema
// `;

/* Update game event */
export const UPDATE_GAME_EVENT = gql`
  mutation updateGameEvent($gameEventId: ID!, $dataInput: GameEventInput) {
    updateGameEvent(gameEventId: $gameEventId, dataInput: $dataInput) {
      id
      title
      description
      platform
      voice
      players
    }
  }
`;

/* Delete game event */
// export const DELETE_GAME_EVENT = gql`
//   # 2.4. Create a GraphQL mutation for the DELETE operation
// `;
