
import { useState, useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import NumberFormat from 'react-number-format';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Container, FooterContainer, InputsGroup, Total, Content } from './styles';
import { IFlavors } from './iceCream.types';
import { flavorsInitialValues } from './constants';
import Table from '../../components/table';
import { CartContext } from '../../context/cart';


const validationSchema = yup.object({
    volume: yup
        .number()
        .required('Volume is required'),
    flavor: yup
        .number()
        .required('Flavor is required'),
    milkCost: yup
        .number()
        .required('The Milk Cost per Gallon is required')
});

const IceCream = () => {
    const { grandTotal, setGrandTotal } = useContext(CartContext);

    const [flavorOptions, setFlavorOptions] = useState<Array<IFlavors>>(flavorsInitialValues);
    const [total, setTotal] = useState<number>(0)

    const formik = useFormik({
        initialValues: {
            volume: 0,
            flavor: 0,
            milkCost: 2.02,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log('setGranTotal', grandTotal);

    useEffect(() => {

        const { volume, flavor, milkCost } = formik.values;

        if(volume > 0 && flavor !== 0 && milkCost > 0){
            const calculateTotal: number = 3 * volume * milkCost + volume * flavor

            setTotal(parseFloat(calculateTotal.toFixed(2)));
        }
    }, [formik.values]);


    useEffect(() => {
        const priceOfNeapolitan = flavorOptions
        .reduce((acumPrice: number, currentFlavor: IFlavors): number => {
            return acumPrice + currentFlavor.value
        }, 0);

        // find the Neapolitan flavor
        let obj = flavorOptions.find(o => o.name === 'Neapolitan');

        if(!obj){
            const newFlavors: IFlavors[] = [
                ...flavorOptions,
                {
                    name: 'Neapolitan',
                    value: priceOfNeapolitan
                }
            ]
            setFlavorOptions(newFlavors);
        }
    }, [flavorOptions]);

    return (
        <Container>
            <h1>Ice Cream</h1>
            <Content>
                <Table data={flavorOptions}/>
                <form onSubmit={formik.handleSubmit}>
                    <InputsGroup>
                        <TextField
                            fullWidth
                            style={{
                                height: '50px'
                            }}
                            InputLabelProps={{ shrink: true }}
                            id="volume"
                            inputProps={{ "data-testid": "volume" }}
                            name="volume"
                            label="volume"
                            value={formik.values.volume}
                            onChange={formik.handleChange}
                            error={formik.touched.volume && Boolean(formik.errors.volume)}
                            helperText={formik.touched.volume && formik.errors.volume}
                        />
                        <Select
                            fullWidth
                            id="flavor"
                            style={{height: '56px'}}
                            value={formik.values.flavor}
                            name="flavor"
                            label="flavor"
                            onChange={formik.handleChange}
                            error={formik.touched.flavor && Boolean(formik.errors.flavor)}
                        >
                            {
                                flavorOptions.map(
                                    ({ name, value }) => <MenuItem                         
                                        data-testid={name}
                                        key={value} value={value}>
                                            {name}
                                        </MenuItem>
                                )
                            }
                        </Select>
                        <NumberFormat
                            fullWidth
                            value={formik.values.milkCost}
                            style={{
                                height: '50px'
                            }}
                            label="milkCost"
                            name="milkCost"
                            inputProps={{ "data-testid": "milkCost" }}
                            customInput={TextField}
                            prefix={'$'}
                            allowNegative={false}
                            thousandSeparator={true}
                            fixedDecimalScale={true}
                            decimalSeparator={'.'}
                            type="text"
                            helperText={formik.touched.milkCost && formik.errors.milkCost}
                            error={formik.touched.milkCost && Boolean(formik.errors.milkCost)}
                            onValueChange={(values) => {
                                const { value } = values;
                                formik.setFieldValue('milkCost', parseFloat(value));
                            }}
                        />
                    </InputsGroup>
                </form>
            </Content>
            <FooterContainer>
                        <Total>
                            <h3>Total </h3> 
                            <NumberFormat
                                value={total}
                                data-testid="total-value"
                                prefix={'$'}
                                allowNegative={false}
                                thousandSeparator={true}
                                fixedDecimalScale={true}
                                type="text"
                                displayType={'text'}
                            />
                        </Total>
                        <Button 
                        disabled={(total === 0)}
                        onClick={() => setGrandTotal(grandTotal + total)}
                        color="primary" variant="contained" type="submit">
                            Add to Cart
                        </Button>
            </FooterContainer>   
        </Container>
    );
};

export default IceCream;
