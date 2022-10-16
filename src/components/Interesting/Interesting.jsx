import React from "react";
import dyunyPustynya from "../../assets/img/dyunyPustynya.jpg";
import lightning from "../../assets/img/lightning.jpg";
import clouds from "../../assets/img/clouds.jpg";

const Interesting = () => (
  <div className="InterestingInfo">
    <h1>Interesting Weather Facts</h1>
    <img src={dyunyPustynya} className="imgDesertAtakama" alt="" />

    <div className="InfoFacts">
      <img src={lightning} className="imgLightning" alt="" />
      <p>– Lightning strikes 8.6 million times per day.</p>
      <p>
        – Raindrops can be the size of a housefly and fall at more than 30kmph.
      </p>
      <p>
        – The coldest temperature ever officially recorded was -89.2°C. Brrrr!
      </p>
      <p>
        – In Antarctica, snow can fall so hard you can’t see your hand in front
        of your face.
      </p>
      <p>
        – Cats and dogs have been known to sense when a tornado is approaching.
      </p>
      <p>– About 2,000 thunderstorms rain down on Earth every minute.</p>
      <p>– No two snowflakes are exactly alike.</p>
      <p>
        – A molecule of water will stay in the Earth’s atmosphere for an average
        duration of 10-12 days
      </p>
    </div>

    <div>
      <img src={clouds} className="imgClouds" alt="" />
      <p>– Every second around 100 lightning bolts strike the Earth.</p>
      <p>– It takes about 2 minutes for a raindrop to reach the ground.</p>
      <p>
        – Other planets in our solar system also have lightning, including gas
        giants Jupiter and Saturn. There are also bright flashes in dust storms
        on Mars, which some scientists believe to be evidence of lightning.
      </p>
    </div>
  </div>
);

export default Interesting;
