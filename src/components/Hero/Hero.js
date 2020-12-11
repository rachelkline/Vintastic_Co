import React from "react";
import About from "../About/About";
import About2 from "../About/About2";
import About3 from "../About/About3";
import About4 from "../About/About4";
// import "semantic-ui-css/semantic.min.css";
import "./Hero.css";

const Hero = () => (
    <>
    <a href="/products"><img src="https://via.placeholder.com/1200x500.png?text=Placeholder+Image"/></a>
    <section>
      {/* <div className="ui jumbotron">
        <h3>WELCOME</h3>
      </div> */}
    </section>
    <section className="img-1 ">
      <h1>Mid Century Modern</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About />
      </div>
    </section>

    <section className="img-2">
      <h1>USA Pottery</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About2 />
      </div>
    </section>

    <section className="img-3">
      <h1>Kitchenware</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About3 />
      </div>
    </section>

    <section className="img-4">
      <h1>Depression and <br/>Carnival Glass</h1>
    </section>

    <section>
      <div className="ui jumbotron">
        <About4 />
      </div>
    </section>
    {/* <section className="img-5">
      <h1>Vintage Clothing<br /> and Accessories</h1>
    </section> */}
  </>
);

export default Hero;