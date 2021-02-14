import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.8"
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
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
            image:{
              src: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67"
            },
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
            enable:"true",
            distance:"100",
            color:"#000",
            width:"2"
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
              distance: "50",
              duration: "0.4"
            }
          }
        }
      }}
    />
  );
};

export default Particles;
