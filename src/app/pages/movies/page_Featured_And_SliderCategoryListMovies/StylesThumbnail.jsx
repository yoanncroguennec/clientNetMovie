import { Typography, styled } from "@mui/material";

export const styleImg = {
  height: "100%",
  width: "100%",
  zIndex: 1,
  position: "absolute",
};

export const TypoTitleOfMovie = styled(Typography)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 3,
  position: "absolute",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));
