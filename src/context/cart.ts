import { createContext, Dispatch, SetStateAction } from 'react';


export interface ICartContext {
    grandTotal: number
    setGrandTotal: Dispatch<SetStateAction<number>>
}

const defaultValues: ICartContext = {
    grandTotal: 0,
    setGrandTotal: () => {},
}

export const CartContext = createContext(defaultValues);