import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import  userEvent  from '@testing-library/user-event'
import IceCream from '..'

describe('Ice Cream Page', () => {

    test('validate the all fields are filled to show total', async () => {
        render(<IceCream />);

        const volumeInput = screen.getByTestId('volume') as HTMLInputElement;

        const milkCost = screen.getByTestId('milkCost') as HTMLInputElement;

        userEvent.clear(milkCost);

        userEvent.clear(volumeInput);

        await userEvent.type(volumeInput, "9", { delay: 1 }); 

        expect(screen.getByText('$0')).toBeInTheDocument()

        userEvent.click(screen.getByText("Select Option"));

        await waitFor(() => userEvent.click(screen.getByTestId("Strawberry")));

        expect(screen.getByText('$0')).toBeInTheDocument();

        await userEvent.type(milkCost, "100", { delay: 1});

        // total
        expect(screen.getByText('$2,705.67')).toBeInTheDocument()
    });
    
    test('success calculate total with default milk cost', async () => {
        
        render(<IceCream />)
        
        const volumeInput = screen.getByTestId('volume') as HTMLInputElement;

        userEvent.clear(volumeInput);

        await userEvent.type(volumeInput, "111", { delay: 1 }); 
        
        userEvent.click(screen.getByText("Select Option"));

        await waitFor(() => userEvent.click(screen.getByTestId("Vanilla")));

        // total
        expect(screen.getByText('$722.61')).toBeInTheDocument();
   
      })

      test('success calculate total change the milk cost', async () => {
        render(<IceCream />)
        
        const volumeInput = screen.getByTestId('volume') as HTMLInputElement;

        const milkCost = screen.getByTestId('milkCost') as HTMLInputElement;

        userEvent.clear(volumeInput);

        await userEvent.type(volumeInput, "222", { delay: 1 }); 
        
        userEvent.click(screen.getByText("Select Option"));

        await waitFor(() => userEvent.click(screen.getByTestId("Chocolate")));

        userEvent.clear(milkCost);
        
        await userEvent.type(milkCost, "1000", { delay: 1});

        // total
        expect(screen.getByText('$666,215.34')).toBeInTheDocument()
   
      });

      test('success calculate total with Neapolitan flavor', async () => {
        render(<IceCream />)
        
        const volumeInput = screen.getByTestId('volume') as HTMLInputElement;

        const milkCost = screen.getByTestId('milkCost') as HTMLInputElement;

        userEvent.clear(volumeInput);

        await userEvent.type(volumeInput, "33", { delay: 1 }); 
        
        userEvent.click(screen.getByText("Select Option"));

        await waitFor(() => userEvent.click(screen.getByTestId("Neapolitan")));

        userEvent.clear(milkCost);
        
        await userEvent.type(milkCost, "100", { delay: 1});

        // Neapolitan
        expect(screen.getByText('$2.05')).toBeInTheDocument();

        // Total
        expect(screen.getByText('$9,967.65')).toBeInTheDocument();
      });
})