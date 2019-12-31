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
    width: "100%",
    justifyContent: "center",
    textAlign: "center"
  },
  media: {
    height: 250,
    backgroundSize: "contain"
  },
});

const sellerView = (seller) => {
    let currencyList = Object.keys(seller) 
    return (
        <div>
            <br/>
            {currencyList.map( (currency) => (
                <div>
                    {seller[currency].map((vendor) => (
                        <div>
                            <Button variant="outlined" size="small" color="primary" href={vendor.link}> 
                                {vendor.vendor.toUpperCase()}: {vendor.price} {currency} 
                            </Button>
                        </div>))
                    }
                </div>
            ))}
        </div>
    )
}

export default function ProductCard(props) {
    const classes = useStyles();
    const item = props.productItem;
    const cid = props.categoryId;

    return (
        <div>
        <Card className={classes.card} variant="outlined">
            <br/>
            <a href={`/?cid=${cid}&pid=${item.id}`} style={{textAlign: "center"}}>
                {!props.seller &&  <CardHeader title={item.name}/>}
            </a>
            <a href={`/?cid=${cid}&pid=${item.id}`} style={{textAlign: "center"}}>
                <CardMedia
                    className={classes.media}
                    image={`${URL.docs}category/${cid}/img/${item.id}_front.jpg`}
                    title={item.name}
                />
            </a>
            <CardContent>
                Brand: {item.brand} <br/>
                Price: {item.price.split(",").join(", ")} <br/>
                Launch date: {item.launchDate} <br/>
                Rating: {item.rating}
                <br/>
                
                {props.seller &&
                sellerView(props.seller) 
                }
            </CardContent>
        
            <CardActions >
            <Button size="small" color="primary">
                Share
            </Button>
            {!props.seller &&
                <Button href={`/?cid=${cid}&pid=${item.id}`} size="small" color="primary">
                    Learn More
                </Button>
            }
            </CardActions>
        </Card>
        </div>
    );
  
}