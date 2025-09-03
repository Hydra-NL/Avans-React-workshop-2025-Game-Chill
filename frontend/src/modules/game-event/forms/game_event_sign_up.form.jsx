import { useForm } from "react-hook-form";

// Core
import { Button, DialogActions, DialogContent, Typography } from "@mui/material";

function GameEventSignUpForm(props) {
  const { gameEvent, onClose } = props;

  const { formState, handleSubmit } = useForm({
    mode: "onChange",
  });

  const handleSignUp = () => {
    console.log("You're signed up!");
    onClose();
  };

  return (
    <form>
      <DialogContent sx={{ paddingTop: 0 }}>
        <Typography variant="body1">
          Make sure you can meet all of the following requirements:
        </Typography>

        <ul>
          <li>
            {`You own the game: ${gameEvent.game.title}`}
          </li>
          <li>
            {`You have access to a: ${gameEvent.platform}`}
          </li>
          {gameEvent.voice && (
            <li>
              You have access to a working microphone
            </li>
          )}
        </ul>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(handleSignUp)}
          disabled={!formState.isValid}
        >
          Confirm
        </Button>
      </DialogActions>
    </form>
  );
}

export default GameEventSignUpForm;
