import React from 'react';
import Interactive from 'react-interactive';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { textAlign } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinearProgress from '@material-ui/core/LinearProgress';

import { FacebookProvider, Like, Comments } from 'react-facebook';

import * as URL from '../utils/url';
import s from '../styles/category.style';

import SpecTable from '../components/SpecTable';
import ProductCard from '../components/ProductCard';
import Timeline from '../components/Timeline';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product: []
    };
  }

  componentDidMount() {
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1]
    let pid = location.search.match("(pid=[0-9_]*)")[0].split("=")[1]
    if (pid == "_") {
      fetch(`${URL.docs}category/${cid}/index.json`)
      .then(res => res.json())
      .then(
        (result) => {
          console.debug(result)
          this.setState({
            isLoaded: true,
            product: result.product.reverse()
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
        fetch(`${URL.docs}category/${cid}/index.json`),
        fetch(`${URL.docs}category/${cid}/spec/${pid}.json`),
        fetch(`${URL.docs}category/${cid}/timeline/${pid}.json`),
        fetch(`${URL.docs}category/${cid}/seller/${pid}.json`),
        fetch(`${URL.docs}category/${cid}/md/${pid}.md`)
      ])
      .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.text()]))
      .then(([data1, data2, data3, data4, data5]) => {
        this.setState({
          isLoaded: true,
          product: data1.product,
          spec: data2.spec,
          timeline: data3.timeline,
          seller: data4,
          md: data5
        })})
    }
  }

  renderPage(cid, pid) {
    let item = null

    if (this.state.product.length != 0 && pid != "_") {
      this.state.product.map((element, index) => {
        if (element.id.toString() == pid) item = element
      })
    }

    if (pid == "_") {
      let windowTitle = `${cid.toUpperCase()} GALLERY`
      document.title = windowTitle
      return (
        <Grid container item>
          <Grid container item 
            md={12}
            style={{
              marginBottom: "1vh",
              justifyContent: "center", 
              fontSize: "220%", 
              fontWeight: "200", 
              top: "50%",
              backgroundColor: "#ffffff73"}}>
            <h1 style={{background: "linear-gradient(to top, rgb(287, 35, 337), rgb(229, 57, 53))", webkitBackgroundClip: "text", webkitTextFillColor: "transparent"}}>
              {windowTitle}
              <IconButton
                style={{marginLeft: "2vw"}}
                aria-label="github"
                component="a"
                target="_blank" 
                href={`${URL.git}category/${cid}/index.json`}>
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            </h1>
          </Grid>
          {this.state.product.map((item, index) => (
            <Grid container item md={3} key={index}>
              <ProductCard 
                productItem={item}
                categoryId={cid}
                git={`${URL.git}category/${cid}/index.json`}
              />
            </Grid>
          ))}
        </Grid>
      )
    } else if (item != null) {
      let windowTitle = `${item.name}`
      document.title = windowTitle
      let timeline = this.state.timeline.sort((a, b) => {
        return a["timestamp"] - b["timestamp"];
      })

      return (
        <Grid container item md={12}>
          <Grid container item 
            md={12}
            style={{
            marginBottom: "1vh",
            justifyContent: "center", 
            fontSize: "240%", 
            fontWeight: "200", 
            top: "50%",
            backgroundColor: "#ffffff73"}} >
            <h1 style={{background: "linear-gradient(to top, rgb(287, 35, 337), rgb(229, 57, 53))", webkitBackgroundClip: "text", webkitTextFillColor: "transparent"}}>
              {windowTitle}
              <IconButton
                style={{marginLeft: "2vw"}}
                aria-label="github"
                component="a"
                target="_blank" 
                href={`${URL.git}category/${cid}/index.json`}>
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            </h1>
            
          </Grid>

          <Grid container item md={3} style={s.column}>                
            <ProductCard 
              productItem={item}
              categoryId={cid}
              seller={this.state.seller}
              git={`${URL.git}category/${cid}/index.json`}
              sellerGit={`${URL.git}category/${cid}/seller/${pid}.json`}
            />
          </Grid>

          <Grid container item md={6} style={s.column}>
            <Grid item md={12} style={{width: "100%"}}>
              <SpecTable spec={this.state.spec} git={`${URL.git}category/${cid}/spec/${pid}.json`}/>
            </Grid>
            <Grid item md={12} style={s.row}>
              <Card style={s.md}>
                <Typography variant="h4">
                  {item.name} Review
                  <IconButton
                    style={{marginLeft: "2vw"}}
                    aria-label="github"
                    component="a"
                    target="_blank" 
                    href={`${URL.git}category/${cid}/md/${pid}.md`}>
                    <GitHubIcon fontSize="inherit" />
                  </IconButton>	
                </Typography>
                <Markdown source={this.state.md} />
                <br/>
                <FacebookProvider appId="620534005365040">
                  <Like href={`https://techpleat.com/?cid=${cid}&fid=${Number.parseInt(item.id)%10}`} colorScheme="dark" showFaces share />
                </FacebookProvider>
              </Card>
            </Grid>
          </Grid>
          <Grid container item md={3} style={s.column}>
            <Typography variant="h4" style={{textAlign: "center"}}>
              Events 
              <IconButton
                style={{marginLeft: "2vw"}}
                aria-label="github"
                component="a"
                target="_blank" 
                href={`${URL.git}category/${cid}/timeline/${pid}.json`}>
                <GitHubIcon fontSize="inherit" />
              </IconButton>
              <Grid item md={12}>
                {timeline.map((event, index) => <Timeline event={event} key={index}/>)}
              </Grid>
            </Typography>
            
          </Grid> 
          <Grid container item md={12} style={s.column}>
            <FacebookProvider appId="620534005365040">
                <Comments href={`https://techpleat.com/?cid=${cid}&fid=${Number.parseInt(item.id)%10}`} />
            </FacebookProvider>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container item md={12}>
          <LinearProgress />
        </Grid>
      )
    }
  }
  
  render(){
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1]
    let pid = location.search.match("(pid=[0-9_]*)")[0].split("=")[1]
    return this.renderPage(cid, pid);
  }
}