import { useMutation } from "@apollo/client";

// Core
import {
  Button,
  DialogActions,
  DialogContent,
} from "@mui/material";

// GraphQL
import { DELETE_GAME_EVENT } from "@/graphql";

function GameEventDeleteForm(props) {
  const { onClose, refetch, gameEvent } = props;

  const [deleteGameEvent] = useMutation(DELETE_GAME_EVENT);

  const handleDelete = async () => {
    try {
      await deleteGameEvent({ variables: { gameEventId: gameEvent.id } });
      refetch();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <DialogContent>
        <p>Weet je zeker dat je de game event wilt verwijderen?</p>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </form>
  );
}

export default GameEventDeleteForm;
