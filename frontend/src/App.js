import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header.js';
/* import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar'; */
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import AllCars from './components/AllCars.js';
import SingleCar from './components/SingleCar.js';
import AddCar from './components/AddCar.js';

const theme = createTheme();

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
            <Route path="cars/add" element={<AddCar title="This is add car page" />} />
            <Route path="cars/:id" element={<SingleCar title="This is single car page" />} />
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
