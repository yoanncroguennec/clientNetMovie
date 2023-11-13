import { Typography, Box, styled, Container, Button } from "@mui/material";

export const RootRow = styled(Container)(({ theme }) => ({
  paddingBottom: "60px",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxRow = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));

export const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  textDecoration: "none",
};

export const TypoTitleCategory = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  margin: "35px 0 35px 50px", // T_R_B_L
}));

export const BoxListMovies = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginLeft: "2px",
  overflow: "hidden",
  height: "50%",
}));

export const BoxBtnAllResults = styled(Box)(({ matches }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  width: `${matches ? "200px" : "400px"}`,
}));

export const BtnAllResults = styled(Button)(({ matches }) => ({
  border: "5px solid #FFF",
  borderRadius: "40px",
  color: "#FFF",
  height: "50%",
  padding: `${matches ? "10px 20px" : "50px 150px"}`,
  width: "150px",
}));

export const styleBiChevronRight = {
  bottom: 0,
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  cursor: "pointer",
  height: "50%",
  margin: "auto",
  position: "absolute",
  right: 0,
  top: 0,
  width: "50px",
  zIndex: 150,
};

