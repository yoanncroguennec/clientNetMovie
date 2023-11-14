import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import axios from "axios";
import NavbarBottomCellular from "./navbar/navbarBottomCellular/NavbarBottomCellular";
import Navbar from "./navbar/Navbar";

export default function AppLayout({
  handleTokenAndId,
  token,
  id_Of_ConnectedUser,
}) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [darkMode, setDarkMode] = useState(false);

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/movies`;
        const { data } = await axios.get(url);
        setAllMovies(data.movies);
      } catch (err) {
        console.log(err);
      }
    };

    getAllMovies();
  }, [allMovies]);

  return (
    <div
      style={{
        background: "transparent",
        height: `${matches && "100vh"}`,
      }}
    >
      <div
        style={{
          background: "#000",
          // color: "#F00",
          paddingBottom: `${matches && "50px"}`,
          height: `${matches && "100vh"}`,
          overflow: `${matches && "scroll"}`,
          // zIndex: "-150",
        }}
      >
        <Navbar
          id_Of_ConnectedUser={id_Of_ConnectedUser}
          token={token}
          handleTokenAndId={handleTokenAndId}
        />
        <Outlet
          context={[
            allMovies,
            darkMode,
            id_Of_ConnectedUser,
            token,
            handleTokenAndId,
          ]}
        />
      </div>

      {matches && <NavbarBottomCellular />}
    </div>
  );
}
