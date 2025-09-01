import Link from "next/link";

// Core
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { HeartBroken } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

function MatchesPage() {
  return (
    <DefaultLayout title="Matches">
      <Stack alignItems="center" direction="row" gap={2}>
        <Typography variant="h4">
          Matches
        </Typography>

        <Chip
          label="0"
          color="primary"
          variant="outlined"
          size="small"
        />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" alignItems="center" justifyContent="center" minHeight="50vh">
        <Stack alignItems="center" gap={2}>
          <HeartBroken
            sx={{
              fontSize: 64,
              color: "error.light",
              opacity: 0.8,
            }}
          />

          <Typography variant="h5" color="textSecondary">
            No Matches yet
          </Typography>

          <Typography variant="body2" color="textDisabled">
            It&apos;s dangerous to go alone!
          </Typography>

          <Button
            component={Link}
            href="/overview"
            variant="outlined"
          >
            Find your buddy
          </Button>
        </Stack>
      </Box>
    </DefaultLayout>
  );
}

export default MatchesPage;
