import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Feed from './Feed';

import { Code } from '../styles/style';
import * as URL from '../utils/url';
import s from '../styles/home.style';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      category: []
    };
  }

  componentDidMount() {
    fetch(`${URL.docs}/category/index.json`)
      .then(res => res.json())
      .then(
        (result) => {
          console.debug(result)
          this.setState({
            isLoaded: true,
            category: result.category
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
        <Grid container item md={12}>
            <Grid container item md={8}>
                <Feed />
            </Grid>
            <Grid container item md={4}>
                <Grid container item md={12}>
                    <Grid container item md={12}>
                        <Typography variant="h4">
                            Product Specification
                        </Typography>
                    </Grid>
                    <Grid container item md={12}>
                        <ol>
                        {this.state.category.map((item, index) => (
                            <li key={index}>
                            <Interactive
                                as={Link}
                                {...s.link}
                                to={`/?cid=${item.toLowerCase()}&pid=_`}>
                                {item}
                            </Interactive>
                            </li>
                        ))}
                        </ol>
                    </Grid>
                </Grid>
                <Grid container item md={12}>
                    <Grid container item md={12}>
                        <Typography variant="h4" >
                            Blog category
                        </Typography>
                    </Grid>
                    <Grid container item md={12}>    
                        <ol>
                        {this.state.category.map((item, index) => (
                            <li key={index}>
                            <Interactive
                                as={Link}
                                {...s.link}
                                to={`/?cid=${item.toLowerCase()}&bid=_`}>
                                {item}
                            </Interactive>
                            </li>
                        ))}
                        </ol>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
}
