import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PlayArea() {
  return (
    <>
    <h1>Outdoor Playarea Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.thespruce.com/thmb/R8LFFz_UtIQNLGutC8MT0ndcSrI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/THEATER2-000b21a5efcb454393ac7ba426510324.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Occupy the Attic
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Raleigh-based designer Liz Goldberg of CAROLYNLEONA was tasked with transforming an attic into a special retreat. One component of the finished space is a stunning game room and theater—complete with a classic popcorn machine—which makes spending time at home feel a little more luxe.
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
          image="https://www.thespruce.com/thmb/6kFefgIVxQAiHGoIKbQM7Ri_RK4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DIYpooltablegameroommakeover-1920w-1-1-625b03964dee40cba3540224d5cc6650.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Multiply Your Options
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Blogger Zoe Hunt had always wanted a home with a game room and made over her space to feature everything from a pool table to a dart board, board game station, and even a home bar. With so many entertainment possibilities right at their fingertips, there's no need for Hunt and her husband to leave the house for a night of fun.
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
          image="https://www.thespruce.com/thmb/VuGh9gCwq6v2tUC2mth_iulh46w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Liz-ec96a765cb9e4f3db871d723fa65e7de.jpeg"
          alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Make It Modern
          </Typography>
          <Typography variant="body2" color="text.secondary">
          In this game room by Liz Caan & Co., a ping-pong table is the star of the show and a decor piece all on its own. A nearby tulip table perfectly complements the space's existing white, modern vibes, while colorful upholstered chairs and a brightly painted ceiling add a major element of surprise.
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
          image="https://www.thespruce.com/thmb/QYancd-IlRJWdk038lMhHgeWxZ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cd581a_211905898cc140d885111b7e1fafe625mv2-426cc24b25884400bde66305813695bd.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Make It Open Plan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This spacious and bright game room from Kendall Wilkinson Design is anchored by a pool table with a large overhanging pendant light and window seating, flanked by living and dining spaces on either side.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}