import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Kids() {
  return (
    <>
    <h1>Kids Bedroom Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/08/22115049/pink-kids-room-design-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pretty in Pink for Kids That Love Colour
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Does your child have a favourite colour? How about dousing the kids’ room design in a subtle shade of pink to show it off?
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
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/08/21161709/blue-and-gold-kids-room-design.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Spice Up a Plain Room With an Accent Colour
          </Typography>
          <Typography variant="body2" color="text.secondary">
          So, have you decided to keep your kids’ room design subtle but don’t want it to look too plain? Looks like you’re in need of some kids’ room ideas that can bring in some fun. Go for an accent wall to add a splash of colour to neutral kids’ room interiors.
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
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/08/22115239/purple-geometric-wall-art-with-clouds-1.jpg"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pink Meets Purple in This Cosy Kids’ Bedroom
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If you thought geometric wall patterns are too much for a kids’ room interior design, let this room be your guide. All you need are complementary colours like pink and purple to make a statement in your kids’ room design!
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
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/08/21162101/shooting-stars-wallpaper-for-kids-room.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Kids’ Room Ideas Featuring Confetti-Style Walls
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Confetti helps us celebrate and mark joyous occasions with some fun and colour. So, it’s only fitting to include it as a part of your kids’ room design. However, actual confetti can get messy.

Instead, you can recreate the look with any pattern in different colours for your walls. Take these shooting star designs as an example!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}