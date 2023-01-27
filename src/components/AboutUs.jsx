import { Container, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { MainImg } from "../assets/images";
import Image from "mui-image";

export default function AboutUs() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* <Stack direction="row" sx={{ mb: 5 }}> */}
        <Grid
          container
          spacing={4}
          sx={{ mb: 5 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={12} md={6}>
            <Typography variant="h2">
              MASONRY IS DONE THE RIGHT WAY WITH US
            </Typography>
          </Grid>

          <Grid item sm={12} md={5} sx={{ mb: 2 }}>
            <Typography variant="h5">ABOUT US</Typography>
            <Typography sx={{ mt: 2 }} variant="subtitle1">
              This is a little section that tells me how amzing you are and what
              you do. This is a bit of filler text to make the sizing look more
              realistic.
            </Typography>
            <Stack direction="row" sx={{ mt: 2 }} gap={3}>
              <Typography variant="h6">100+ Projects</Typography>
              <Typography variant="h6">80+ Clients</Typography>
            </Stack>
          </Grid>
        </Grid>
        {/* </Stack> */}
        <Image src={MainImg} fit="contain" style={{ borderRadius: 42 }} />
      </Container>
    </Box>
  );
}
