import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://media.giphy.com/media/fOvKNgHUIChPi/giphy.gif"
          ></img>
        </div>
        <div class="column">
          <br />
          <h2 className="ui left aligned header"> Get in Touch with Vintastic Co.</h2>
          <h4 id="email">
              <strong>Contact: </strong>vintasticco@email.com
              <br/>
              <br />
          <Button
        href="https://www.instagram.com/vintasticco/"
        className="ui instagram button"
        basic
        ui
  
        color="purple"
        // data-inverted="center"
        // data-tooltip="Follow Us"
        // data-position="top center"
      >
        <i className="instagram icon"></i>
        Instagram
      </Button>
      <Button
        href="https://www.facebook.com/VintasticCo/?hc_ref=ARTkcba-uDI90E2YS5dsAeDyrHbeBV7qM74hUF_ezLg9eXzMOGFOwjSyW4fR6cpcrd8&fref=nf&__xts__[0]=68.ARDfdTvi4Rs_4joEaJuy9fJk2H8KWu2WYuNqYGzhiLBCjDtfb2S5bC8yJvv1l9rmnJYE7KwzgdAxXovs3y3ILgZmwqwhCd_dA7bB7BaEDQxDavibD5V-Tfe6pV9rPKswocrmNqMhv4-0b0HNX69Wpq9RkrttYv3ZQ8BWOIg-XgWJ1TNIwDX6awW7zM2CrXJb7e0fG9ACeP2rDc9_wfbOGcuIPW5wi4q_0Pj0_dvsOdcwc0_TIRGr8kyubcx6ZHCXFShpkIoBEszMZ7IMaXW5G1lGT7KQTbh1gfC6-Jd96_IS2YTUhYuvOQlSEZku9wzoQCBftmr6WsZJgeLG7fTnpKU&__tn__=kC-R"
        className="ui instagram button"
        basic
        ui
  
        color="blue"
        data-inverted="center"
        // data-tooltip="Follow Us"
        data-position="top center"
      >
        <i className="facebook icon"></i>
        Facebook
      </Button>
      <Button
        href="https://www.etsy.com/shop/VintasticCo"
        className="ui instagram button"
        basic
        ui
  
        color="orange"
        data-inverted="center"
        // data-tooltip="Follow Us"
        data-position="top center"
      >
        <i className="etsy icon"></i>
        Etsy
      </Button>
          </h4>{" "}
        </div>
      </div>
    </div>
  </>
);
export default About;