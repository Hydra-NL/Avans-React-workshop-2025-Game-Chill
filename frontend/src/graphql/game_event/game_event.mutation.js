import { gql } from "@apollo/client";

/* Create game event */
export const CREATE_GAME_EVENT = gql`
  mutation createGameEvent($dataInput: GameEventInput) {
    createGameEvent(dataInput: $dataInput) {
      id
      title
      description
      platform
      voice
      players
    }
  }
`;

/* Update game event */
export const UPDATE_GAME_EVENT = gql`
  mutation updateGameEvent($dataInput: GameEventInput) {
    updateGameEvent(dataInput: $dataInput) {
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
export const DELETE_GAME_EVENT = gql`
  mutation deleteGameEvent($gameEventId: ID) {
    deleteGameEvent(gameEventId: $gameEventId)
  }
`;
