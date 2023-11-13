import React, { useState } from "react";
import {
  useMediaQuery,
  useTheme,
  Box,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserLocationIP_AddressAndLocalTimeDate } from "../../utils";
// import DropdownNavbar from "../dropdown/dropdownNavbar/DropdownNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  RootNavbar,
  Typo_FirstLetter_Logo,
  Typo_SecondLetter_Logo,
  Typo_ThirdLetter_Logo,
  Typo_FourthLetter_Logo,
  Typo_FifthLetter_Logo,
  Typo_SixthLetter_Logo,
  Typo_SeventhLetter_Logo,
  Typo_EighthLetter_Logo,
} from "./StylesNavbar";
import { GlobalBtns } from "..";
import "../drawer/styles.css";


export default function Navbar({
  id_Of_ConnectedUser,
  token,
  handleTokenAndId,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const dataPanelDrawer = [
    { link: "movies/listAllMovies", title: "Liste de tous les films" },
    {
      link: "movies/listFarorites_WithoutMongodb_WithLocalStorage",
      title: "Mes films favoris",
    },
    // { link: "", title: "Mes films vues" },
    { link: "auth/login", title: "Se connecter" },
  ];

  return (
    <RootNavbar isScrolled={isScrolled} matches={matches}>
      <Link
        to='featured_SliderCategoryListMovies'
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "nowrap",
          textDecoration: "none",
        }}
      >
        <Typo_FirstLetter_Logo matches={matches}>N</Typo_FirstLetter_Logo>
        <Typo_SecondLetter_Logo matches={matches}>E</Typo_SecondLetter_Logo>
        <Typo_ThirdLetter_Logo matches={matches}>T</Typo_ThirdLetter_Logo>
        <Typo_FourthLetter_Logo matches={matches}>M</Typo_FourthLetter_Logo>
        <Typo_FifthLetter_Logo matches={matches}>O</Typo_FifthLetter_Logo>
        <Typo_SixthLetter_Logo matches={matches}>V</Typo_SixthLetter_Logo>
        <Typo_SeventhLetter_Logo matches={matches}>I</Typo_SeventhLetter_Logo>
        <Typo_EighthLetter_Logo matches={matches}>E</Typo_EighthLetter_Logo>
      </Link>

      <UserLocationIP_AddressAndLocalTimeDate
        id_Of_ConnectedUser={id_Of_ConnectedUser}
      />
      {!matches ? (
        <>
          <GlobalBtns
            urlBtn='movies/listAllMovies'
            textBtn='Liste de tous les films'
          />
          <GlobalBtns
            urlBtn='movies/listFarorites_WithoutMongodb_WithLocalStorage'
            textBtn='Mes favoris'
          />
          <GlobalBtns urlBtn='admin/dashboard' textBtn='Admin' />
        </>
      ) : (
        <>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo'
            onClick={() => setIsDrawerOpen(true)}
          >
            <GiHamburgerMenu color='red' size={30} />
          </IconButton>
          <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box
              className='changeAutoBgDrawer'
              p={2}
              width='250px'
              textAlign='center'
              role='presentation'
            >
              <Box
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  margin: "5px",
                  padding: "5px",
                  borderRadius: "25px",
                }}
              >
                <Typography sx={{ marginBottom: "25px" }} variant='h4'>
                  MENU
                </Typography>
                {dataPanelDrawer.map(({ link, title }) => (
                  <Link
                    style={{ color: "#FFF", textDecoration: "none" }}
                    to={link}
                  >
                    <Typography variant='h6'>{title}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Drawer>
        </>
      )}

      {/* <DropdownNavbar
        id_Of_ConnectedUser={id_Of_ConnectedUser}
        token={token}
        handleTokenAndId={handleTokenAndId}
      /> */}
    </RootNavbar>
  );
}
