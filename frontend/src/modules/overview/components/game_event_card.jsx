import Link from "next/link";

// Core
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Chip, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Edit, Mic, MicOff, People } from "@mui/icons-material";

// Style
import styles from "./game_event_card.style";

function GameEventCard(props) {
  const { gameEvent, onUpdate, onDelete } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Card css={classes.card}>
      <CardMedia
        css={classes.cardMedia}
        title={gameEvent.title}
        image={gameEvent.main_image_url}
      />

      <CardContent css={classes.cardContent}>
        <Stack justifyContent="space-between" height="100%">
          <div>
            <Box mb={2} display="flex" justifyContent="space-between">
              <Link href={`/game-event/${gameEvent.id}`} passHref>
                <Typography variant="h6" css={classes.clickableTitle}>
                  {gameEvent.title}
                </Typography>
              </Link>

              <Stack direction="row">
                <IconButton onClick={onUpdate} css={classes.button}>
                  <Edit />
                </IconButton>

                <IconButton onClick={onDelete} css={classes.button}>
                  <Delete />
                </IconButton>
              </Stack>
            </Box>

            {/* <Typography variant="body2" color="textSecondary" paragraph>
              {gameEvent.description}
            </Typography> */}

            {/* 2.2. Add to the basic GameEventCard */}
          </div>

          <Stack direction="row" gap={2}>
            {/* <Chip
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
            </Box> */}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GameEventCard;
