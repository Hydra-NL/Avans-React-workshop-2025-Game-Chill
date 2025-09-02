import { useForm } from "react-hook-form";

// Core
import { Button, DialogActions, DialogContent } from "@mui/material";

// Utils
import { setGameEventFormValues } from "./_default_values";

// GraphQL
// Import the GraphQL query

// 2.3. Create a Dialog with a form with inputs for Game Event creation

function GameEventCreateForm(props) {
  const { onClose, refetch, gameEvent } = props;

  const { control, formState, handleSubmit, setError } = useForm({
    defaultValues: setGameEventFormValues(gameEvent),
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      if (gameEvent?.id) {
        // If the id exists, execute update query
      } else {
        // Else, execute create query
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
        {/* Input fields go here */}
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
