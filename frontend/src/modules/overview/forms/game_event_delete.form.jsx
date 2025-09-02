import { useMutation } from "@apollo/client";

// Core
import {
  Button,
  DialogActions,
  DialogContent,
} from "@mui/material";

// GraphQL
// import { DELETE_GAME_EVENT } from "@/graphql";

// 2.4. Confirmation dialog before actual delete

function GameEventDeleteForm(props) {
  const { onClose, refetch, gameEvent } = props;

  const handleDelete = async () => {
    try {
      // Await delete query
      refetch();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <DialogContent>
        {/* Confirmation text goes here */}
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
