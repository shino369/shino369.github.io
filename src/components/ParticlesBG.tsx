"use client";

import { useAppSelector } from "@/redux/store";
import {
  Ref,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import ToggleButton from "./ToggleButton";

const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await particlesInit(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // will be called when loaded
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      if (!particleActive) {
        setTimeout(() => {
          particleRef.current?.pause();
        }, 1000);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { particleInteractive, particleActive } = useAppSelector(
    (commonState) => commonState.common
  );

  const particleRef = useRef<Container | null>(null);

  useEffect(() => {
    // console.log(particleActive);
    particleActive ? particleRef.current?.play() : particleRef.current?.pause();
  }, [particleActive]);

  return (
    init && (
      <Particles
        className="-z-10 fixed top-0 left-0 max-height-dvh opacity-50"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 40,
          interactivity: particleInteractive
            ? {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              }
            : {},
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticlesBG;
