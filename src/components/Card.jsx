import React from "react";
export default function Card(props) {
  return (
    //image, location, google maps link title, start/end date, description
    <section className="cards">
      <section className="card--image-container" style={{backgroundImage:`url(${props.item.img})`}}>
      </section>
      <section className="card--content">
        <div className="card--top">
          <span className="card--location">
            <i class="fa-solid fa-location-dot"></i> {props.item.location.toUpperCase()}
          </span>
          <a
            href={props.item.mapsLink}
            className="card--maplink"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <span className="card--date">{props.item.date.start} - {props.item.date.end}</span>
        <p className="card--body">
          {props.item.description}
        </p>
      </section>
    </section>
  );
}
