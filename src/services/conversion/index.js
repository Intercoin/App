
import axios from 'axios';

const conversionToDollar = async ({ params }) => (
    axios.post('https://min-api.cryptocompare.com/data/price', params)
);

export {
    conversionToDollar
}
