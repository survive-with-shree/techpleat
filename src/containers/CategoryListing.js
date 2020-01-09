import React from 'react';
import Interactive from 'react-interactive';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { textAlign } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { FacebookProvider, Comments, Like } from 'react-facebook';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

import * as URL from '../utils/url';
import s from '../styles/feed.style';

import SpecTable from '../components/SpecTable';
import FeedCard from '../components/FeedCard';
import Timeline from '../components/Timeline';

export default class CategoryListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      feed: [],
      categories: []
    };
  }
  
  componentDidMount() {
    fetch(`${URL.docs}/category/index.json`)
    .then(res => res.json())
    .then((result) => {   
      this.setState({
        isLoaded: true,
        categories: result.category
      })
    })  
  }

  render(){
    return (
      <Grid container item>
        {this.state.categories.map((category, index) => (
          <Grid container item lg={2} md={3} sm={4} xs={12} key={index}>
            <Grid container item
              id={category} 
              md={12}
              key={index} style={s.feed}
              style={{
                margin: "0.5vh",
                top: "50%",
                backgroundColor: "#ffffff73",
                marginBottom: "0.5vw"
              }}>
              <Grid container item md={12} key={index} style={{ paddingTop: "10px"}}>
                <h1 style={{
                  background: "linear-gradient(to top, rgb(287, 35, 337), rgb(229, 57, 53))", 
                  fontSize: "180%", 
                  fontWeight: "200",
                  webkitBackgroundClip: "text", 
                  webkitTextFillColor: "transparent",
                  paddingLeft: "0.5vh"}}>
                  <a href={`/?cid=${category.toLowerCase()}&fid=_`} style={{textAlign: "center"}}>
                    #{category}
                  </a>
                </h1>
              </Grid>
              <Grid container item md={12} key={index} style={{paddingLeft: "1vh", paddingTop: "0.75vw"}}>
                <ButtonGroup size="small" color="primary" aria-label="outlined primary button group" style={{height: "30px"}}>
                  <Button href={`/?cid=${category.toLowerCase()}&pid=_`}> Gallery </Button>
                  <Button href={`/?cid=${category.toLowerCase()}&fid=_`}> Feed </Button>
                  <Button href={`/?cid=${category.toLowerCase()}&bid=_`}> Blog </Button> 
                </ButtonGroup>                
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    )
  }
}