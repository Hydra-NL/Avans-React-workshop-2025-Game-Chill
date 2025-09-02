/* Game event form initial values */
export const setGameEventFormValues = gameEvent => ({
  title: gameEvent?.title,
  description: gameEvent?.description,
  platform: gameEvent?.platform,
  voice: gameEvent?.voice,
  players: gameEvent?.players,
  main_image_url: gameEvent?.main_image_url,
  game: {
    title: gameEvent?.game?.title,
    description: gameEvent?.game?.description,
    tags: gameEvent?.game?.tags,
  },
});
