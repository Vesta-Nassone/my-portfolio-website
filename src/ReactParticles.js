import React from "react";
import Particles  from "react-particles-js";
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
    <Particles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "red",
            },
          },
          
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 0,
              sync: true,
            },
          },
          line_linked:{
            enable:true,
            distance:100,
            color:"#000",
            width:2
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
          }
        },
        interactivity:{
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
          modes:{
            repulse:{
              distance: 50,
              duration: 0.4
            }
          }
        }
      }}
    />
  );
};

export default ReactParticles;
