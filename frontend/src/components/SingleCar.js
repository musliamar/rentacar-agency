import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link, useParams } from 'react-router-dom';

const SingleCar = (props) => {

  const { title } = props;
  const { id } = useParams();

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
        {title} - id { id }
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

SingleCar.propTypes = {
  
  title: PropTypes.string.isRequired,
};

export default SingleCar;
