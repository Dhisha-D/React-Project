import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Bedroom() {
  return (
    <>
    <h1>Bedroom Renovation Ideas</h1>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.nobroker.in/blog/wp-content/uploads/2023/03/Maximize-Your-Space-with-Wall-Mounted-Shelves.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Maximize Your Space with Wall-Mounted Shelves
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Elevate your storage game with trendy wall-mounted shelves. From books to decor, these shelves will keep your small bedroom organized and add a chic touch to your walls.
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
          image="https://www.nobroker.in/blog/wp-content/uploads/2023/03/Sleep-and-Store-in-Style-with-a-Platform-Bed-with-Built-in-Storage.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sleep and Store in Style with a Platform Bed with Built-in Storage
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Keep clutter at bay with a platform bed that has built-in storage. Perfect for small bedrooms, this functional piece of furniture maximizes your storage space while adding a stylish touch.
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
          image="https://www.nobroker.in/blog/wp-content/uploads/2023/03/Cleverly-Compact-Furniture-Solutions.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cleverly Compact Furniture Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Small bedroom? No problem! Opt for cleverly compact furniture pieces that can easily fold away when not in use. From desks to chairs, these space-saving options keep your room feeling open and inviting.
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
          image="https://www.nobroker.in/blog/wp-content/uploads/2023/03/Mirrors-that-Make-Magic.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mirrors that Make Magic
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Add a touch of magic to your small bedroom with a large mirror. Not only does it create the illusion of a larger space, but it also serves as a statement piece that elevates your room’s style.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}