// 1. Profile page
import { useState } from "react";
// 1.1. Query Data Integration
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
// 1.1. Query Data Integration
// import { GET_ME } from "@/graphql";

function ProfilePage() {
  const [dialogState, setDialogState] = useState(false);

  // 1.1. Query Data Integration
  // const { data, loading } = useQuery(GET_ME);

  // 1.1. There is a hardcoded constant ready, which has to be replaced with real data
  const mockUsers = [
    {
      id: 1,
      first_name: "Wout",
      last_name: "Groenendijk",
    },
    {
      id: 2,
      first_name: "Pascal",
      last_name: "Van de Keere",
    },
    {
      id: 3,
      first_name: "Jeremy",
      last_name: "Nelemans",
    },
    {
      id: 4,
      first_name: "Janne",
      last_name: "Volkers",
    },
  ];

  const mockData = {
    id: 1,
    title: "5v5 Competitive tournament",
    main_image_url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    description:
      "Join our 5v5 competitive Counter-Strike 2 tournament!\n" +
      "Open to all skill levels and ranks, this inhouse event is perfect for players who want a fair, fun, and competitive experience.\n" +
      "Build your team, sharpen your strategies, and put your FPS skills to the test in a structured PC environment. No voice required—just pure gameplay.",
    game: {
      title: "Counter-Strike 2",
      description:
        "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. \n" +
        "And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
      tag: "Competitive",
    },
    platform: "PC",
    players: 10,
    format: "5v5",
    voice: false,
    created_by: mockUsers[1],
    participants: mockUsers,
  };

  // 1.1. Query Data Integration
  // if (loading) return "loading...";

  // 1.1. There is a hardcoded constant ready, which has to be replaced with real data
  const user = mockData;

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
        <ProfileUpdateForm onClose={() => setDialogState(false)} user={user} />
      </Dialog>
    </DefaultLayout>
  );
}

export default ProfilePage;
