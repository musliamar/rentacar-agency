import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import AllCars from './components/AllCars.js';
import AllClients from './components/AllClients.js';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'start',
        },
      },
    },
  },
});

const links = [

  { title: 'Cars', url: '/cars' },
  { title: 'Clients', url: '/clients' },
  { title: 'Employees', url: '/employees' },

];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header links={links} />
        <main>
          <Grid 
          container 
          spacing={5} 
          sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<HomePage title="This is homepage" />} />
            <Route path="cars" element={<AllCars title="This is cars page" />} />
            <Route path="clients" element={<AllClients title="This is all clients page" />} />
          </Routes>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Rent-a-car Agency app"
        description="My first app in react!"
      />
    </ThemeProvider>
    </div>
  );
}

export default App;
