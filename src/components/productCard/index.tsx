import { CardContainer, CardBody } from './styles';
import { useNavigate } from "react-router-dom";

export interface IProductCard {
    name: string;
    url: string;
    sku: number;
    image: any
}

export default function ProductCard({ name, url, sku, image }: IProductCard) {
    const navigate = useNavigate();

    return (
            <CardContainer onClick={() => navigate(url)}>
                <>
                    <img src={image} alt="card__image" width="400" height="350"/>
                </>
                <CardBody>
                    <h2>{name}</h2>
                    <h4>Sku {sku}</h4>
                </CardBody>
            </CardContainer>
    )
}