import { useContext } from 'react';
import NumberFormat from 'react-number-format';
import { useNavigate } from "react-router-dom";
import { Container, GrandTotal } from './styles';
import { CartContext } from '../../context/cart';


export default function NavBar() {
    const { grandTotal } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Container>
            <h1 onClick={() => navigate('/')}>Price Calculator</h1>
            <GrandTotal>
                <h4>Grand Total</h4>
                <NumberFormat
                    value={grandTotal}
                    prefix={'$'}
                    allowNegative={false}
                    thousandSeparator={true}
                    fixedDecimalScale={true}
                    type="text"
                    displayType={'text'}
                />
            </GrandTotal>
        </Container>
    )
}