# TailBit
TailBit - A Simple But beautiful Component Library for Tailwind CSS using React and Typescript

**Component Documentation** - https://maniruzzamanakash.github.io/tailbit/storybook-static/

**NPM Directory** - https://www.npmjs.com/package/tailbit

> Note: Not Production Ready yet.
-----

## Installation
```sh
npm i tailbit
```

## How to Use

#### Button Component

**Simple Button**
```tsx
import { Button } from 'tailbit';
<Button
    text="Sign Up"
    type="primary"
>
```

**Button with Custom Design**
```tsx
import { Button } from 'tailbit';
<Button
    buttonCustomClass="bg-red-400 hover:bg-white hover:text-black text-white"
    onClick={() => { console.log('clicked)}}
    text="Custom Button Example"
/>
```

**Button with Font Awesome Icon & Outline**

```tsx
import { Button } from 'tailbit';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

<Button
    icon={faPlusCircle}
    onClick={() => {}}
    outline
    text="Icon Button Left"
    type="primary"
/>
```

## Storybook Documentation
```sh
npm run storybook
```
It will open your browser window the documentation of our library at http://localhost:6006


## Changelog
`v0.0.5` - **9 April 2022**
    - [Doc] Added documentation for `Button` Component

`v0.0.4` - **9 April 2022**
    - [Fix] Fixed tailwind style was not loading

`v0.0.3` - **9 April 2022**
    - [Fix] Fixed a `package.json` peerDependency issue

`v0.0.2` - **9 April 2022**
    - [Add] Added Storybook Documentation

`v0.0.1` - **29 March 2022**
    - [Add] Added Button Component

## Contribution
It's open to contribute in Tailbit.
Just create a `Pull Request` with your bug request, feature or new component.
