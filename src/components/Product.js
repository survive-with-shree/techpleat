import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import * as URL from '../utils/url';
import s from '../styles/category.style';

const fetchData = (url, object, setState) => {
  fetch(url)
    .then(res => res.json())
    .then((result) => {
        console.debug(result)
        setState({
          isLoaded: true,
          [object]: result[object]
        });
      },
      (error) => {
        setState({
          isLoaded: true,
          error
        });
      }
    )
}
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product:[],
      spec: [],
      timeline: [],
      md: ""
    };
  }  

  componentDidMount() {
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1].toLowerCase()
    let pid = location.search.match("(pid=[0-9]*)")[0].split("=")[1]

    if (cid.length != 0 && pid.length != 0) {
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
      
      fetch(`${URL.docs}category/${cid}/spec/${pid}.json`)
        .then(res => res.json())
        .then((result) => {
            console.debug(result)
            setState({
              isLoaded: true,
              spec: result.spec
            });
        },
        (error) => {
          setState({
            isLoaded: true,
            error
          });
        })

      fetch(`${URL.docs}category/${cid}/timeline/${pid}.json`)
        .then(res => res.json())
        .then((result) => {
            console.debug(result)
            setState({
              isLoaded: true,
              timeline: result.timeline
            });
        },
        (error) => {
          setState({
            isLoaded: true,
            error
          });
        })

      fetch(`${URL.docs}category/${cid}/md/${pid}.md`)
        .then(res => res.json())
        .then((result) => {
            console.debug(result)
            setState({
              isLoaded: true,
              md: result.md
            });
        },
        (error) => {
          setState({
            isLoaded: true,
            error
          });
        })
    }
  }

  render(){
    let cid = location.search.match("(cid=[a-z]*)")[0].split("=")[1].toLowerCase()
    let pid = location.search.match("(pid=[0-9]*)")[0].split("=")[1]
    return (
      <div style={s.productList}>
        <p>{cid} {pid} {JSON.stringify(this.state.product)}</p>
        <p>{JSON.stringify(this.state.spec)}</p>
        <p>{JSON.stringify(this.state.timeline)}</p>
        <p>{JSON.stringify(this.state.md)}</p> 
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