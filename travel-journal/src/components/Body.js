function Body(props) {
  return (
    <article className="journal-entry">
        <div className="main-image-container">
            <img src={props.item.img.src} alt={props.item.img.alt} className="main-image" />
        </div>
        <div className="info-container">
            <img src="./images/location.png" alt="location-icon" className="marker" />
            <span className="contry">{props.item.country}</span>
            <a href={props.item.googleMapsLink} className="google-maps-link" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            <h2 className="entry-title">{props.item.title}</h2>
            <p className="trip-dates">{props.item.dates}</p>
            <p className="entry-text">{props.item.text}</p>
        </div>
    
    </article>
  );
}

export default Body;
