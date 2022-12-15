# Project Bodytracking Taichi

You can check the online project [here](https://bt-taichi.vercel.app/).

# Documentation

## Getting Started

This project was made using Typescript, React.js and Next.js

To run it you will need:

- [NodeJs](https://nodejs.org/en/)

First, clone the project with:

```bash
git clone https://github.com/BrenoHA/bodytracking-taichi.git
```

Then, it's necessary to install all the dependencies listed within package.json in the local node_modules folder. For that you can use:

```bash
npm install
# or
yarn install
```

After, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Files structure

- pages (All the pages of the project)

  - \_app.tsx (App configuration page)
  - index.tsx (Home page)
  - donnees.tsx (Dataset page)
  - mouvements
    - [id].tsx (Dynamic Routes for each movement page)
    - index.tsx (Movements page)

- public (All public images of the project)

  - members (Image of all participants of the project)

  - all images

- src

  - components

    - pages

      - all page components

    - all components

  - interface

    - Iproperty (Interface from the properties of each movement)

  - data

## React.js

A JavaScript library for building user interfaces.
[React.js](https://reactjs.org/)

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Chackra UI

[Chackra UI](https://chakra-ui.com/), accessible component library that gives you the building blocks you need to build your React applications

## Deploy on Vercel

The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
