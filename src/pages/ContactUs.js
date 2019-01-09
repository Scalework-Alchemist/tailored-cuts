import React from "react";
import Layout from "../components/layout/layout";

export default () => (
  <Layout >
    <h1>Hey come and drop us a line</h1>
    <div className="contact_us_container">
      <div className="this_is_our_contact_info">
        <div className="phone_number"></div>
      </div>
      <form action="">
        <input type="text" placeholder="name"/>
      </form>
    </div>
  </Layout>
);

