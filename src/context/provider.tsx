import React, { useState, useEffect } from "react";
import { CartContext } from './cart'

interface IProviderCart {
   children: React.ReactNode
}

export default function ProviderCart({ children }: IProviderCart ) {
    const [ grandTotal, setGrandTotal ] = useState<number>(0);
   

    return (
        <CartContext.Provider value={
            {
                grandTotal, setGrandTotal
            }
        }
        >
            {children}
        </CartContext.Provider>
    )

}