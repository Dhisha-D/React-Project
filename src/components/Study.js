import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Study(){
  return (
    <>
    <h1>Indoor Study Room Renovation ideas</h1>
        <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/30114042/EI_33.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Abstract Themed Study Room Interior Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Your study space should be designed to fit your lifestyle and demands. A desk and chair are the key components of any study room design, and they may make or break you or your child’s work environment. On one hand, the work surface/desk must be sturdy, steady and at the proper height. The chair, on the other hand, must be supportive, comfy and, of course, attractive. That is why custom ergonomic furniture is such a great choice. 
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
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/30114343/Livingroom_06.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dedicated Small Study Room Design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If you have a small home but still want a quiet study room, then these small study room ideas will definitely help you. A wall-mounted desk and open shelving will help you maximise your space, just like it did for our Delhi-based client, Grishma. A slim workstation against a wall takes up less space and provides a clean, tidy surface on which you can place your laptop. These straightforward design concepts will yield the best outcomes. You can set up a study with everything you need and work in a stress-free environment.
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
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/30114521/23.jpg"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Luxe Study Room Design With Bright Pops of Colour
          </Typography>
          <Typography variant="body2" color="text.secondary">
          One of the most effective strategies to foster a healthy work atmosphere is to keep the study area neat and tidy. Clutter not only clogs up a space and makes it less useful, but it also distracts the mind. Thus, sticking to simple study room design ideas is a good option. In fact, sleek and basic study room decoration can enhance the space much more than bulky or ostentatious alternatives.
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
          image="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/30120915/Study-Room_02.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          A Study Room With Plants
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Not only do you need to customise your living room to your needs, but also your study space. Find methods to personalise your study room design with items like an area rug, whiteboard, calendars, wall décor and a storage and organisation design plan. Make your study room a reflection of your personality by going all out with the design. To help you move forward with zeal in your work, create vision boards, artwork and inspirational phrases.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}