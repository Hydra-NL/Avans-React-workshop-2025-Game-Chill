import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

// Core
import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
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
      const { players } = values;

      const mappedValues = {
        ...values,
        players: Number(players),
      };

      if (gameEvent?.id) {
        await updateGameEvent({ variables: { gameEventId: gameEvent.id, dataInput: mappedValues } });
      } else {
        await createGameEvent({ variables: { dataInput: mappedValues } });
      }

      refetch();
      onClose();
    } catch (error) {
      setError("submitForm", { message: error || "AA0x00" });
    }
  };

  return (
    <form>
      <DialogContent>
        <Stack gap={3}>
          <TextField
            name="title"
            label="Titel"
            control={control}
          />

          <TextField
            name="description"
            label="Description"
            control={control}
            multiline
            rows={2}
          />

          <FormControl>
            <FormLabel>Platform</FormLabel>
            <RadioGroup
              row
              control={control}
              name="platform"
            >
              <FormControlLabel value="pc" control={<Radio />} label="PC" />
              <FormControlLabel value="console" control={<Radio />} label="Console" />
              <FormControlLabel value="mobile" control={<Radio />} label="Mobile" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="voice-input">
              Voice
            </FormLabel>

            <Stack direction="row" alignItems="center" gap={1}>
              <Checkbox name="voice" />

              <Typography variant="body1">
                Microphone available
              </Typography>
            </Stack>
          </FormControl>

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

          <Stack gap={2}>
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
              name="game.tags"
              label="Tags (comma separated)"
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
