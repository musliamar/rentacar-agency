import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const HomePage = (props) => {

  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Link to="/cars/add">Add cars</Link>
      <Link to="/cars/:id">Single cars</Link>
      <Link to="/cars">All cars</Link>

      <Divider />
      {/* {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
