# Carrotier - E-commerce shop

This repository contains the code for the E-commerce web application built using Next.js. The project utilizes various technologies and tools such as Husky, TypeScript, Redux Toolkit, ESLint, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Roadmap](#roadmap)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Acknowledgements](#acknowledgements)

## Features

- **Home page:** Lists products and links to navigate around the website.
- **Cart:** View/Edit/Delete cart items.
- **Wishlist:** View/Edit/Delete wishlist items.
- **Filters:** Filter products based on categroies.

> **Warning**
> This website is a work in progress. So features will keep getting added as the development proceeds.

## Roadmap

- [x] ~navbar~
- [x] ~home page~
- [x] ~my cart~
- [x] ~my wishlist~
- [x] ~product detail page~

## Prerequisites

Before setting up the project, make sure you have the following installed on your machine:

- Node.js (version >= 16.14.0)
- npm (version > 7.0.0)

## Installation

#### Installing Node.js and npm on Ubuntu

1. Update the package repository:

```bash
sudo apt Update
```

2. Install Node.js:

```bash
sudo apt install nodejs
```

3. Install npm ubuntu with the code below.

```bash
sudo apt install npm
```

4. Verify the installation by checking the Node.js and npm versions:

```bash
node --version
npm --version
```

#### Installing Node.js and npm on Windows

1. Visit the official [Node.js website ](https://nodejs.org)
2. Download the latest LTS version of Node.js for Windows.
3. Run the installer and follow the installation wizard.
4. After installation, open the Command Prompt or PowerShell and verify the Node.js and npm versions:

```bash
node --version
npm --version
```

#### Running project locally

To run this project locally, follow these steps:

1. Clone the repository using HTTPS:

```bash
git clone https://github.com/carr-o-t/carrotier.git
```

or

Clone the repository using SSH (if you have set up an SSH key):

```bash
git clone git@github.com:carr-o-t/carrotier.git
```

2. Navigate to the project directory:

```bash
cd carrotier
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

Open your web browser and visit `http://localhost:3000` to access the application.

> while running the project locally, if you encounter the >following error, please consider upgrading your `nodejs` version.

## Technology Stack

- [Next.js](https://nextjs.org): A React framework for building server-rendered applications.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that enhances code quality and developer productivity.
- [Redux Toolkit](https://redux-toolkit.js.org/): A A powerful state management tool.
- [ESLint](https://eslint.org): A pluggable JavaScript linter that helps identify and fix common code issues.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for building custom user interfaces.
- [Shadcn UI](https://ui.shadcn.com/): A collection of re-usable components built using Radix UI and Tailwind CSS.

## Folder Structure

The project follows a common folder structure for a Next.js application:

- `/components`: Contains reusable React components.
- `/app`: contains pages route
- `/public`: Stores static assets such as images and fonts.
- `/app/globals.css`: Holds global CSS styles and Tailwind CSS configuration.
- `/redux`: Holds the app states.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
