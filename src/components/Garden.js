import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Garden() {
  return (
    <>
    <h1>Garden Area Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://hips.hearstapps.com/hmg-prod/images/garden-design-ideas-landscaped-country-garden-lawn-1623353956.jpg?resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Get your lawn into shape
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Look out of your window at your garden and the biggest shape you'll probably see is your lawn. If it's a good, strong shape, it will set the entire garden on the right track. And remember, it doesn't have to be a rectangle – try an oval, circle, square or oblong shape. You'll need the right tools to complete the job. Last year saw a rise in searches for nifty robotic lawn mowers and ride-on mowers, with the Flymo Easi Glide 300 Electric Mower being a best-seller, as revealed by price comparison service PriceRunner.
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
          image="https://hips.hearstapps.com/hmg-prod/images/rhs-hampton-court-palace-flower-show-secured-by-design-garden-1623328436.jpg?crop=0.937xw:1.00xh;0.0578xw,0&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Plan your planting
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The best garden designs start with structural plants infilled with pretty, flowering plants. So use evergreen shrubs at the end of each border and as punctuation along the way. Include small shrubs such as box balls, or large evergreens, for example mahonia, for bigger areas.
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
          image="https://hips.hearstapps.com/hmg-prod/images/garden-design-ideas-multi-stem-trees-garden-by-caitlin-mclauglin-1587230901.jpg?crop=0.752xw:1.00xh;0.0187xw,0&resize=980:*"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Trees
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mature trees can be a starting point for building a scheme. They block the glare of the sun and can also be used as an anchor for shade sails, hammocks, pendant lights or hanging decorations.
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
          image="https://hips.hearstapps.com/hmg-prod/images/aged-riven-paving-in-cotswold-1523541423.jpg?crop=1.00xw:0.810xh;0,0.00138xh&resize=980:*https://hips.hearstapps.com/hmg-prod/images/aged-riven-paving-in-cotswold-1523541423.jpg?crop=1.00xw:0.810xh;0,0.00138xh&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Beautiful paving
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The colour and style of your paving and the way it is laid can provide a strong design direction for the entire garden. For instance, grey or white stone laid in a random pattern will set the scene for a French country look; black or silver paving organised in a regular design will form the perfect backdrop to a sleek and modern scheme; while golden stone arranged in a mixed pattern creates an English country feel.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}