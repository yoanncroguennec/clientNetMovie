import React, { useRef, useState } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// COMPONENTS COMMONS
import Thumbnail from "./Thumbnail";
// STYLES
import {
  RootRow,
  BoxRow,
  TypoTitleCategory,
  BoxListMovies,
  BoxBtnAllResults,
  BtnAllResults,
  styleBiChevronRight,
  styleLink,
} from "./StylesRow";
// ICONS
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Row({ list }) {
  //////////////////// RESPONSIVE ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  const { title, content } = list;
  const [hiddenChevronLeft, sethiddenChevronLeft] = useState(false);

  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      // console.log("scrollLeft", scrollLeft);
      // console.log("clientWidth", clientWidth);

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : (sethiddenChevronLeft(true), scrollLeft + clientWidth);

      // "smooth": Il y a un comportement de défilement lisse entre les éléments.
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  let length = 0;

  const numbersContent = `${content.length}`;

  return (
    <RootRow maxWidth='xl'>
      <BoxRow>
        <Link to='' style={styleLink}>
          <TypoTitleCategory variant={matches ? "h6" : "h4"}>
            {title} : {numbersContent} films dans le slide
          </TypoTitleCategory>
        </Link>
        <div style={{ position: "relative" }}>
          <BiChevronLeft
            size={22}
            onClick={() => handleClick("left")}
            style={{
              bottom: 0,
              backgroundColor: "rgb(22, 22, 22, 0.5)",
              color: "white",
              cursor: "pointer",
              height: "50%",
              left: 0,
              margin: "auto",
              position: "absolute",
              top: 0,
              width: "50px",
              zIndex: 150,
              display: !hiddenChevronLeft && "none",
            }}
          />
          <BoxListMovies ref={rowRef}>
            {content?.map((item) => {
              length += 1;

              if (length >= numbersContent) {
                return (
                  <Link
                    to='../movies/ListMovieByCategory'
                    state={{
                      movieCategory: `Comédie`,
                    }}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <BoxBtnAllResults matches={matches}>
                      <BtnAllResults matches={matches} variant='outlined'>
                        <Typography variant={matches ? "body2" : "h4"}>
                          Voir plus de résultats
                        </Typography>
                      </BtnAllResults>
                    </BoxBtnAllResults>
                  </Link>
                );
              } else {
                return <Thumbnail item={item} />;
              }
            })}
          </BoxListMovies>

          <BiChevronRight
            style={styleBiChevronRight}
            onClick={() => handleClick("right")}
          />
        </div>
        {/* {console.log(length)} */}
      </BoxRow>
    </RootRow>
  );
}
