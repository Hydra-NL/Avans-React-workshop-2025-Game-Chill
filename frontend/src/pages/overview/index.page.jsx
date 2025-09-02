import { useQuery } from "@apollo/client";
import { useState } from "react";

// Core
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DefaultLayout, OverviewPageSkeleton } from "@/layouts";
import { Button } from "@/components";

import GameEventGeneralForm from "../../modules/overview/forms/game_event_general.form";
import GameEventDeleteForm from "../../modules/overview/forms/game_event_delete.form";
import GameEventCard from "../../modules/overview/components/game_event_card";

// GraphQL
import { GET_GAME_EVENTS } from "@/graphql";

function OverviewPage() {
  const [dialogFormState, setDialogFormState] = useState({ open: false });

  const onOpenDialog = (content, gameEvent) => setDialogFormState({ open: true, content, gameEvent });

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
              onDelete={() => onOpenDialog(GameEventDeleteForm, gameEvent)}
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
