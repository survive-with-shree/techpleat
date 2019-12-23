import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import * as URL from '../utils/url';
import s from '../styles/home.style';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      category: []
    };
  }

  componentDidMount() {
    fetch(`${URL.docs}/category/index.json`)
      .then(res => res.json())
      .then(
        (result) => {
          console.debug(result)
          this.setState({
            isLoaded: true,
            category: result.category
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
    return (
      <div>
        <div style={s.pageLinkContainer}>
          <ol>
            {this.state.category.map((item, index) => (
              <li key={index}>
                <Interactive
                  as={Link}
                  {...s.link}
                  to={`/category?cid=${item.toLowerCase()}`}>
                  {item}
                </Interactive>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
