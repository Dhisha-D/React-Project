import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Pool() {
  return (
    <>
    <h1>Swimming Pool Renovation Ideas</h1>
        <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.thespruce.com/thmb/9Y2ZIegM0UnoHK-jDrsqEiHvvm4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BenderAssoc-5a90ad2543a1030036ad408b.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Embrace Tropical Appeal
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A historic, circa-1850 home was restored and received a few new additions, like a pool house and carport. Bender & Associates Architects designed a pool that is appropriate for the period and design of the house, enhancing rather than overpowering the property. Lush tropical landscaping makes this a home that looks like an island retreat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.thespruce.com/thmb/lICqL8XMnFgYXQ2lGy-DJtaOBwE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ibarrarosano.pontatoc2-5a90dbe9a9d4f90036129390.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Test Out Desert Hardscaping
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A rectangular 33-by-14-foot pool comes alive with landscaping designed by Ibarra Rosano, including giant concrete balls by Holler & Saunders of Nogales, Arizona. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.thespruce.com/thmb/TqkcgEXwL4HlMFtGcMhVMrcXXLw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MurrayLegge-5a90dc5ac06471003779dd07.jpg"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Think Eco-Friendly
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A modern backyard by Murray Legge Architecture of Austin, Texas, includes a pool house with a roof featuring grasses, sedges, and wildflowers native to Central Texas. Mortarless cut Leuders limestone on steel was used for the pool decking, while Bisazza mosaic glass tile covers the pool interior. Stools inside the pool were formed with tubes and gunite.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.thespruce.com/thmb/7w9JyP6wvZ7Sj19xRCFqHtHMYls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LivingwithLolo_PhotybyLifeCreated-d8df226659af4d279d525d0578bf185c.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Build a Pool Patio
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This spacious pool patio from Living With Lolo includes a lounge area and an adjacent dining and grill space for outdoor dining that is separate from the large backyard.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}