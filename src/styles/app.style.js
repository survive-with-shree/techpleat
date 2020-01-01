import style from './style';

const s = Object.create(style);

s.rootContainer = {
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};

s.body = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  padding: '7vh 0vw',
  left: '50vw',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};


s.titleBar = {
  background: 'linear-gradient(60deg, rgb(287, 35, 337), rgb(229, 57, 53))',
  color: 'white',
  padding: '3vh 8px',
  marginBottom: '0.5vh'
};

s.title = {
  fontWeight: "800",
  textAlign: "center", 
  fontSize: "50px", 
  textAlign: "right"
};

s.slogan = {
  fontWeight: "400",
  paddingLeft: "1.5vw",
  textAlign: "center"
};

s.social = {
  textAlign: "center"
};

s.footer = {
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "4vh"
};

s.repoLink = {
  fontSize: '14px',
};

s.creditLine = {
  width: "100%",
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px',
  textAlign: "center"
};

export default s;
