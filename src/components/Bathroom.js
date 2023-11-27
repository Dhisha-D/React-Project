import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Bathroom() {
  return (
    <>
    <h1>Bathroom Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.architecturaldigest.com/photos/644abf29b3f54128dde3e819/master/w_1920%2Cc_limit/Bathroom.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         Center on a fireplace
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Perhaps not the lowest lift when it comes to bathroom remodel ideas, adding a fireplace to your primary bathroom is sure to radically shift the vibe toward relaxation. Inside actor Sam Page’s home, designed by Allie Boesch, the bathroom is pure California cool thanks to a coat of crisp white paint, but a fireplace can also lend itself to a rustic or traditional-leaning bathroom.
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
          image="https://media.architecturaldigest.com/photos/644abdaf37454b1666a1d35b/master/w_1920%2Cc_limit/NBS%2520LAM%2520MASTER%2520BATH%25201.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Switch your laundry and bathroom
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If you’re unhappy with the location of a bathroom in your home, consider whether you’d be better off swapping it with your laundry room location. While it might not always improve the flow of your space, it may work—and it’s a lot easier than knocking down walls or eating into a different room’s footprint. This is exactly what homeowners David Krause and Ayan Chatterjee did with their bathroom remodel in upstate New York, resulting in a much happier space compared to the windowless bathroom that became the laundry room.
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
          image="https://media.architecturaldigest.com/photos/644abf9d8ff2fb65cdae33b4/master/w_1920%2Cc_limit/G19_4585.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Think creatively about natural light
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If you’re working on a full remodel, you needn’t stick too close to typical design convention. Design to your specific wants and needs in creative ways—especially when it comes to natural lighting. At fashion designer Derek Lam’s Fire Island home, designed with Neal Beckstedt, the primary bathroom walls are constructed with translucent corrugated sheets of polycarbonate plastic to let natural light in without totally ceding privacy.
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
          image="https://media.architecturaldigest.com/photos/644abaa037454b1666a1d359/master/w_1920%2Cc_limit/paul-raeside---4656-1.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Slim down the sink
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If the bath remodel you’re working on isn’t a powder room or guest bathroom, considering going for a sink that’s on the slimmer side and skipping the full bathroom vanity. When you’ll never use that space for loads of toiletries, it’ll just go to waste and is better put to use for other bathroom elements, or simply for more breathing room in the space. Extra points if you go for a built in sink, like in in this Jacques Grange–designed space.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}