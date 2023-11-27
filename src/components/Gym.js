import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Gym() {
  return (
    <>
    <h1>Indoor Gym Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://hips.hearstapps.com/hmg-prod/images/meditation-room-ideas-mia-yoga-studio-moscow-by-crosby-studios-yellowtrace-04-1500x2000-copy-1642099990.jpg?crop=1.00xw:0.939xh;0,0.0140xh&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Color Coordinate
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </CardContent>
      </CardActionArea>Home gyms can often feel like a hodgepodge of unsightly equipment and functional storage. To make the space feel more intentional, match the colors of your decor to your workout equipment.
    </Card>
    <br></br>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://hips.hearstapps.com/hmg-prod/images/10-ken-s-dreamhouse-airbnb-gym-credit-joyce-lee-649ca5d3df2bb.jpg?crop=0.5333333333333333xw:1xh;center,top&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Move It Outdoors
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If your climate allows, move your weight rack outside for a luxury gym vibe. This is not only a great way to get in your strength training, but it also lets you get a little sunshine and enjoy your outdoor space.
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
          image="https://hips.hearstapps.com/hmg-prod/images/home-gym-ideas-0e346136fe38fac1ea588c711253d106-1550247551.jpg?crop=1xw:1xh;center,top&resize=980:*"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          To minimize distractions while you swim your laps, pare down the design elements. This brutalist take on an indoor swimming pool is the perfect setting for a centering morning swim.
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
          image="https://hips.hearstapps.com/hmg-prod/images/hbx100121wholehome-003-64b6af5d8c3e3.jpg?crop=1.00xw:0.956xh;0,0.0247xh&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Choose Soothing Colors
          </Typography>
          <Typography variant="body2" color="text.secondary">
          There's nothing worse than going to the gym for a relaxing workout only to be greeted by abrasive colors and neon signs. At home, opt for neutrals or tones that calm you to provide a restful place to focus on yourself.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}