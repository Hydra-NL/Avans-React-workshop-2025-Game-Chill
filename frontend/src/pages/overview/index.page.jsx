// 2. Overview Page
// 2.1. Connect the query with the component
// import { useQuery } from "@apollo/client";
import { useState } from "react";

// Core
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DefaultLayout, OverviewPageSkeleton } from "@/layouts";
import { Button } from "@/components";

import GameEventGeneralForm from "../../modules/overview/forms/game_event_general.form";
// 2.4. Delete Card with Confirmation
// import GameEventDeleteForm from "../../modules/overview/forms/game_event_delete.form";
import GameEventCard from "../../modules/overview/components/game_event_card";

// GraphQL
// 2.1. Connect the query with the component
// import { GET_GAME_EVENTS } from "@/graphql";

function OverviewPage() {
  const [dialogFormState, setDialogFormState] = useState({ open: false });

  const onOpenDialog = (content, gameEvent) => setDialogFormState({ open: true, content, gameEvent });
  // 2.1. Connect the query with the component
  // const { data, loading, refetch } = useQuery(GET_GAME_EVENTS);

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

  // 2.1. Connect the query with the component
  // if (loading) return <OverviewPageSkeleton />;

  const gameEvents = data?.getGameEvents?.game_events || [mockData];

  return (
    <DefaultLayout title="Overview">
      <Stack alignItems="center" direction="row" justifyContent="space-between" gap={2}>
        <Typography variant="h4">
          Overview
        </Typography>

        <Button
          endIcon={<Add />}
          variant="contained"
          onClick={() => onOpenDialog(GameEventGeneralForm)}
        >
          Create Game Event
        </Button>
      </Stack>

      <Divider sx={{ mt: 2, mb: 3 }} />

      <Grid container spacing={3}>
        {gameEvents.map(gameEvent => (
          <Grid key={gameEvent.id} size={{ xs: 12, md: 6 }}>
            <GameEventCard
              gameEvent={gameEvent}
              onUpdate={() => onOpenDialog(GameEventGeneralForm, gameEvent)}
              // onDelete={() => onOpenDialog(GameEventDeleteForm, gameEvent)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Create Update and Delete Forms */}
      <Dialog
        fullWidth
        open={dialogFormState.open}
        onClose={() => setDialogFormState({ open: false })}
      >
        {dialogFormState.content && (
          <dialogFormState.content
            onClose={() => setDialogFormState({ open: false })}
            refetch={refetch}
            gameEvent={dialogFormState.gameEvent}
          />
        )}
      </Dialog>
    </DefaultLayout>
  );
}

export default OverviewPage;
