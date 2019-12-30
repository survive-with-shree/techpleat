import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import ProductCard from '../components/ProductCard';
import * as URL from '../utils/url';
import s from '../styles/category.style';

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
    fetch(`${URL.docs}category/${cid}/index.json`)
      .then(res => res.json())
      .then(
        (result) => {
          console.debug(result)
          this.setState({
            isLoaded: true,
            product: result.product
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
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1].toLowerCase()
    return (
      <Grid container item>
        {this.state.product.map((item, index) => (
          <Grid container item md={3} key={index}>
            <ProductCard 
              productItem={item}
              categoryId={cid}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}