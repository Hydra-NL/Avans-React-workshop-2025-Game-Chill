import Link from "next/link";
import { useQuery } from "@apollo/client";

// Core
import { useTheme } from "@mui/material/styles";
import { Avatar, Button, IconButton, AppBar as MuiAppBar, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import { Chat, Favorite, Search, SportsEsports } from "@mui/icons-material";

// Hooks
import useMediaQuery from "@mui/material/useMediaQuery";

// GraphQL
import { GET_ME } from "@/graphql";

// Style
import styles from "./app_bar.style";

function AppBar() {
  const theme = useTheme();
  const classes = styles(theme);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { data, loading } = useQuery(GET_ME);

  const currentUser = data?.me;

  return (
    <MuiAppBar css={classes.appBar} component="nav">
      <Toolbar css={classes.toolbar}>
        <div css={classes.logoSection}>
          <IconButton
            component={Link}
            href="/overview"
            css={classes.logoIcon}
          >
            <SportsEsports sx={{ color: "white", fontSize: "24px" }} />
          </IconButton>

          {isDesktop && (
            <Typography css={classes.logoText}>
              Game & Chill
            </Typography>
          )}
        </div>

        <Stack direction="row" gap={2}>
          {isDesktop ? (
            <Button
              component={Link}
              href="/overview"
              startIcon={<Search />}
              css={classes.navButton}
            >
              Overview
            </Button>
          ) : (
            <IconButton href="/overview">
              <Search />
            </IconButton>
          )}

          {isDesktop ? (
            <Button
              component={Link}
              href="/matches"
              startIcon={<Favorite />}
              css={classes.navButton}
            >
              Matches
            </Button>
          ) : (
            <IconButton href="/matches">
              <Favorite />
            </IconButton>
          )}

          {isDesktop ? (
            <Button
              component={Link}
              href="/messages"
              startIcon={<Chat />}
              css={classes.navButton}
            >
              Messages
            </Button>
          ) : (
            <IconButton href="/messages">
              <Chat />
            </IconButton>
          )}

          <Tooltip title="Profile" arrow>
            <IconButton
              component={Link}
              href="/profile"
              css={classes.profileButton}
            >
              <Avatar css={classes.avatar}>
                {loading ? "..." : `${currentUser?.first_name.substring(0, 1)}${currentUser?.last_name.substring(0, 1)}`}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
