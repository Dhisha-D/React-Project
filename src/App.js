// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { CssBaseline, Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import DesignTool from './components/DesignTool';
import LoginPage from './components/LoginPage';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container>
          <Header />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={ProjectList} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/design" component={DesignTool} />
            <Route path="/login" component={LoginPage} />
          </div>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
