import { useState } from "react";
// import { useQuery } from "@apollo/client";

// Core
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import ProfilePreferenceCard from "../../modules/profile/components/profile_preference_card";
import ProfileInfoCard from "../../modules/profile/components/profile_info_card";
import ProfileUpdateForm from "../../modules/profile/forms/profile_update.form";

// GraphQL
// Import GraphQl query

// 1.1. There is a hardcoded constant ready, which has to be replaced with real data
// 1.1. Pass props to the correct components

function ProfilePage() {
  const [dialogState, setDialogState] = useState(false);

  const mockUser = {
    first_name: "Jesse",
    last_name: "Doe",
    gamertag: "Jessenator#123",
    tagline: "",
    email: "jesse.doe@email.com",
    status: "online",
    age: 20,
    city: "Breda",
    createdAt: "01-01-2024",
    platform: "PC",
    bio: "I'm looking for my player 2",
  };

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
          <ProfileInfoCard user={mockUser} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProfilePreferenceCard user={mockUser} />
        </Grid>
      </Grid>

      {/* Edit Form */}
      <Dialog
        fullWidth
        open={dialogState}
        onClose={() => setDialogState(false)}
      >
        <ProfileUpdateForm onClose={() => setDialogState(false)} user={mockUser} />
      </Dialog>
    </DefaultLayout>
  );
}

export default ProfilePage;
