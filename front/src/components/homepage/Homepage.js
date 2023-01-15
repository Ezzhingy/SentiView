import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";

export function Homepage() {
  const goAnimate = () => {
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");
    fadeDown.forEach((element) => {
      element.classList.add("animate__fadeOutDown");
    });
    fadeUp.classList.add("animate__backOutUp");

    const infoPage = document.getElementById("info-page");
    infoPage.classList.remove("hidden");
    infoPage.classList.add("block");
  };

  const hide = () => {document.getElementById("home-container").classList.add("hide")};

  return (
    <div className="relative flex flex-col items-center">
      <div className="text-center flex flex-col items-center relative pt-8">
        <div className="flex flex-col items-center">
          <img
            className="animate__animated fade-up object-contain"
            src={rocket}
            alt="rocket ship"
            draggable="false"
          ></img>
          <img
            className="animate__animated fade-down object-contain"
            src={smoke}
            alt="smoke"
            draggable="false"
          ></img>
          <img
            className="object-contain absolute top-1/2"
            src={stars}
            alt="stars"
            draggable="false"
          ></img>
        </div>
        <div className="animate__animated fade-down text-white text-4xl font-bold absolute top-1/2">
          SentiMate
        </div>
      </div>
      <div>
        <input
          type="file"
          className="animate__animated fade-down text-white mt-[35px]"
        ></input>
      </div>
      <div>
        <button
          onMouseDown={goAnimate}
          onAnimationEnd={hide}
          className="animate__animated fade-down text-white border-3 p-5 mt-5 font-bold transition-colors duration-150 border border-blue rounded-lg focus:shadow-outline hover:bg-blueBg"
        >
          Launch!
        </button>
      </div>
    </div>
  );
}