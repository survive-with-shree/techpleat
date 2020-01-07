import style from './style';

const s = Object.create(style);

s.feed = {
  marginTop: '1.5vh'
}

s.productList = {
  display: 'flex',
  flexDirection: 'row'
}

s.productCard = {
  margin: '3vh 0',
  width: '350px'
};

s.productImg = {
  height: '400px'
}

s.timeline = {
  textAlign: "center"
};

s.column = {
  padding: "0.25vw",
  justifyContent: "center"
};


s.row = {
  marginTop: "1vh"
}

s.md = {
  marginRight: "0.5vh",
  padding: "10px"
}

s.heading = {
  paddingLeft: "2vh"
}

export default s;
