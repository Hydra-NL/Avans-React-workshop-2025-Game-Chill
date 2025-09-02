import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

// Core
import { Alert, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { NumberField, SelectField, TextField } from "@/fields";
import { Button } from "@/components";

// GraphQL
import { UPDATE_ME } from "@/graphql";

function ProfileUpdateForm(props) {
  const {
    user,
    onClose,
  } = props;

  const [updateMe] = useMutation(UPDATE_ME);

  const { control, handleSubmit, formState, setError, setValue } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gamertag: user.gamertag,
      age: user.age,
      bio: user.bio,
      platform: user.platform,
    },
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

  const platformOptions = ["PC", "PlayStation", "Xbox", "Nintendo Switch"];

  return (
    <Fragment>
      <DialogTitle>
        Update User
      </DialogTitle>

      <DialogContent>
        <form>
          <TextField
            name="gamertag"
            label="Gamer tag"
            placeholder="Jessenator#123"
            control={control}
          />

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

          <TextField
            name="email"
            label="Email"
            placeholder="gamertag@email.com"
            control={control}
          />

          <Stack direction="row" gap={2}>
            <NumberField
              name="age"
              label="Age"
              control={control}
              placeholder={18}
              sx={{ maxWidth: "50%" }}
            />

            <SelectField
              name="platform"
              label="Platform"
              control={control}
              setValue={setValue}
              options={platformOptions.map(platform => ({
                value: platform,
                textPrimary: platform,
              }))}
              sx={{ minWidth: "50%" }}
            />
          </Stack>

          <TextField
            name="bio"
            label="Bio"
            placeholder="Write something interesting about yourself..."
            control={control}
            rows={4}
            multiline
          />

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
