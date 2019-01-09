import React, { Component } from 'react'
import Layout from "../components/layout/layout";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const services = require("../data/serviceList.json");

export default class BookNow extends Component{
 
render(){
  return(
    <Layout>
    <div className="pitch_container">
      <h1>Full Service Barber Exprerience</h1>
      <h3>Be The Best You</h3>

      <div className="full_service_container">
        <div className="pitch_block">
          <span>
            From the moment you walk through our doors, the stress of your day
            begins to melt away. Your comfort and satisfaction is our top
            priority. We are a full service salon, offering a number of services
            to make you feel and look your best! All of our services are
            performed by trained, skilled, and experienced professionals.
          </span>
          <div className="haircut_service_wall" />
          {/* {
            services.haircuts.map((haircut) => <li>haircut.basic</li>)
          } */}
          <div onClick={ () => window.location = 'https://google.com'} >hello im google </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
}

// export default () => (
//   <Layout>
//     <div className="pitch_container">
//       <h1>Full Service Barber Exprerience</h1>
//       <h3>Be The Best You</h3>

//       <div className="full_service_container">
//         <div className="pitch_block">
//           <span>
//             From the moment you walk through our doors, the stress of your day
//             begins to melt away. Your comfort and satisfaction is our top
//             priority. We are a full service salon, offering a number of services
//             to make you feel and look your best! All of our services are
//             performed by trained, skilled, and experienced professionals.
//           </span>
//           <div className="haircut_service_wall" />
//           {/* {
//             services.haircuts.map((haircut) => <li>haircut.basic</li>)
//           } */}
          
//         </div>
//       </div>
//     </div>
//   </Layout>
// );

{
  /* <Grid
  container
  spacing={16}
  style={{ padding: 24 }}
  direction="row"
  justify="center"
  alignItems="center"
>
  <Card>
    <CardContent>
      <CardMedia style={{ height: 0, paddingTop: "50%" }} image="" title="" />
      <Typography gutterBottom variant="headline" component="h2">
        Tradional Gentlemen's Cut
      </Typography>
      <Typography component="p">
        <span>
          Stay Sharp from fit to finish, any basic cut ends with a straight
          razor lineup.
        </span>
        <br />
        <br />
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary" />
      <Button size="small" color="primary" href="">
        Learn More
      </Button>
    </CardActions>
  </Card>
</Grid>; */
}
