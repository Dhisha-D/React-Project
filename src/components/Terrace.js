import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Terrace() {
  return (
    <>
    <h1>Terrace Area Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lunchbox.imgix.net/featured/surry-hills-house-benn-penna-architects/surry-hills-house-benn-penna-architects-35e7d15a.jpg?ixlib=php-3.3.0&s=58c9ef20d5087f7cf0329c7473c36ddb"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Use the whole block
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In the past, the lean-to was the gatekeeper to the backyard and, like any good gatekeeper, it made it almost impossible to get out there. These days, we prefer to tuck the services in the middle of the house so the front part of the terrace becomes the bedrooms, while the rear can be an open-plan living space which flows into the backyard. This makes use of the entire block and makes the home feel as large as the site.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lunchbox.imgix.net/featured/moor-house/moor-street-residence-andrew-maynard-architects-15.jpg?ixlib=php-3.3.0&s=9064554ad328c232e1dfac7b9270d6b0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Doors, doors, doors, doors
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We love a good door. And I don't mean a boring old semi-solid swing door. No. A glass sliding door or even a funky bi-fold is the way to create a seamless transition from your living area into the backyard. This is the way to make your terrace feel as large as possible, while also maximising its functionality, taking full advantage of the block as per rule #1.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lunchbox.imgix.net/featured/long-courtyard-house/long-courtyard-house-4.jpg?ixlib=php-3.3.0&s=04686d2f067270ac65bf7923d2a2bd2c"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Reorienting
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If the rear of your terrace faces any direction other than north, you can use your reno as an opportunity to reorient your home towards the sun.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://lunchbox.imgix.net/featured/my-house-the-mental-health-house-austin-maynard-architects-melbourne/my-house-the-mental-health-house-austin-maynard-architects-melbourne-75f3faeb.jpg?ixlib=php-3.3.0&s=20dc63c63c9219e5c172435eafe968fb"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Rethinking Light
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Failing that, you can rethink the way you bring light into the home. Light doesn't have to come from a window. That's so last century. To break out of your dark, dingy terrace, think about all the opportunities to grab light.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}