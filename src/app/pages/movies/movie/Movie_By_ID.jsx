import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import Iframe from "react-iframe";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
// import Fade from "react-reveal/Fade";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
// COMPONENT UTILS
import {
  BreadcrumbsMovie,
  BooleanIfMovieViewed_Rating,
  LoaderSpinner,
} from "../../../components/utils";
// STYLES
import {
  TypoTitle,
  BoxNoDescription,
  BoxTrailer_MovieLink,
  Typo_WarningNoMovieYouMustConnect,
} from "./StylesMovie_By_ID";

/// EXPORT FUNCTION PAGE
export default function Movie_By_ID({ token, id_Of_ConnectedUser }) {
  const params = useParams();

  /// RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const styles_MotionEffect_Div = {
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: "40px",
    boxShadow:
      "rgba(255, 0, 0, 0.5) 0px 10px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", // box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
    marginTop: `${matches ? "10px" : "150px"}`,
    padding: `${matches ? "50px" : "100px"}`,
    width: `${matches ? "60vw" : "50vw"}`,
  };

  /// STYLES
  //// ATTENTION ! NE PAS SUPPRIMER CE STYLES SINON CA N'AFFICHERA PLUS LE BOX SUR LE BG SLIDER IMGS ////
  const stylesRootMovie_By_ID = {
    alignItems: "center",
    fontSize: "5em",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginTop: `${matches ? "50px" : "150px"}`,
    top: "0",
    width: "100vw",
    zIndex: 999,
  };

  const styleImg = {
    borderRadius: "50%",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
    border: "8px solid #000",
    float: "left",
    height: `${matches ? "100px" : "220px"}`,
    margin: "0 20px 5px 0",
    shapeOutside: "margin-box",
    width: `${matches ? "100px" : "220px"}`,
  };

  const stylesReactPlayer = {
    marginBottom: `${matches ? "30px" : "0"}`,
  };

  const stylesMovieLink = {
    height: "320px",
    width: `${matches ? "300px" : "500px"}`,
  };

  // GET API MOVIE BY ID
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/movies/${params.id}`
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const transition_MotionEffect_Div = {
    type: "spring",
    damping: 5,
  };
  const {
    _id,
    name,
    desc,
    realisators,
    actors,
    favorite,
    watch,
    country,
    production_company,
    movieLink,
    genre,
    img,
    trailer,
    year,
    rating,
  } = data;

  //////////////////// RETURN ////////////////////
  return loading ? (
    <LoaderSpinner />
  ) : (
    <Fade left>
      <div style={stylesRootMovie_By_ID}>
        <BreadcrumbsMovie name={name} _id={_id} />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={transition_MotionEffect_Div}
          style={styles_MotionEffect_Div}
        >
          <img
            alt='movie'
            src={img}
            height={1550}
            style={styleImg}
            width={1550}
          />
          <BooleanIfMovieViewed_Rating
            rating={rating}
            favorite={favorite}
            watch={watch}
          />
          <TypoTitle variant={matches ? "h6" : "h4"}>
            {name} ({year} - {country}{" "}
            {production_company
              ? ` - Société de Production : ${production_company}`
              : ""}
            )
          </TypoTitle>
          <Typography variant={matches ? "body1" : "h5"}>
            <strong>Réalisateurs :</strong> {realisators}
          </Typography>
          <Typography variant={matches ? "body1" : "h5"}>
            <strong>Acteurs :</strong> {actors}
          </Typography>
          {/* <BoxMovieGenre genre={genre} />  */}
          {desc === "" ? (
            <BoxNoDescription>
              <Typography variant='h5'> Pas de description</Typography>
            </BoxNoDescription>
          ) : (
            <Typography variant={matches ? "body1" : "h5"}>{desc}</Typography>
          )}

          <BoxTrailer_MovieLink>
            <ReactPlayer
              url={trailer}
              playing={false}
              controls={true}
              height={250}
              width={matches ? "300px" : "350px"}
              style={stylesReactPlayer}
            />

            {/* <VerificationThatItIsIndeedTheLoggedInUserWithThe_IP_AddressOfTheDeviceUsedByTheLoggedInPersonToWatchTheFilm
              id_Of_ConnectedUser={id_Of_ConnectedUser}
            /> */}
            {token ? (
              movieLink ? (
                <Iframe url={movieLink} styles={stylesMovieLink} />
              ) : (
                <Typography sx={{ fontWeight: "bold" }} variant='h5'>
                  Désolé, pas de lien du Film 😥
                </Typography>
              )
            ) : (
              <Link to='../auth/login'>
                <Typo_WarningNoMovieYouMustConnect variant='h5'>
                  Pour voir le film, vous devez vous connecter !
                </Typo_WarningNoMovieYouMustConnect>
              </Link>
            )}
          </BoxTrailer_MovieLink>
        </motion.div>
      </div>
    </Fade>
  );
}
