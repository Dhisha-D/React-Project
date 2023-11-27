import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Garage() {
  return (
    <>
    <h1>Garage Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-iflnp.nitrocdn.com/SRvvHPiVmGhisFIFGXjkMXKxooeNTsRZ/assets/images/optimized/rev-a9233d6/garage-designs.com/wp-content/uploads/2021/02/floorguard.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Make the Most of Space
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Some of the best garage upgrades you can make include smart storage ideas to make the best use of even the smallest amount of space. From tool racks that save space by using the walls to clever organizational tricks, so you never lose a tool again, you can revolutionize your space by letting an expert switch up the layout.
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
          image="https://cdn-iflnp.nitrocdn.com/SRvvHPiVmGhisFIFGXjkMXKxooeNTsRZ/assets/images/optimized/rev-a9233d6/garage-designs.com/wp-content/uploads/2020/10/Car-Lift.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Show Off with a Car Lift
          </Typography>
          <Typography variant="body2" color="text.secondary">
          When you finally bring it home down the line, you don’t want it to be sitting out in the street or be constantly shuffling your cars around. A car lift gives you the freedom to expand your collection without worrying about space.
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
          image="https://cdn-iflnp.nitrocdn.com/SRvvHPiVmGhisFIFGXjkMXKxooeNTsRZ/assets/images/optimized/rev-a9233d6/garage-designs.com/wp-content/uploads/2018/05/GarageDesign-Deals-AfterShots-9-e1613758638113.jpg"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Protect Your Cars
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Garages are often situated at low points on a property and can be particularly susceptible to flooding. If you’re investing time and money into redoing your garage, consider any extra protection you can add to keep your vehicles safe and dry. If there is, this is a good time to do it.
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
          image="https://cdn-iflnp.nitrocdn.com/SRvvHPiVmGhisFIFGXjkMXKxooeNTsRZ/assets/images/optimized/rev-a9233d6/garage-designs.com/wp-content/uploads/2021/02/Racedeck-Garage-Design.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Let Your Personality Shine
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You’ve worked hard to build a space and a collection that you love, so treat yourself to whatever fantasy garage you’ve always dreamed of. No idea is too big when you put your mind to it, and any good garage designer will be able to work with you to turn your dream into a practical reality.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}