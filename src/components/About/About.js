import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://media.giphy.com/media/f8tYVBaz1r4Qq1AGCr/giphy.gif"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui aligned header"> About Us</h2>
          {/* <h3 className="ui aligned header">Family owned since 2016. </h3> */}
          <h3 className="ui aligned header">
            Hi, we're Vintastic Company! We're a local vintage finds business located near Hershey, PA. Our location provides us with unique access to a region that includes Amish Country, the Capital of Pennsylvania, and Rural Americana. We mine flea markets, auctions, yard sales, and estate sales for unique items to sell to you!{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;