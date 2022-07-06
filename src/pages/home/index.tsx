import ProductCard from '../../components/productCard'
import { HomeContainer } from './styles';
import IceCreamImage from '../../assets/icecream.jpeg';
// import FrozenPizza from '../../assets/frozenpizza.jpeg';

const products = [
    {
        sku: 1,
        name: 'Ice Cream',
        url: '/ice-cream',
        image: IceCreamImage
    },
    // {
    //     sku: 2,
    //     name: 'Frozen Pizza',
    //     url: '/frozen-pizza',
    //     image: FrozenPizza
    // }
];

export default function Home(){
    return(
        <HomeContainer>{
            products.map((product) => <ProductCard {...product}/>)
        }</HomeContainer>
    )
}

