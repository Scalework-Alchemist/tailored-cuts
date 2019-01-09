import React from "react";
import Layout from "../components/layout/layout";
import Gmaps from '../components/gMaps/Gmap'


export default () => (
  <Layout>
    <h1>Location</h1>
    <p>This is where we are at</p>
    <div className="map_container">
        <Gmaps/>
    </div>
  </Layout>
);
