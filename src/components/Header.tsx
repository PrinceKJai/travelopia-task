import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          Travel App
        </Typography>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        <Button color="inherit" component={Link} to="/about">About Us</Button>
      </Toolbar>
    </AppBar>
  );
}
