// 2. Overview page
// 2.2. Add a loader to the Overview page
// Core
// import { Box, Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";

import DefaultLayout from "../default.layout";

function OverviewPageSkeleton() {
  return (
    <DefaultLayout>
      {/* <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">
          <Skeleton height={60} width={200} />
        </Typography>

        <Skeleton width={100} />
      </Stack>

      <Box mt={1} mb={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid key={`${index + 1}`} size={{ xs: 12, md: 6 }}>
            <Skeleton height={210} variant="rounded" />
          </Grid>
        ))}
      </Grid> */}
    </DefaultLayout>
  );
}

export default OverviewPageSkeleton;
