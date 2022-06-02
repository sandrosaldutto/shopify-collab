import React from "react";
import "./Collaborators.scss";
import artists from "../../data/artists.json";
import Avatar1 from "../../assets/avatars/avatar1.png";
import Avatar2 from "../../assets/avatars/avatar2.png";
import Avatar3 from "../../assets/avatars/avatar3.png";
import Avatar4 from "../../assets/avatars/avatar4.png";

import artwork1 from "../../assets/artworks/artwork11.png";
import artwork2 from "../../assets/artworks/artwork12.png";
import artwork3 from "../../assets/artworks/artwork21.png";
import artwork4 from "../../assets/artworks/artwork22.png";
import artwork5 from "../../assets/artworks/artwork31.png";
import artwork6 from "../../assets/artworks/artwork32.png";
import artwork7 from "../../assets/artworks/artwork41.png";
import artwork8 from "../../assets/artworks/artwork42.png";

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];
const artworks = [
  artwork1,
  artwork2,
  artwork3,
  artwork4,
  artwork5,
  artwork6,
  artwork7,
  artwork8,
];

function Collaborators() {
  return (
    <section className="collaborators">
      <h1 className="collaborators__header">
        Choose a Collaborator to Work With
      </h1>
      <div className="collaborators__content">
        {artists.map((artist, index) => {
          return (
            <div
              key={index}
              className={
                index > 1
                  ? "collaborators__artist collaborators__artist--next"
                  : "collaborators__artist"
              }
            >
              <div className="collaborators__section collaborators__section--left collaborators__section--top collaborators__section--avatar">
                <img
                  src={avatars[artist.avatar - 1]}
                  className="collaborators__avatar"
                  alt="avatar logo"
                />

                <strong>
                  <p className="collaborators__avatar-description">{`${artist.name}, ${artist.title}`}</p>
                </strong>
              </div>
              <div className="collaborators__section collaborators__section--top">
                <p className="collaborators__avatar-description">
                  {artist.name}
                </p>

                <p className="collaborators__avatar-description">
                  {artist.description}
                </p>
                <button className="collaborators__button">Collaborate</button>
              </div>
              <div className="collaborators__section collaborators__section--left">
                <img
                  src={artworks[artist.artwork[0].id]}
                  className="collaborators__artwork collaborators__artwork--left"
                  alt="artwork logo"
                />
                <p className="collaborators__avatar-description">
                  {artist.artwork[0].name}
                </p>
              </div>
              <div className="collaborators__section">
                <img
                  src={artworks[artist.artwork[1].id]}
                  className="collaborators__artwork"
                  alt="artwork logo"
                />
                <p className="collaborators__avatar-description">
                  {artist.artwork[1].name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button className="button-container__button">View More</button>
      </div>
    </section>
  );
}

export default Collaborators;
