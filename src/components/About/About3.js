import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium image "
            src="https://media.giphy.com/media/YnBVHwybZRU3e9c0hr/giphy.gif"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui aligned header"> Home Decor & Collectables</h2>
          <h3 className="ui aligned header">
          We have three co-op antique stands in the area: Stubborn Dutchman, Olde Factory, and Schoolhouse Antiques. Check out the items for sale in our <a id="shopNow"href="">Online Store »</a>{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;