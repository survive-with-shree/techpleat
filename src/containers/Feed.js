import React from 'react';
import Interactive from 'react-interactive';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { textAlign } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FacebookProvider, Comments, Like } from 'react-facebook';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import * as URL from '../utils/url';
import s from '../styles/feed.style';

import SpecTable from '../components/SpecTable';
import FeedCard from '../components/FeedCard';
import Timeline from '../components/Timeline';

export default class Feed extends React.Component {
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
    let cid = location.search.match("(cid=[a-z]*)")
    let fid = location.search.match("(fid=[0-9_]*)")
    if (fid == null && cid == null) {
      let categoryIndex = fetch(`${URL.docs}/category/index.json`)
      .then(res => res.json())
      .then((result) => {   
        categoryIndex = result.category
        let promises = categoryIndex.map((item, index) => {
          return fetch(`${URL.docs}category/${item.toLowerCase()}/feed/index.json`)
        })
        let allFeed
        Promise.all(promises)
        .then((feeds) => {
          return Promise.all(feeds.map((feed, index) => {
            return feed.json()
          }))
        })
        .then((data) => {
          console.debug(JSON.stringify(data))
          this.setState({
            isLoaded: true,
            allFeed: data,
            categories: categoryIndex
          })
        })
      });
    } else {
      let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1]
      let fid = location.search.match("(fid=[0-9_]*)")[0].split("=")[1]
      console.log(cid + ' ' + fid)
      if (fid == "_") {
        fetch(`${URL.docs}category/${cid}/feed/index.json`)
        .then(res => res.json())
        .then(
          (result) => {
            console.debug(result)
            this.setState({
              isLoaded: true,
              feed: result.feed.reverse()
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      } else {
        Promise.all([
          fetch(`${URL.docs}category/${cid}/feed/index.json`),
          fetch(`${URL.docs}category/${cid}/feed/${fid}.md`)
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.text()]))
        .then(([data1, data2]) => {
          this.setState({
            isLoaded: true,
            feed: data1.feed.reverse(),
            md: data2
          })})
      }
    }
  }

  renderPage(cid, fid) {
    let item = null

    if (this.state.feed.length != 0 && fid != "_") {
      this.state.feed.map((element, index) => {
        if (element.id.toString() == fid) item = element
      })
    }

    if (cid == null && fid == null) {
      return (
        <Grid container item>     
          {this.state.categories.map((category, index) => (
            <Grid container item md={12} key={index}>
              {(this.state.allFeed[index].feed.length != 0) &&
                <Grid container item style={s.feed}>
                  <Grid container item md={12} key={index}>                  
                    <Grid container item xs={10} key={index}>
                      <Typography variant="h4" style={s.heading}>
                        <a href={`/?cid=${category.toLowerCase()}&fid=_`} style={{textAlign: "center"}}>
                          {category} Feed 
                        </a>
                      </Typography>
                    </Grid>
                    <Grid container item xs={2} key={index} >
                      <Fab color="primary" aria-label="add" size="small" href={`/?cid=${category.toLowerCase()}&fid=_`} style={{textAlign: "center"}}>
                        <AddIcon />
                      </Fab>
                    </Grid>                    
                  </Grid>
                  <Grid container item md={12} key={index}>
                    {this.state.allFeed[index].feed.map((feed, index) => (
                      <Grid container item md={3} key={index}>
                        <FeedCard feed={feed} categoryId={category.toLowerCase()} displayDetails={false}/>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              }
            </Grid>
          ))}
        </Grid>
      )
    } else if (fid == "_") {
      return (
        <Grid container item>
          {this.state.feed.map((feed, index) => (
            <Grid container item md={3} key={index}>
              <FeedCard feed={feed} categoryId={cid} displayDetails={true}/>
            </Grid>
          ))}
        </Grid>
      )
    } else if (item != null) {
      return (
        <Grid container item md={12}>
          <Grid container item 
            md={12}
            style={{
            marginBottom: "1vh",
            justifyContent: "center", 
            fontSize: "8vh", 
            fontWeight: "100", 
            top: "50%",
            backgroundColor: "#ffffff73"}} >
            <h1 style={{background: "linear-gradient(to top, rgb(287, 35, 337), rgb(229, 57, 53))", webkitBackgroundClip: "text", webkitTextFillColor: "transparent"}}>{item.title}</h1>
          </Grid>
          <Grid container item md={2} style={s.column}>
          </Grid>
        
          <Grid container item md={8} style={s.column}>
            <Card style={s.md}>
                <Markdown source={this.state.md} />
            </Card>
            <Grid item md={12} style={s.row}>
                <FacebookProvider appId="620534005365040">
                    <Like href={`https://techpleat.com/?cid=${cid}&fid=${item.id}`} colorScheme="dark" showFaces share />
                    <Comments href={`https://techpleat.com/?cid=${cid}&fid=${item.id}`} />
                </FacebookProvider>
            </Grid>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container item md={12} style={s.column}>
          Loading... {fid} {cid}
        </Grid>
      )
    }
  }

  render(){
    let cid = location.search.match("(cid=[a-z]*)")
    let fid = location.search.match("(fid=[0-9_]*)")

    if (cid != null && fid != null) {
      cid = cid[0].split("=")[1]
      fid = fid[0].split("=")[1]
    }

    return this.renderPage(cid, fid);
  }
}