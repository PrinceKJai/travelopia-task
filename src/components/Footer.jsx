import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <AppBar 
      position="fixed" 
      color="primary" 
      sx={{ top: 'auto', bottom: 0, width: '100%' }}
    >
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            &copy; {new Date().getFullYear()} travel
          </Typography>
          <Link href="/privacy" color="inherit" sx={{ marginRight: 2 }}>
            Privacy Policy
          </Link>
          <Link href="/terms" color="inherit">
            Terms of Service
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
