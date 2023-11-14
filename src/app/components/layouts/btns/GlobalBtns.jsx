import { Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GlobalBtns({
  titleTooltipBtn,
  colorIconBtn,
  marginRightIconBtn,
  urlBtn,
  onClickAction,
  iconBtn,
  textBtn,
  widthBtn,
}) {
  // RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Link to={urlBtn} style={{ textDecoration: "none" }}>
      <Tooltip
        title={
          titleTooltipBtn && (
            <Typography variant='h6'>{titleTooltipBtn}</Typography>
          )
        }
      >
        <motion.div
          onClick={onClickAction}
          style={{
            alignItems: "center",
            border: "2px solid #F00",
            borderRadius: "50px",
            boxShadow: "20px 20px 40px -6px rgba(0, 0, 0, .2)",
            cursor: "pointer",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            margin: `${matches ? "2px 5px" : "5px 0"}`,
            padding: `${matches ? "5px 0" : "5px 25px"}`,
            width: `${widthBtn}`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div
            style={{
              // color: "#FFF",
              color: `${colorIconBtn}`,
              marginRight: `${matches ? "5px" : { marginRightIconBtn }}`,
            }}
          >
            {iconBtn}
          </div>
          <Typography
            style={{ color: "#F00", fontWeight: "bold" }}
            variant='h6'
          >
            {textBtn}
          </Typography>
        </motion.div>
      </Tooltip>
    </Link>
  );
}
