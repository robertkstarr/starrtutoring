import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <AppBar
      position="static"
      sx={{
        top: "auto",
        bottom: 0,
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Toolbar>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: 1, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", textAlign: "center" }}>
            © Copyright {year} by Robert K. Starr
          </Box>
          <Box sx={{ display: "flex", textAlign: "center" }}>
            All Rights Reserved
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SiteFooter;
