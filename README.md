## Price Calculator

Hi, I'm Nicolas and this is the test solution for Reason Consulting


# run

```sh
npm i  && npm start

```
# run test 

```sh
 npm run test

```

## Solution


## Test

Due to a matter of time, I carried out the integration tests on the IceCream page, with these tests I am testing the complete price calculation flow, with several variants that the user could use

## Why Typescript ?

typescript is a tool that I like to use a lot since it allows new people who read my code to have a deeper understanding and it is much easier to understand the development of the application

## Why Context ?

I have always said that you have to scale and strengthen the application as it grows, in this case I use context to perform the [Bonus FN-3] since it allows me to store the grand total of all SKUs in one place regardless of the page that the user is visiting

## Styles
use Material UI as main UI library for speed, but I always like to make my own styles, in this case I use very few Material UI components and some other styles I create using styled-components.

# Organization
Modules structure

create a page for each product, since the data received in each one is very different, there is no standard for how the data arrives, so that makes it difficult to create a single page that handles the logic of all products, since we would have to create many conditionals to make it work correctly, which I don't see as a good thing to do.

```
.
├──/src
│   
│   ├──/assets -> all images
│   └──/components -> global components 
│   │    ├──/navbar
│   │    ├──/productCard
│   │    ├──/table
│   │
│   └── /context -> here we can store more context that are necessary in the future
│   │    ├──/cart.ts
│   │    ├──/provider.ts -> Here I create a custom provider where I have all the logic used in the Cart
│   │
│   └── /pages
│   │    ├──/__test__
│   │    ├──/home
│   │    │   ├──index.tsx
│   │    │   └──styles.tsx
│   │    ├──/IceCream
│   │         ├──/__test__
│   │         └──constanst.ts
│   │         └──iceCream.types.ts
│   │         └──index.tsx
│   │         └──styles.ts
│   └── App.tsx
│   │
│   └── index.tsx
│   │
│   └── ...others configuration files
├── .tsconfig
├── .README.md
└── ...others configuration files
```

# Trade-offs

I was a bit sick the two days after they sent me the test, because of the time I couldn't finish the logic for Frozen Pizza, the logic I would have used would be the same as for Ice Cream but on a larger scale, it's the only thing I need to finish because all the logic that I have in Ice Cream and the bonuses are complete

# Author 
Nicolas Restrepo

# License 

MIT
