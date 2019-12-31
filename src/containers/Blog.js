import React from 'react';
import Interactive from 'react-interactive';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { textAlign } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

import * as URL from '../utils/url';
import s from '../styles/category.style';

import SpecTable from '../components/SpecTable';
import BlogCard from '../components/BlogCard';
import Timeline from '../components/Timeline';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      blog: []
    };
  }

  componentDidMount() {
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1]
    let bid = location.search.match("(bid=[0-9_]*)")[0].split("=")[1]
    if (bid == "_") {
      fetch(`${URL.docs}category/${cid}/blog/index.json`)
      .then(res => res.json())
      .then(
        (result) => {
          console.debug(result)
          this.setState({
            isLoaded: true,
            blog: result.blog.reverse()
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
        fetch(`${URL.docs}category/${cid}/blog/index.json`),
        fetch(`${URL.docs}category/${cid}/blog/${bid}.md`)
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.text()]))
      .then(([data1, data2]) => {
        this.setState({
          isLoaded: true,
          blog: data1.blog.reverse(),
          md: data2
        })})
    }
  }

  renderPage(cid, bid) {
    let item = null

    if (this.state.blog.length != 0 && bid != "_") {
      this.state.blog.map((element, index) => {
        if (element.id.toString() == bid) item = element
      })
    }

    if (bid == "_") {
      return (
        <Grid container item>
          {this.state.blog.map((item, index) => (
            <Grid container item md={12} key={index}>
              <BlogCard 
                blog={item}
                categoryId={cid}
              />
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
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container item md={12} style={s.column}>
          Loading... {bid} {cid}
          {JSON.stringify(this.state)}
        </Grid>
      )
    }
  }
  
  render(){
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1]
    let bid = location.search.match("(bid=[0-9_]*)")[0].split("=")[1]
    return this.renderPage(cid, bid);
  }
}