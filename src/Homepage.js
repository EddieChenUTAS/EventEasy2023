import hobartImage from "./images/HobartBackground.jpg";

export default function Homepage() {
  return (
    <div class="main">
      <link rel="stylesheet" href="https://unicorns.iconscout.com/release/v4.0.0/css/line.css" />
      <div class="top-text">
        <h1>Event Easy</h1>
        <p>Where amazing events get started</p>
      </div>
      <div id="imagebox">
        <img src={hobartImage} id ="hobart-image"/>
        <section id="search-container">
          <div id="div1">
            <div id="div1-1">
              <input type="text" placeholder="Search for Events, Venues" id="text-input"></input>
              <input type="submit" value="Search" id="search-btn"></input>
            </div>
          </div>
          <div id="div2">
            <div id="divcell">
              <p>Location</p>
              <select id="location-select">
                <option value="" disabled selected>
                  Select Location
                </option>
                <option value="0">Hobart</option>
                <option value="1">Launceston</option>
              </select>
            </div>
            <div id="divcell">
              <p>Category</p>
              <select id="category-select">
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="0">Birthdat & Private</option>
                <option value="1">Corporate Functions</option>
                <option value="2">Weddings & Engagements</option>
              </select>
            </div>
            <div id="divcell">
              <p>Date</p>
              <input type="date" id="date-picker" placeholder="Select Date"></input>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
