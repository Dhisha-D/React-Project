import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Kitchen() {
  return (
    <>
    <h1>Kitchen Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://hips.hearstapps.com/hmg-prod/images/black-and-white-farmhouse-kitchen-649cb895ce24c.jpg?crop=1.00xw:0.939xh;0,0.0612xh&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pretty and Polished Farmhouse Kitchen
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Singer-songwriter (and serial renovator) Holly Williams preserved her farmhouse kitchen’s original layout opting only to reconfigure the placement of the refrigerator and cooktop. She coated the walls and trim a crisp white (Delicate White by Porter Paints) and installed ceramic subway tile for added texture. For a slight bit of contrast, she chose light gray cabinets which she paired with open shelving. An inky black ceiling (Tricorn Black by Sherwin-Williams) grounds the room, while patterned roman shades add hints of blue without blocking too much natural light. Rather than undertake a pricey floor restoration, Holly opted to paint the hardwoods a barely there shade of pink (Pink Ground by Farrow & Ball).
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
          image="https://hips.hearstapps.com/hmg-prod/images/blue-and-white-cottage-kitchen-649cb9353d915.jpg?crop=1.00xw:0.834xh;0,0.141xh&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          A Handsome Coastal Kitchen
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Marine blue cabinets topped with walnut countertops, a red cedar ceiling (to lend a feeling of being on a boat), and a pine subfloor salvaged from a ca.-1700s tavern in Maine revived Steve Ballerini and Colin Bohrer's small Cape Cod kitchen. Horizontal plank walls and handcrafted unlacquered brass and rope pendants further the nautical vibe.
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
          image="https://hips.hearstapps.com/hmg-prod/images/white-colonial-kitchen-649cb6ad02474.jpg?crop=0.927xw:1.00xh;0.0731xw,0&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Warm & Inviting Kitchen
          </Typography>
          <Typography variant="body2" color="text.secondary">
          First up for homeowners Marcus and Victoria Ford (@prepfordwife) was to remove the traffic-blocking peninsula and replace it with a pretty furniture-style end cabinet. Adding shiplap to the ceiling (painted Dutch Tile Blue by Sherwin-Williams) and beadboard to the walls (painted Antique White by Sherwin-Williams) instantly brought warmth and texture to the 1970s space. Patinaed hardware dresses up the new Shaker-front cabinets, while brushed-bronze handles accent matte white appliances, and an unlacquered bridge faucet tops the fluted apron-front sink. Lastly, a small butcher-block topped table adds needed prep and serving space.
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
          image="https://hips.hearstapps.com/hmg-prod/images/california-farmhouse-white-kitchen-makeover-649cb9bd46a27.jpg?crop=0.956xw:0.920xh;0.0340xw,0.0798xh&resize=980:*"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          A French Farmhouse Kitchen
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Maria Carr (@dreamywhiteslifestyle) The airier space feels significantly larger thanks to crisp ceilings with exposed rafters and wide shiplap planked walls, white cabinets newly crafted from scrap wood, and a sea of marble, including Carrara marble countertops (bedrosians.com), handcrafted marble-and-wood shelving, and a marble subway tile backsplash (emser.com). The couple also replaced linoleum floors with a herringbone patterned alternative in black oak, which they were chagrined to find out has a tendency to turn pink when staining. Thanks to a call for help on Instagram, they found a crowd-sourced solution: Woca oil (wocawoodcare.com) French standbys including ironstone breadboards, vintage baskets, copper pots, and an old French sieve that hangs above the range
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}