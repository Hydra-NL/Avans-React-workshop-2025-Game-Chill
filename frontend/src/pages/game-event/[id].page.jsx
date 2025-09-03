import { useState } from "react";
import { useQuery } from "@apollo/client";
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
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowBack, Edit, Favorite } from "@mui/icons-material";
import { DefaultLayout, GameEventPageSkeleton } from "@/layouts";
import { Button } from "@/components";

import GameEventSignUpForm from "../../modules/game-event/forms/game_event_sign_up.form";

// GraphQL
import { GET_GAME_EVENT } from "@/graphql";

function GameEventPage() {
  const router = useRouter();
  const gameEventId = router.query.id;

  const [dialogState, setDialogState] = useState();

  const { data, loading } = useQuery(GET_GAME_EVENT, {
    variables: { gameEventId },
    skip: !gameEventId,
  });

  if (loading) return <GameEventPageSkeleton />;

  const gameEvent = data?.getGameEvent || {};

  return (
    <DefaultLayout title={gameEvent.title}>
      <Stack alignItems="flex-start" gap={1}>
        <Button onClick={() => router.back()} startIcon={<ArrowBack />}>
          Go back
        </Button>

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

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
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
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
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
        </Grid>
      </Grid>

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
