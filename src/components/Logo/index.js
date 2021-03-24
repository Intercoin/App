
import IntercoinImage from 'components/IntercoinImage';

const sources = [
  {
    srcSet: '/assets/images/Intercoin.png 600w, /assets/images/Intercoin.png 960w, /assets/images/Intercoin.png 1280w',
    type: 'image/webp'
  },
  {
    srcSet: '/assets/images/logo/png/green.png 600w, /assets/images/logo/png/green@2x.png 960w, /assets/images/logo/png/green@3x.png 1280w',
    type: 'image/png'
  }
];

const Logo = props => (
  <IntercoinImage
    {...props}
    width={32}
    height={32}
    sources={sources} />
);

export default Logo;
