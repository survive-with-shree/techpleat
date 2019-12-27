import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { textAlign } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

import SpecTable from '../components/SpecTable';
import ProductCard from '../components/ProductCard';
import Timeline from '../components/Timeline';
import * as URL from '../utils/url';
import s from '../styles/product.style';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product: [],
      spec: [],
      timeline: [],
      seller: {},
      md: ""
    };
  }  
  componentDidMount() {
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1].toLowerCase()
    let pid = location.search.match("(pid=[0-9]*)")[0].split("=")[1]
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
        if (element.id.toString() == location.search.match("(pid=[0-9]*)")[0].split("=")[1].toString()) item = element
      })
    }

    return (
        <div>
            {item &&
                <div> {JSON.stringify(this.state) }</div>
            }

        </div>
    );
  }
}