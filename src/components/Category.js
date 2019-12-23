import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
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

  render(){
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1].toLowerCase()
    return (
      <div style={s.productList}>
        {this.state.product.map((item, index) => (
          <div style={s.productCard} key={index}>
            <Interactive
              as={Link}
              {...s.link}
              to={`/product?cid=${cid}&pid=${item.id}`}>
              {item.name}
            </Interactive>
            <div>
              <img style={s.productImg} src={`${URL.docs}category/${cid}/img/${item.id}_front.jpg`}/>
            </div>
            <div>
              <p> Brand: {item.brand} </p>
              <p> Price: {item.price.split(",").join(", ")} </p>
              <p> Launch date: {item.launchDate} </p>
              <p> Rating: {item.rating} </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}