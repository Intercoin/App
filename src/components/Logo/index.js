
import IntercoinImage from 'components/IntercoinImage';

const sources = [
  {
    srcSet: '/assets/images/intercoin.png 600w, /assets/images/intercoin.png 960w, /assets/images/intercoin.png 1280w',
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
    width={28}
    height={28}
    sources={sources} />
);

export default Logo;
