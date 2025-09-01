import Link from "next/link";
import { useMutation } from "@apollo/client";

// Core
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Chip, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Mic, MicOff, People } from "@mui/icons-material";

// Style
import styles from "./game_event_card.style";

// GraphQL
import { DELETE_GAME_EVENT } from "@/graphql";

function GameEventCard(props) {
  const { gameEvent, refetch } = props;

  const theme = useTheme();
  const classes = styles(theme);

  const [deleteGameEvent] = useMutation(DELETE_GAME_EVENT);

  const handleDelete = async () => {
    try {
      await deleteGameEvent({ variables: { gameEventId: gameEvent.id } });
      refetch();
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Card css={classes.card}>
      <CardMedia
        css={classes.cardMedia}
        title={gameEvent.title}
        image={gameEvent.main_image_url}
      />

      <CardContent>
        <Box mb={2} display="flex" justifyContent="space-between">
          <Link href={`/game-event/${gameEvent.id}`} passHref>
            <Typography
              variant="h6"
              css={classes.clickableTitle}
            >
              {gameEvent.title}
            </Typography>
          </Link>

          <IconButton
            onClick={handleDelete}
            css={classes.deleteButton}
          >
            <Delete />
          </IconButton>
        </Box>

        <Typography variant="body2" color="textSecondary" paragraph>
          {gameEvent.description}
        </Typography>

        <Stack direction="row" gap={2}>
          <Chip
            label={gameEvent.platform}
            css={classes.platformChip}
            variant="outlined"
            size="small"
            color="primary"
          />

          <Box css={classes.detailItem}>
            <People fontSize="small" />
            {`${gameEvent.players} players`}
          </Box>

          <Box css={classes.detailItem}>
            {gameEvent.voice ? <Mic fontSize="small" /> : <MicOff fontSize="small" />}
            {gameEvent.voice ? "Voice chat" : "No voice"}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GameEventCard;
