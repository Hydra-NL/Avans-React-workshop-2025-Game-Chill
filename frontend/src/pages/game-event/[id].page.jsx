// 3. Detail page
import { useState } from "react";
// 3.1. Retrieve real data
// import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// Core
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Dialog,
  DialogTitle,
  Divider,
  // Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
// 3.2. Add the import for GameEventPageSkeleton to line 21
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import GameEventSignUpForm from "../../modules/game-event/forms/game_event_sign_up.form";

// GraphQL
// import { GET_GAME_EVENT } from "@/graphql";

function GameEventPage() {
  const router = useRouter();
  const gameEventId = router.query.id;

  console.log(gameEventId);

  const [dialogState, setDialogState] = useState();

  // 3.1. Retrieve real data
  // Hint: Check out frontend/src/pages/overview/index.page.jsx for an example on retrieving real data
  const data = {};

  const mockUsers = [
    {
      id: 1,
      first_name: "Wout",
      last_name: "Groenendijk",
    },
    {
      id: 2,
      first_name: "Pascal",
      last_name: "Van de Keere",
    },
    {
      id: 3,
      first_name: "Jeremy",
      last_name: "Nelemans",
    },
    {
      id: 4,
      first_name: "Janne",
      last_name: "Volkers",
    },
  ];

  const mockData = {
    id: 1,
    title: "5v5 Competitive tournament",
    main_image_url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    description:
      "Join our 5v5 competitive Counter-Strike 2 tournament!\n" +
      "Open to all skill levels and ranks, this inhouse event is perfect for players who want a fair, fun, and competitive experience.\n" +
      "Build your team, sharpen your strategies, and put your FPS skills to the test in a structured PC environment. No voice required—just pure gameplay.",
    game: {
      title: "Counter-Strike 2",
      description:
        "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. \n" +
        "And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
      tag: "Competitive",
    },
    platform: "PC",
    players: 10,
    format: "5v5",
    voice: false,
    created_by: mockUsers[1],
    participants: mockUsers,
  };

  // if (loading) return <GameEventPageSkeleton />;

  const gameEvent = data?.getGameEvent || mockData;

  return (
    <DefaultLayout title={gameEvent.title}>
      <Stack alignItems="flex-start" gap={1}>
        {/* 3.3. Add a way to navigate to the previous page */}
        {/* Hint: Check out next/router docs for more information on navigation */}

        <Stack
          width="100%"
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          gap={2}
        >
          <Typography variant="h4">
            {gameEvent.title}
          </Typography>

          <Button
            endIcon={<Edit />}
            variant="contained"
            onClick={() => setDialogState(true)}
          >
            Join event
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ mt: 2, mb: 3 }} />

      {/* 3.5. Make the page responsive (mobile friendly) */}
      {/* Hint: Using MUI's <Grid> component is very useful in making responsive designs */}
      <Stack direction="row" gap={1}>
        <Card variant="outlined">
          <CardHeader
            subheader={`Created by: ${gameEvent.created_by?.first_name} ${gameEvent.created_by?.last_name}`}
          />

          <CardContent>
            <Stack gap={2}>
              <Typography variant="body1">
                {gameEvent.description}
              </Typography>

              {gameEvent.tag && (
                <div>
                  <Chip label={gameEvent.tag} size="small" color="secondary" />
                </div>
              )}

              <Divider />

              <Stack>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Settings
                </Typography>

                <Typography variant="body1">
                  {`Platform: ${gameEvent.platform || "Non specified"}`}
                </Typography>

                <Typography variant="body1">
                  {`Format: ${gameEvent.format || "Non specified"}`}
                </Typography>

                <Typography variant="body1">
                  {`Voice: ${gameEvent.voice ? "Required" : "Not required"}`}
                </Typography>
              </Stack>

              <Divider />

              <Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Participants
                  </Typography>
                </Stack>

                {gameEvent.participants?.length > 0 ? (
                  (gameEvent.participants || []).map(participant => (
                    <Stack key={participant.id} direction="row" gap={1}>
                      <Favorite color="primary" fontSize="small" />

                      <Typography variant="body1">
                        {participant.first_name}
                      </Typography>
                    </Stack>
                  ))
                ) : (
                  <Typography variant="caption" fontStyle="italic">
                    No participants yet
                  </Typography>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardMedia
            sx={{ height: 180 }}
            image={gameEvent.main_image_url}
            title={gameEvent.game?.title}
          />

          <CardHeader title={gameEvent.game?.title} />

          <CardContent>
            <Typography variant="body1">
              {gameEvent.game?.description}
            </Typography>

            <Stack direction="row" gap={1} mt={2}>
              <Chip
                label={gameEvent?.game?.tag}
                size="small"
                variant="outlined"
                color="primary"
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      <Dialog
        open={dialogState}
        onClose={() => setDialogState(false)}
        maxWidth="md"
      >
        <DialogTitle>
          <Typography variant="h6" fontWeight="bold">
            Sign up
          </Typography>
        </DialogTitle>

        <GameEventSignUpForm gameEvent={gameEvent} onClose={() => setDialogState(false)} />
      </Dialog>
    </DefaultLayout>
  );
}

export default GameEventPage;
