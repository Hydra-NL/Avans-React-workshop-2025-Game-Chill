import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Card, CardContent, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { Email, LocationOn, Person, Schedule } from "@mui/icons-material";

// Style
import styles from "./profile_info_card.style";

function ProfileInfo(props) {
  const { user } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Card css={classes.card}>
      <CardMedia
        height={150}
        component="img"
        image="https://static.vecteezy.com/system/resources/previews/002/558/858/non_2x/black-abstract-header-with-transparent-squares-mosaic-look-banner-modern-illustration-vector.jpg"
      />

      <Chip
        size="small"
        color="success"
        label={user.status}
        css={classes.chipStatus}
      />

      <CardContent>
        <div css={classes.persona}>
          <Avatar
            src={"https://static.vecteezy.com/system/resources/previews/049/423/252/non_2x/a-cool-mysterious-and-powerful-blue-masked-ninja-character-avatar-in-a-hooded-cloak-perfect-for-gaming-channels-esports-teams-and-social-media-profiles-free-vector.jpg"}
            css={classes.avatar}
          />

          <Box ml={3}>
            <Typography variant="h4" color="white" fontWeight="600">
              {`${user.first_name} ${user.last_name}`}
            </Typography>

            <Typography variant="h6" color="primary">
              {user.gamertag}
            </Typography>
          </Box>
        </div>

        <Typography variant="body1" color="textSecondary" paragraph>
          {user.tagline}
        </Typography>

        <Typography variant="body2">
          {user.bio}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <Person sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="caption" color="textSecondary">
                    Age
                  </Typography>
                  <Typography variant="body1">
                    {user.age}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <LocationOn sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="caption" color="textSecondary">
                    City - Location
                  </Typography>
                  <Typography variant="body1">
                    {user.city}
                    {" "}
                    -
                    {user.country}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <Email sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    {user.email}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Schedule sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Member Since
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {user.createdAt}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProfileInfo;
