import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "./img_1.jpg";
import slide_image_2 from "./img_2.jpg";
import slide_image_3 from "./img_3.jpg";
import slide_image_4 from "./img_4.jpg";
import slide_image_5 from "./img_5.jpg";
import slide_image_6 from "./img_6.jpg";
import slide_image_7 from "./img_7.jpg";
import { Box, Button, Typography } from "@mui/material";
import {GlobalBtns} from "../../../components/layouts";

export default function ListAllMovies_Cellular({ allMovies }) {
  const dataSwiper = [
    {
      src: slide_image_1,
    },
    {
      src: slide_image_2,
    },
    {
      src: slide_image_3,
    },
    {
      src: slide_image_4,
    },
    {
      src: slide_image_5,
    },
    {
      src: slide_image_6,
    },
    {
      src: slide_image_7,
    },
  ];

  return (
    <div style={{ paddingTop: "100px" }}>
      <Typography variant='h4'>
        {allMovies.length} films sur cette page
      </Typography>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        {allMovies
          // sortByAlphabeticalOrder
          // .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(
            ({
              _id,
              name,
              desc,
              realisators,
              actors,
              favorite,
              watch,
              country,
              genre,
              img,
              year,
              rating,
              index,
            }) => (
              <SwiperSlide>
                <Box style={{}}>
                  <div
                    style={{
                      position: "absolute",
                    }}
                  >
                    <img
                      src={img}
                      alt='slide_image'
                      style={{
                        borderRadius: "25px",
                        position: "absolute",
                        height: "100vh",
                        width: "85vw",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "25px",
                      color: "#FFF",
                      height: "100vh",
                      position: "relative",
                      width: "85vw",
                      // padding: "10px",
                    }}
                  >
                    <Box sx={{ padding: "40px" }}>
                      <Typography
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                        variant='h6'
                      >
                        {name} - {genre}
                      </Typography>
                      <Typography variant='body1'>
                        Réalisateur(s) : {realisators}
                      </Typography>
                      <Typography variant='body1'>
                        Acteur(s) : {actors}
                      </Typography>
                      <Typography variant='body1'>
                        Description : {desc.slice(0, 200)}
                      </Typography>
                      <GlobalBtns
                        urlBtn={`../movies/${_id}`}
                        textBtn='Voir +'
                        widthBtn='150px'
                      />
                    </Box>
                  </div>
                </Box>
              </SwiperSlide>
            )
          )}
        {/* {dataSwiper.map(({ src }) => (
          <SwiperSlide>
            <img src={src} alt='slide_image' />
          </SwiperSlide>
        ))} */}
        {/* <SwiperSlide>
          <img src={slide_image_1} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt='slide_image' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt='slide_image' />
        </SwiperSlide> */}

        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
}

// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   EffectCoverflow,
//   //Pagination,
//   Navigation,
// } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Typography } from "@mui/material";
// import GlobalBtns from "../../../components/layouts/btns/GlobalBtns";
// import { BsHandIndexThumb } from "react-icons/bs";
// // COMPONENTS UTILS
// import { Pagination } from "../../../components/utils";

// export default function ListAllMovies_Cellular({
//   allMovies,
//   countAllMovies,
//   page,
//   setPage,
//   limit,
// }) {
//   function TruncateDesc(str) {
//     return str.length > 10 ? str.substring(0, 200) + "..." : str;
//   }

//   return (
//     <div style={{ paddingTop: "50px" }}>
//       <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant='h5'>
//         {allMovies.length} films sur cette page
//       </Typography>
//       <Pagination
//         page={page}
//         countAllMovies={countAllMovies}
//         setPage={setPage}
//         limit={limit}
//       />
//       <div className='container'>
//         {/* <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           pagination={{ el: ".swiper-pagination", clickable: true }}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//             clickable: true,
//           }}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           className='swiper_container'
//         > */}
// {allMovies
//   // sortByAlphabeticalOrder
//   // .sort((a, b) => (a.name > b.name ? 1 : -1))
//   .map(
//     ({
//       _id,
//       name,
//       desc,
//       realisators,
//       actors,
//       favorite,
//       watch,
//       country,
//       genre,
//       img,
//       year,
//       rating,
//       index,
//     }) => (
//                 <SwiperSlide
//                   className='iii'
//                   style={{
//                     backgroundPosition: "center",
//                     backgroundImage: `url(${img})`,
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                     color: "#FFF",
//                     width: "100%",
//                     height: "100%",
//                   }}
//                 >
//                   <img
//                     alt='poster film'
//                     src={img}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       position: "absolute",
//                     }}
//                   />
//                   <div
//                     style={{
//                       background: "rgba(0, 0, 0, 0.4)",
//                       border: "3px solid #F00",
//                       borderRadius: "28px",
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       width: "100%",
//                       height: "100%",
//                       position: "absolute",
//                       padding: "15px",
//                     }}
//                   >
//                     <Typography className='oo' variant='h2'>
//                       Swiper
//                     </Typography>
//                     <div className="iip">
//                       <BsHandIndexThumb
//                       className="icon"
//                         color='#F00'
//                         size={45}
//                         style={{ zIndex: 7 }}
//                       />
//                     </div>
//                     <Typography sx={{ fontWeight: "bold" }} variant='h6'>
//                       {name}
//                     </Typography>
//                     <Typography sx={{ margin: "5px 0" }} variant='body2'>
//                       <strong>Réalisateurs :</strong> {realisators}
//                     </Typography>
//                     <Typography sx={{ margin: "5px 0" }} variant='body2'>
//                       <strong>Acteurs :</strong> {actors}
//                     </Typography>
//                     {desc === "" && (
//                       <div>
//                         <Typography variant='body1'>
//                           {" "}
//                           Pas de description
//                         </Typography>
//                       </div>
//                     )}

//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: `${TruncateDesc(desc)}`,
//                       }}
//                       style={{ fontSize: "0.5em" }}
//                     />
//                     <div style={{ bottom: 25, position: "absolute" }}>
//                       <GlobalBtns
//                         urlBtn={`../movies/${_id}`}
//                         textBtn="Plus d'informations"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               )
//             )}
//           <div className='slider-controler'>
//             <div className='swiper-button-prev slider-arrow'>
//               <ion-icon name='arrow-back-outline'></ion-icon>
//             </div>
//             <div className='swiper-button-next slider-arrow'>
//               <ion-icon name='arrow-forward-outline'></ion-icon>
//             </div>
//             <div className='swiper-pagination'></div>
//           </div>
//         {/* </Swiper> */}

//         <div className='sss'></div>
//       </div>
//     </div>
//   );
// }
