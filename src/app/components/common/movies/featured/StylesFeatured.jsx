import { Typography, Box, styled } from "@mui/material";

export const RootFeatured = styled(Box)(({ img }) => ({
  backgroundImage: `url("${img}")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  color: "#FFF",
  filter: "brightness(90%)",
  height: "100vh",
  width: "100vw",
}));

export const BoxFeatured = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
}));

/************* DROPDOWN ************/
export const Dropdown = styled(Box)(({ theme }) => ({
  background: "#000",
  border: "1px solid #FFF",
  height: "30px",
  margin: "100px auto",
  position: "relative",
  userSelect: "none",
  width: "200px",
  zIndex: "999",
}));

export const DropdownBtn = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  boxShadow: "3px 3px 10px 6px rgba(0, 0, 0, 0.06)",
  color: "#FFF",
  display: "flex",
  fontWeight: "bold",
  height: "15px",
  justifyContent: "space-between",
  padding: "15px 20px",
}));

export const BoxActiveDropdown = styled(Box)(({ theme }) => ({
  border: "1px dotted black",
  height: "350px",
  overflowY: "scroll",
  zIndex: 999,
}));

export const DropdownItem = styled(Box)(({ theme }) => ({
  background: "#020",
  cursor: "pointer",
  padding: "10px",
  transition: "all 0.2s",
  maxHeight: "50px",
  "&:hover": {
    background: "#333",
  },
}));

export const linkItemDropdown = {
  color: "#FFF",
  textDecoration: "none",
};

/************* BOX DESC ************/
export const BoxBGTitleDescBtnsMovieRandom = styled(Typography)(({ matches }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: "25px",
  marginLeft: `${matches ? "5px" : "45px"}`,
  padding: `${matches ? "25px" : "50px"}`,
  width: `${matches ? "300px" : "700px"}`,
}));

export const TypoNameMovieRandom = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
}));

export const BoxThreeBtns = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
}));
