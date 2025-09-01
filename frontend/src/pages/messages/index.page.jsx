import Link from "next/link";

// Core
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

function MessagesPage() {
  return (
    <DefaultLayout title="Messages">
      <Stack alignItems="center" direction="row" gap={2}>
        <Typography variant="h4">
          Messages
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
          <ChatBubbleOutline
            sx={{
              fontSize: 64,
              color: "error.light",
              opacity: 0.8,
            }}
          />
          <Typography variant="h5" color="textSecondary">
            No Messages yet
          </Typography>

          <Typography variant="body2" color="textDisabled">
            Start sliding into some DMs
          </Typography>

          <Button
            component={Link}
            href="/matches"
            variant="outlined"
          >
            View your matches
          </Button>
        </Stack>
      </Box>
    </DefaultLayout>
  );
}

export default MessagesPage;
