import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Patio() {
  return (
    <>
    <h1>Outdoor Patio Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-05-15-at-10-15-12-am-64623eb21d2cc.png?crop=1xw:1xh;center,top&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Selective Seating
          </Typography>
          <Typography variant="body2" color="text.secondary">
          For maximum functionality and comfort, choose multiple different kinds of seating so that everyone can have their seat of choice. Fighting over the favorite corner chair will be a thing of the past.
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
          image="https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-05-15-at-10-15-20-am-64623eb575763.png?crop=1xw:1xh;center,top&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Color Coordinated
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A large patio can feel overwhelming to decorate intentionally. For a cohesive feel, opt for one color (or pattern) of upholstery fabric.
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
          image="https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-05-15-at-10-15-27-am-64623eb2cbe11.png?crop=1xw:1xh;center,top&resize=980:*"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Prime View
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If you have a sprawling and beautiful view, odd are you want to look at it all the time. Situate your patio furniture to have your most comfortable pieces face nature.
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
          image="https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-05-15-at-10-15-34-am-64623eb5f16b3.png?crop=1xw:1xh;center,top&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Secret Garden
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Rather than feeling cramped and claustrophobic, lean into the tall walls of a garden-level patio to create a cozy and private outdoor oasis.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}