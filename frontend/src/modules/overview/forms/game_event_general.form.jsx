import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

// Core
import { Button, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { NumberField, TextField } from "@/fields";

// Utils
import { setGameEventFormValues } from "./_default_values";

// GraphQL
import { CREATE_GAME_EVENT, UPDATE_GAME_EVENT } from "@/graphql";

function GameEventCreateForm(props) {
  const { onClose, refetch, gameEvent } = props;

  const [createGameEvent] = useMutation(CREATE_GAME_EVENT);
  const [updateGameEvent] = useMutation(UPDATE_GAME_EVENT);

  const { control, formState, handleSubmit, setError } = useForm({
    defaultValues: setGameEventFormValues(gameEvent),
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      if (gameEvent?.id) {
        await updateGameEvent({ variables: { gameEventId: gameEvent.id, dataInput: values } });
      } else {
        await createGameEvent({ variables: { dataInput: values } });
      }

      refetch();
      onClose();
    } catch (error) {
      setError("submitForm", { message: error || "AA0x00" });
    }
  };

  return (
    <form>
      <DialogTitle>
        <Typography variant="h5">
          {`${gameEvent?.id ? "Update" : "Create"} Game event`}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Stack gap={1}>
          <TextField
            name="title"
            label="Title"
            control={control}
          />

          <TextField
            name="description"
            label="Description"
            control={control}
            multiline
            rows={2}
          />

          <NumberField
            name="players"
            label="Number of Players"
            control={control}
          />

          <TextField
            name="main_image_url"
            label="Main Image URL"
            control={control}
          />

          <Stack gap={1}>
            <Typography variant="h6">Game Details</Typography>

            <TextField
              name="game.title"
              label="Game Title"
              control={control}
            />

            <TextField
              name="game.description"
              label="Game Description"
              control={control}
              multiline
              rows={2}
            />

            <TextField
              name="game.tag"
              label="Tag"
              control={control}
            />
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(handleSubmitForm)}
          disabled={!formState.isValid}
        >
          Create
        </Button>
      </DialogActions>
    </form>
  );
}

export default GameEventCreateForm;
