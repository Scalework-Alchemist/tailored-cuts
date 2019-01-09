import React from 'react'
import Gmaps from "../gMaps/Gmap"

 const BookNow = ()=>(
  <div className="pitch_container">
    <h1>Full Service Barber Exprerience</h1>
    <h3>Be The Best You</h3>

    <div className="full_service_container">
      <div className="pitch_block">
        <span>
          From the moment you walk through our doors, the stress of your day
          begins to melt away. Your comfort and satisfaction is our top
          priority. We are a full service salon, offering a number of services
          to make you feel and look your best! All of our services are performed
          by trained, skilled, and experienced professionals.
        </span>
        <div className="haircut_service_wall">
          <div className="service_brick">
            <h2>Haircut</h2>
            <font>Mens Haircut $25</font>
            <br />
            <span>this cut includes this basic things</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

 const ContactUs =  (
  <div>
    <h1>Hey come and drop us a line</h1>
    <p>contact form</p>
  </div>
);

const Location = (
  <div>
    <h1>Location</h1>
    <p>This is where we are at</p>
    <div className="map_container">
      <Gmaps />
    </div>
  </div>
);

const OnlineStore = (
  <div>
    <h1>Online Store</h1>
    <p>Under Construction</p>
    <p>stay updated on our progress!</p>
    <div>
      <form action="">
        <input type="text" />
      </form>
    </div>
  </div>
);

export default {OnlineStore, Location, BookNow, ContactUs}
