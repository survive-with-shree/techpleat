import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as URL from '../utils/url';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
    backgroundSize: "contain"
  },
});

const sellerView = (seller) => {
  return ( 
    Object.keys(seller).map((currency, index) => {
      return (
        <div>
          <br/>
          {seller[currency].map((seller, index) => {
            return(<p> <Button variant="outlined" size="small" color="primary" href={seller.link}> {seller.vendor.toUpperCase()}: {seller.price} {currency} </Button> </p>)
          })}
        </div>
      )
    })
  )
}

export default function ProductCard(props) {
    const classes = useStyles();
    const item = props.productItem;
    const cid = props.categoryId;

    return (
      <Card className={classes.card} variant="outlined">
        <br/>
        <a href={`/product?cid=${cid}&pid=${item.id}`}>       
          {!props.seller &&  <CardHeader title={item.name}/>}
        
          <CardMedia
          className={classes.media}
          image={`${URL.docs}category/${cid}/img/${item.id}_front.jpg`}
          title={item.name}
          />
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              Brand: {item.brand} <br/>
              Price: {item.price.split(",").join(", ")} <br/>
              Launch date: {item.launchDate} <br/>
              Rating: {item.rating}
              <br/>
              
              {props.seller &&
              sellerView(props.seller) 
              }
          </Typography>
          </CardContent>
        </a>
        <CardActions >
          <Button size="small" color="primary">
            Share
          </Button>
          {!props.seller &&
            <Button href={`/product?cid=${cid}&pid=${item.id}`} size="small" color="primary">
                Learn More
            </Button>
          }
        </CardActions>
      </Card>
    );
  
}