import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function LivingHall() {
  return (
    <>
    <h1>Living Hall Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://hips.hearstapps.com/hmg-prod/images/living-room-colors-white-paint-1663949992-6481fc5ad0bc5.jpeg?crop=0.936xw:1.00xh;0.0349xw,0&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Play With Neutrals
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Textures are the secret to giving your soft white living room a refresh. Take it from designer Sharon Rembaum, who dressed this living room with textured pieces in a neutral color palette to boost its overall coziness.
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
          image="https://hips.hearstapps.com/hmg-prod/images/designer-living-rooms-6480f034a25c0.jpeg?crop=1xw:1xh;center,top&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Aim for the Sky
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This grand double-height living room designed by Liz Hoekzema features a hand-applied lime wash treatment on the chimney to introduce warmth and texture. "We love the wabi-sabi informality it lends, especially compared with the richness of the soapstone fireplace surround," Hoekzema says.
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
          image="https://hips.hearstapps.com/hmg-prod/images/rupp-photo-by-william-jess-laird-1666291337-648107047fa62.jpeg?crop=0.8299319727891157xw:1xh;center,top&resize=980:*"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Deepen the Tones
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Skip brighter hues for a living room that exudes a sultry and mysterious air. If you want a break from bright colors, this treasure of a space contains olive limewash walls, a terra-cotta velvet sofa, and eye-catching teal accents.
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
          image="https://hips.hearstapps.com/hmg-prod/images/hbx120122wholehome-016-1668455081-64810b019387d.jpeg?crop=0.838xw:1.00xh;0.0945xw,0&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Add Unique Seating
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A multifunctional classic, a nap bench can make lounging in your living room look twice as chic. Here, designer Zoë Feldman uses a Serena & Lily rattan piece to divide the large living area of the 2022 Whole Home without blocking the sculptural window. A cushion covered in a Sanderson fabric gives it a bespoke look.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}