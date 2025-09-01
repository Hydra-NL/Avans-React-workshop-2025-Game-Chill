import { Box, Card, CardContent, CardHeader, Chip, Stack, Typography } from "@mui/material";

function ProfileInfo(props) {
  const { user } = props;

  return (
    <Card>
      <CardHeader title="Preferences" />

      <CardContent>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" gutterBottom color="textSecondary">
              Platforms
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {(user.platforms || []).map((platform, index) => (
                <Chip
                  key={`${index + 1}`}
                  label={platform}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom color="textSecondary">
              Favorite Genres
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {(user.genres || []).map((genre, index) => (
                <Chip
                  key={`${index + 1}`}
                  label={genre}
                  size="small"
                  variant="filled"
                  color="secondary"
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom color="textSecondary">
              Play Style
            </Typography>
            <Typography variant="body2">
              {user.playStyle}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom color="textSecondary">
              Chill Availability
            </Typography>
            <Typography variant="body2">
              {user.availability}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileInfo;
