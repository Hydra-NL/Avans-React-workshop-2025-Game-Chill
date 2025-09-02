import { Fragment } from "react";
import { useForm } from "react-hook-form";
// import { useMutation } from "@apollo/client";

// Core
import { Alert, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { Button } from "@/components";
import { TextField } from "@/fields";

// GraphQL
// Import GraphQL query

function ProfileUpdateForm(props) {
  const {
    user,
    onClose,
  } = props;

  const { control, handleSubmit, formState, setError } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      // 1.3. Add fields
    },
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      // 1.3. Form submission
      console.log(values);
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
          <Stack direction="row" gap={2}>
            <TextField
              name="first_name"
              label="First name"
              placeholder="Jesse"
              control={control}
            />

            <TextField
              name="last_name"
              label="Last name"
              placeholder="Doe"
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
