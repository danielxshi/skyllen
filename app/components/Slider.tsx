"use client"
// import Highway from "@dogstudio/highway";
import gsap from "gsap";
import { Power2 } from "gsap/gsap-core";

class Slide extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo(0, 0);

    const slider = document.querySelector(".slider");
    const hero = document.querySelector(".hero");
    const headline = document.querySelector(".headline");

    const tl = new gsap.timeline();

    tl.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" })
      .fromTo(
        to,
        0.5,
        { height: "2vh" },
        {
          height: "90vh",
          top: "10%",
          onComplete: function () {
            from.remove(); // remove the index.html in the DOM
            done();
          }
        }
      )
      // page elements animations
      .fromTo(
        hero,
        1,
        { height: "0%" },
        { height: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        hero,
        1.2,
        { width: "100%" },
        { width: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
      )
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.5"
      );
  }
  out({ from, done }) {
    gsap.fromTo(
      from,
      0.5,
      { opacity: 1 },
      {
        opacity: 0,
        onComplete: done
      }
    );
    done();
  }
}

export default Slide;
