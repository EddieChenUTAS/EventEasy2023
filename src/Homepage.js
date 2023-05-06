import hobartImage from "./images/HobartBackground.jpg";

export default function Homepage() {
  return (
    <div class="main">
      <div class="top-text">
        <h1>Event Easy</h1>
        <p>Where amazing events get started</p>
      </div>

      <img src={hobartImage} />

      <section id="search-container">
        <div id="div1">
          <div id="div1-1">
            <input type="text" placeholder="Search for Events, Venues" id="text-input"></input>
            <input type="submit" value="Search" id="search-btn"></input>
          </div>
        </div>
        <div id="div2">
          <div>
            <p>Location</p>
          </div>
          <div>
            <p>Category</p>
          </div>
          <div>
            <p>Date</p>
            <input type="date" id="date-picker" placeholder="Select Date"></input>
          </div>
        </div>
      </section>
    </div>
  );
}
