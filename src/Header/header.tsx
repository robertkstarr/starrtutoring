import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SECTION_HEADINGS } from "../Content/Content";
import ScrollToTop from "./ScrollToTop";

const PAGES = SECTION_HEADINGS;
const OFFSET = 70;

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Box sx={{ paddingBottom: "1rem" }}>
          <AppBar position="fixed">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {PAGES.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography
                          color="secondary"
                          sx={{ textAlign: "center" }}
                        >
                          <AnchorLink offset={OFFSET} href={"#" + page}>
                            {page}
                          </AnchorLink>
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontWeight: 400,
                    letterSpacing: ".1 rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  STARR TUTORING
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {PAGES.map((page) => (
                    <Button
                      component={AnchorLink}
                      key={page}
                      href={"#" + page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        marginX: ".5rem",
                      }}
                      variant={"contained"}
                      offset={OFFSET}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      </Toolbar>
      <ScrollToTop />
    </>
  );
}

export default Header;
