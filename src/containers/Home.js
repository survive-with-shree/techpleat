import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Feed from './Feed';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
                    <Typography variant="h4">
                        Product Specification and Blogs
                    </Typography>
                </Grid>
                <Grid container item md={12}>
                    {this.state.category.map((item, index) => (
                        <Grid container item md={12}>
                            <Card variant="outlined" style={{width: "100%"}}>
                                <CardHeader title={item}/>
                                <CardContent>
                                    <a herf={`/?cid=${item.toLowerCase()}&pid=_`}> 
                                        <Button color="primary"> Specifications </Button>
                                    </a> 
                                    <a herf={`/?cid=${item.toLowerCase()}&bid=_`}>
                                        <Button color="primary"> Blog </Button>
                                    </a> 
                                    <a herf={`/?cid=${item.toLowerCase()}&fid=_`}>
                                            <Button color="primary"> Feed </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
  }
}
