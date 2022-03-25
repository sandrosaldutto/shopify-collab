import React from "react";
import "./Categories.scss";
import headerImage from "../../assets/artworks/pana.png";
import FineArts from "../../assets/artworks/fineart.png";
import Sculpture from "../../assets/artworks/sculpture.png";
import Ceramics from "../../assets/artworks/ceramics.png";
import Photography from "../../assets/artworks/photography.png";
import Fabrics from "../../assets/artworks/fabrics.png";
import Furniture from "../../assets/artworks/furniture.png";
import Printmaking from "../../assets/artworks/printmaking.png";
import Mosaics from "../../assets/artworks/mosaics.png";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="categories">
      <section className="categories__hero">
        <div className="categories__left">
          <p className="categories__hero-text">
            Have a product to sell but aren't sure how?
          </p>
          <p className="categories__hero-text-bold">
            Consider{" "}
            <span className="categories__hero-text-bold--green">
              partnerships
            </span>{" "}
            with Shopify
          </p>
          <button className="categories__learn-more">Learn More</button>
        </div>
        <div className="categories__right">
          <img src={headerImage} alt="People at desk"></img>
        </div>
      </section>
      <section className="categories__banner">
        <p className="categories__banner-text">
          Partnerships can help a business start or grow.
        </p>
        <p className="categories__banner-text">
          We know that running a business on your own can be tough.
        </p>
        <p className="categories__banner-text-bottom">
          Check out our{" "}
          <span className="categories__banner-text-bottom--bold">
            features section
          </span>{" "}
          where we show who you can partner up with based on the{" "}
          <span className="categories__banner-text-bottom--bold">
            business venture.
          </span>
        </p>
      </section>
      <div className="categories__header">
        <h2 className="categories__title">Business Venture Categories</h2>
      </div>
      <div className="categories__gallery">
        <div className="categories__row">
            <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
              <img className="categories__img" src={FineArts} alt="fine art"></img>
              <p className="categories__label">Fine Arts</p>
          </div>
            </Link>
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Sculpture} alt="a sculpture"></img>
            <p className="categories__label">Sculpture</p>
          </div>
            </Link>
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Ceramics} alt="a ceramic bowl"></img>
            <p className="categories__label">Ceramics</p>
          </div>
            </Link>
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Photography} alt="photograph of a woman"></img>
            <p className="categories__label">Photography</p>
          </div>
            </Link>
        </div>
        <div className="categories__row">
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Fabrics} alt="fabric"></img>
            <p className="categories__label">Fabrics</p>
          </div>
            </Link>
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Furniture} alt="a chair"></img>
            <p className="categories__label">Furniture</p>
          </div>
            </Link>
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Printmaking} alt="printmaking"></img>
            <p className="categories__label">Printmaking</p>
          </div>
            </Link>
          <Link className="categories__link" to="/Collaborators">
          <div className="categories__card">
            <img className="categories__img" src={Mosaics} alt="mosaic artwork the man with alt."></img>
            <p className="categories__label">Mosaics</p>
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
