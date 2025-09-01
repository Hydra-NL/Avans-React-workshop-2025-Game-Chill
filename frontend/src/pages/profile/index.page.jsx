import { useState } from "react";
import { useQuery } from "@apollo/client";

// Core
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import ProfilePreferenceCard from "../../modules/profile/components/profile_preference_card";
import ProfileInfoCard from "../../modules/profile/components/profile_info_card";
import ProfileUpdateForm from "../../modules/profile/forms/profile_update.form";

// GraphQL
import { GET_ME } from "@/graphql";

function ProfilePage() {
  const [dialogState, setDialogState] = useState(false);

  const { data, loading } = useQuery(GET_ME);

  if (loading) return "loading...";

  const user = data.me;

  return (
    <DefaultLayout title="Profile">
      <Stack alignItems="center" direction="row" justifyContent="space-between" gap={2}>
        <Typography variant="h4">
          Profile
        </Typography>

        <Button
          endIcon={<Edit />}
          variant="contained"
          onClick={() => setDialogState(true)}
        >
          Edit
        </Button>
      </Stack>

      <Divider sx={{ mt: 2, mb: 3 }} />

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ProfileInfoCard user={user} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProfilePreferenceCard user={user} />
        </Grid>
      </Grid>

      {/* Edit Form */}
      <Dialog
        fullWidth
        open={dialogState}
        onClose={() => setDialogState(false)}
      >
        <ProfileUpdateForm onClose={() => setDialogState(false)} />
      </Dialog>
    </DefaultLayout>
  );
}

export default ProfilePage;
