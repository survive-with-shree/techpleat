import style from './style';

const s = Object.create(style);

s.productList = {
  display: 'flex',
  flexDirection: 'row'
}

s.productCard = {
  margin: '3vh 0',
  width: '350px'
};

s.productImg = {
  height: '700px'
}

export default s;
