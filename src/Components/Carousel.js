import { useEffect, useRef } from "react";
import skip from "../Images/Refresh.svg";

const Carousel = () => {
  const factDisplayRef = useRef(null);
  const skipButtonRef = useRef(null);
  let funFacts = [
    "I'm also an expert pancake maker and connoisseur 🥞",
    "I built my first (horrible) website at age 13 for my dad's business 🖥",
    "I love writing and reading about motivation psychology 🤓",
    "I was a fitness coach for 10 years before I got into web development 🏋️‍♂️",
    "I love public speaking. I've done improv theater and Toastmasters 📣",
    "I once did a chin-up with 115lbs strapped to me <a href='https://youtu.be/pCaaZaaPMnU'>(video)</a> 💪",
    "I absolutely love dogs but I'll probably never own one 🐶",
  ];
  let counter = 0;
  let t;

  const funFactsCarousel = (fact) => {
    let factDisplay = document.querySelector(".fact");
    factDisplay.innerHTML = fact;
  };

  const factsLoop = () => {
    if (counter > funFacts.length - 1) {
      counter = 0;
    }
    let fact = funFacts[counter];
    funFactsCarousel(fact);
    counter++;
    t = setTimeout(function () {
      factsLoop();
    }, 5500);
  };

  const skipFact = async () => {
    const skipButton = document.querySelector(".skip");
    skipButton.classList.add("rotate");
    setTimeout(() => {
      skipButton.classList.remove("rotate");
    }, 420);
    clearTimeout(t);
    factsLoop();
  };

  useEffect(() => {
    factsLoop();
    return function cleanup() {
      clearTimeout(t);
    };
  });

  return (
    <div className="fun-facts-carousel">
      <img
        className="skip"
        src={skip}
        alt="skip fact"
        /* onClick={skipFact} */
        ref={skipButtonRef}
      />
      <p className="fact" ref={factDisplayRef}></p>
    </div>
  );
};

export default Carousel;
