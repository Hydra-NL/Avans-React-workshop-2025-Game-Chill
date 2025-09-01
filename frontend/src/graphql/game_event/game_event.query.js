import { gql } from "@apollo/client";

/* Get a single game event */
export const GET_GAME_EVENT = gql`
  query getGameEvent($gameEventId: ID) {
    getGameEvent(gameEventId: $gameEventId) {
      id
      title
      description
      platform
      voice
      players
      main_image_url
      game {
        title
        description
        tags
        image
      }
    }
  }
`;

/* Get all game events by type */
export const GET_GAME_EVENTS = gql`
  query getGameEvents {
    getGameEvents {
      game_events {
        id
        title
        description
        platform
        voice
        players
        main_image_url
      }
      total
    }
  }
`;
