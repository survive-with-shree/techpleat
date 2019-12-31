import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
            <Grid container item md={2}> </Grid>
            <Grid container item md={4}>
                <div style={s.pageLinkContainer}>
                    <Typography variant="h4" style={{textAlign: "center"}}>
                        Product review
                    </Typography>

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
                </div>
            </Grid>
            <Grid container item md={4}>
                <div style={s.pageLinkContainer} >
                    <Typography variant="h4" style={{textAlign: "center"}}>
                        Product blogs
                    </Typography>

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
                </div>
            </Grid>
        </Grid>
    );
  }
}
