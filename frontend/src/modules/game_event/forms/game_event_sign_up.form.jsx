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

function GameEventSignUpForm(props) {
  const { onClose } = props;

  const { formState, handleSubmit } = useForm({
    mode: "onChange",
  });

  const handleSignUp = () => {
    console.log("You're signed up!");
    onClose();
  };

  return (
    <form>
      <DialogContent>
        <Stack gap={2}>
          <FormControl>
            <FormLabel id="experience-label">
              Experience level
            </FormLabel>

            <RadioGroup
              row
              name="experience"
            >
              <FormControlLabel value="noob" control={<Radio />} label="Noob" />
              <FormControlLabel value="casual" control={<Radio />} label="Casual" />
              <FormControlLabel value="experienced" control={<Radio />} label="Experienced" />
              <FormControlLabel value="pro" control={<Radio />} label="Pro" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="voice-input">
              Voice
            </FormLabel>

            <Stack direction="row" alignItems="center" gap={1}>
              <Checkbox labelId="voice-input" name="voice" />

              <Typography variant="body1">
                Microphone available
              </Typography>
            </Stack>
          </FormControl>
        </Stack>
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
          Sign Up
        </Button>
      </DialogActions>
    </form>
  );
}

export default GameEventSignUpForm;
