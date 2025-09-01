import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

// Core
import { Alert, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { Button } from "@/components";
import { TextField } from "@/fields";

// GraphQL
import { UPDATE_ME } from "@/graphql";

function ProfileUpdateForm(props) {
  const {
    onClose,
  } = props;

  const [updateMe] = useMutation(UPDATE_ME);

  const { control, handleSubmit, formState, setError } = useForm({
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      await updateMe({ variables: { dataInput: values } });
      onClose();
    } catch (error) {
      setError("submitForm", { message: error || "AA0x00" });
    }
  };

  return (
    <Fragment>
      <DialogTitle>
        Update User
      </DialogTitle>

      <DialogContent>
        <form>
          <Stack direction="row" spacing={2}>
            <TextField
              name="first_name"
              label="First name"
              control={control}
            />

            <TextField
              name="last_name"
              label="Last name"
              control={control}
            />
          </Stack>

          {formState.errors?.submitForm && (
            <Alert severity="error">
              {`${formState.errors.submitForm?.message}`}
            </Alert>
          )}
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button
          color="primary"
          variant="contained"
          loading={formState.isSubmitting}
          onClick={handleSubmit(handleSubmitForm)}
        >
          Confirm
        </Button>
      </DialogActions>
    </Fragment>
  );
}

export default ProfileUpdateForm;
