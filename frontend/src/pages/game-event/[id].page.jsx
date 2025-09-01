import { useRouter } from "next/router";
import { useState } from "react";

// Core
import { Dialog, DialogTitle, Divider, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import GameEventSignUpForm from "../../modules/game_event/forms/game_event_sign_up.form";

// GraphQL
// Import the GraphQL query

// 3.1. Retrieve data
// 3.3. Add a way to navigate to the previous page
// 3.4. Display retrieved data
// 3.5. Make the page mobile friendly (responsive)

function GameEventPage() {
  const router = useRouter();
  const mockGameEventId = router.query.id;

  console.log(mockGameEventId);

  const [dialogState, setDialogState] = useState();

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

  const mockGameEvent = {
    id: 1,
    title: "5v5 Competitive tournament",
    main_image_url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    description:
      "Join our 5v5 competitive Counter-Strike 2 tournament!\n" +
      "Open to all skill levels and ranks, this inhouse event is perfect for players who want a fair, fun, and competitive experience.\n" +
      "Build your team, sharpen your strategies, and put your FPS skills to the test in a structured PC environment. No voice required—just pure gameplay.",
    tags: ["Competitive", "Inhouse", "FPS", "Any rank"],
    game: {
      title: "Counter-Strike 2",
      description:
        "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. \n" +
        "And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
      tags: ["FPS", "Shooter", "Multiplayer", "Competitive", "Action"],
    },
    platform: "PC",
    players: 10,
    format: "5v5",
    voice: false,
    created_by: mockUsers[1],
    participants: [...mockUsers],
  };

  return (
    <DefaultLayout title={mockGameEvent.title}>
      <Stack alignItems="flex-start" gap={1}>
        <Stack
          width="100%"
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          gap={2}
        >
          <Typography variant="h4">
            {mockGameEvent.title}
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

      {/* Tip: Using MUI's Grid component is useful in creating responsive content */}

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

        <GameEventSignUpForm onClose={() => setDialogState(false)} />
      </Dialog>
    </DefaultLayout>
  );
}

export default GameEventPage;
