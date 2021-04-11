import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.8"
  },
}));

const ReactParticles = () => {
  const classes = useStyles();

  return (
    <div
    style={{
      width:"100%",
      height: "100%"
    }}>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "white",
              },
            },

            size: {
              value: 3,
              random: false,
              anim: {
                enable: false,
                speed: 5,
                size_min: 0,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#000",
              width: 2
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                opacity_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: true,
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                "enable": true,
                "mode": "repulse"
              },
              onclick: {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            modes: {
              repulse: {
                distance: 50,
                duration: 0.4
              }
            }
          }
        }}
      />
    </div>
  );
};

export default ReactParticles;
