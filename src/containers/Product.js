import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Markdown from 'react-markdown'

import SpecTable from '../components/SpecTable';
import ProductCard from '../components/ProductCard';
import Timeline from '../components/Timeline';
import * as URL from '../utils/url';
import s from '../styles/category.style';
import { textAlign } from '@material-ui/system';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categoryId: location.search.match("(cid=[a-z]*)")[0].split("=")[1].toLowerCase(),
      productId: location.search.match("(pid=[0-9]*)")[0].split("=")[1],
      product: [],
      spec: [],
      timeline: [],
      seller: {},
      md: ""
    };
  }  
  componentDidMount() {
    let cid = this.state.categoryId
    let pid = this.state.productId
    if (cid.length != 0 && pid.length != 0) {
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
          product: data1.product,
          spec: data2.spec,
          timeline: data3.timeline,
          seller: data4,
          md: data5
        })},
        ([error1, error2, error3, error4, error5]) => {
          this.setState({
            isLoaded: false,
            error: error5
          });
        }
      )
    }
  }
  
  render() {
    let item
    if (this.state.product.length != 0) {
      this.state.product.map((element, index) => {
        if (element.id.toString() == this.state.productId.toString()) item = element
      })
    }

    return (
      <Grid container item lg={12}>
        <Grid container item lg={12}>
          <Grid item lg={3}>
            {item && <h2 style={{ textAlign: "center"}}>{item.name}</h2>}
          </Grid>
        </Grid>  
        <Grid container item lg={12}>
          
          <Grid item lg={3}>
            <Grid item lg={12}>
              {item &&
                <ProductCard 
                  productItem={item}
                  categoryId={this.state.categoryId}
                  seller={this.state.seller}
              />}
            </Grid>
          </Grid>

          <Grid container item lg={6}>
            <Grid item lg={12}>
              <SpecTable spec={this.state.spec} />
            </Grid>
            <Grid item lg={12}>
              <Markdown source={this.state.md} />
            </Grid>
          </Grid>
          
          <Grid container item lg={3}>
            <Grid item lg={12}>          
              <h4 style={{textAlign: "center"}}> Timeline</h4>
              {this.state.timeline.map((event, index) => <Timeline event={event} key={index}/>)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}