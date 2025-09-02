// Core
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, CardMedia } from "@mui/material";

// Style
import styles from "./game_event_card.style";

// 2.2. Add to the basic GameEventCard
// 2.2. Style the card with Material-UI components

function GameEventCard(props) {
  const { gameEvent, onUpdate, onDelete } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Card css={classes.card}>
      <CardMedia css={classes.cardMedia}>
        {/* Pass the game's image to the CardMedia component */}
      </CardMedia>

      <CardContent>
        {/* Add the Card's content here */}
      </CardContent>
    </Card>
  );
}

export default GameEventCard;
