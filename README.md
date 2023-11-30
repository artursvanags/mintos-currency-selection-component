# Currency Selection Component

This repository hosts a straightforward selection container component for FIAT currencies, developed in Next.js 14 using the currency-list library. It includes automated testing with Jest to ensure the component functions correctly.

You can view the live version of the application [here](https://mintos-currency-selection-component.vercel.app//).

## Tool-Stack

- **Next.js (14)**: React-based framework for building web applications with server-side rendering and hot module replacement during development.
- **Tailwind CSS**: Utility-first CSS framework used for rapid UI development with pre-built classes for styling components.
- **shadcn/ui**: Re-usable components built using Radix UI and Tailwind CSS to quickly develop the component.
- **currency-list**: Library for accessing a list of FIAT currencies.
- **Jest**: JavaScript testing framework used for unit and integration testing.
- **@testing-library/react**: Testing utilities for React applications.
- **ESLint**: JavaScript/TypeScript linter for identifying and fixing code errors.
- **Prettier**: Opinionated code formatter for maintaining consistent code styles.


## Getting Started

To begin working with this project, follow these steps:

1. Duplicate the `.env.template` file and rename it to `.env`. You can execute this via the command line:
   ```bash
   cp .env.template .env
   ```
2. Launch your terminal and navigate to the project directory. You can do this through the command line:
   ```bash
   cd project-directory
   ```
3. Install all dependencies by running the following command:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Initiate the development server by executing the following command:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Running Tests

After installing all dependencies, execute the Jest test function to ensure proper functionality:

   ```bash
   npm run test
   # or
   yarn test
   # or
   pnpm test
   ```

## Basic features

- **Mobile-first Design:** The component prioritizes a mobile-first approach, ensuring an optimal user experience on various mobile devices.
- **Search & Filters:** The component has a basic search function, including an option to select all, clear and copy selected items to clipboard.
- **Theme Toggle Functionality:** Users have the option to switch between light and dark modes for reduced eye strain. The component also utilizes system settings to determine the default UI theme.

## Deployment on Vercel

The most straightforward way to deploy this Next.js app is by using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the developers of Next.js.