import { useState } from "react";
import { useQuery } from "@apollo/client";

// Core
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DefaultLayout, OverviewPageSkeleton } from "@/layouts";
import { Button } from "@/components";

import GameEventCard from "../../modules/overview/components/game_event_card";

// GraphQL
import { GET_GAME_EVENTS } from "@/graphql";

function OverviewPage() {
  const [dialogState, setDialogState] = useState(false);

  const { data, loading, refetch } = useQuery(GET_GAME_EVENTS);

  if (loading) return <OverviewPageSkeleton />;

  const gameEvents = data?.getGameEvents?.game_events || [];

  return (
    <DefaultLayout title="Overview">
      <Stack alignItems="center" direction="row" justifyContent="space-between" gap={2}>
        <Typography variant="h4">
          Overview
        </Typography>

        <Button
          endIcon={<Add />}
          variant="contained"
          onClick={() => setDialogState(true)}
        >
          Create Game Event
        </Button>
      </Stack>

      <Divider sx={{ mt: 2, mb: 3 }} />

      <Grid container spacing={3}>
        {gameEvents.map(gameEvent => (
          <Grid key={gameEvent.id} size={{ xs: 12, md: 6 }}>
            <GameEventCard
              refetch={refetch}
              gameEvent={gameEvent}
            />
          </Grid>
        ))}
      </Grid>

      {/* Create Form */}
      <Dialog
        fullWidth
        open={dialogState}
        onClose={() => setDialogState(false)}
      >
        <p>create</p>
      </Dialog>
    </DefaultLayout>
  );
}

export default OverviewPage;
