// Core
import { Box, Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";

import DefaultLayout from "../default.layout";

function GameEventPageSkeleton() {
  return (
    <DefaultLayout>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">
          <Skeleton height={60} width={450} />
        </Typography>

        <Skeleton width={100} />
      </Stack>

      <Box mt={1} mb={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Skeleton height={450} variant="rounded" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Skeleton height={450} variant="rounded" />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default GameEventPageSkeleton;
