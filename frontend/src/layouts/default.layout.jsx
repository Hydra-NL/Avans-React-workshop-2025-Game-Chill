import { Fragment } from "react";
import Head from "next/head";

// Core
import { Box, Container } from "@mui/material";

function DefaultLayout(props) {
  const { children, title } = props;

  return (
    <Fragment>
      <Head>
        <title>
          {`${title} | Game & Chill`}
        </title>
      </Head>

      <Container maxWidth="xl">
        <Box p={4}>
          {children}
        </Box>
      </Container>
    </Fragment>
  );
}

export default DefaultLayout;
