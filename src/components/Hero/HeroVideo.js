import React from "react";
import useWindowSize from "../../helpers/GetWindowSize";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";

const HeroVideo = ({ data }) => {
  const size = useWindowSize();

  // Ref para el elemento de video
  const videoRef = useRef(null);

  // Función para reproducir el video automáticamente
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          // El video se reprodujo correctamente
        })
        .catch(error => {
          console.error('Error al reproducir el video:', error);
        });
    }
  };

  // Efecto para reproducir el video automáticamente después de montar el componente
  useEffect(() => {
    playVideo();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente


  return (
    <section className="pt-0 pb-0 bg-video" id="hero-video">
      <div className="hero-text-wrap overlay-bg">
        <div className="hero-text white-color">
          <div className="container text-center">
            <h2 className="white-color text-uppercase font-400 letter-spacing-5">
              {data.tagline}
            </h2>
            <h1 className="white-color text-uppercase font-700">{data.title}</h1>
            <h3 className="white-color font-400 text-uppercase">{data.text}</h3>
            <p className="text-center mt-30">
              <SliderButtons buttons={data.buttons} />
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-hero-module" style={{ height: size.height + "px" }}>
        <div className="video-container">
          <div className="filter"></div>
          <video autoPlay loop className="fillWidth"
            src={require("../../assets/images/" + data.video)}
            type="video/mp4"
          />
          <div className="poster hidden">
            <img
              src={require("../../assets/images/" + data.image)}
              alt="video-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
