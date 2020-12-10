import React from "react";
import "semantic-ui-css/semantic.min.css";

const About = () => (
  <>
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <img
            class="ui medium circular image "
            src="https://media.giphy.com/media/3o7TKVL5zJmdjNX1EQ/giphy.gif"
          ></img>
        </div>
        <div class="column">
          <h2 className="ui aligned header">Shop Local!</h2>
          <h3 className="ui aligned header">
          We've been picking for a long time. We buy and sell almost anything antique or vintage, but our specialties include:
            <ul>
              <li>Mid Century Modern Decor and Furniture</li>
              <li>USA Pottery</li>
              <li>Kitchenware(Pyrex, Fire King, Hazel Atlas)</li>
              <li>Depression and Carnival Glass</li>
              <li>Vintage Clothing, Handbags, and Accessories</li>
              </ul>{" "}
          </h3>
        </div>
      </div>
    </div>
  </>
);
export default About;