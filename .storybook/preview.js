import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// import tailwindCss from '!style-loader!css-loader!postcss-loader!sass-loader!tailwindcss/tailwind.css';
// const storybookStyles = document.createElement('style');
// storybookStyles.innerHTML = tailwindCss;
// document.body.appendChild(storybookStyles);

// import globalCss from '!style-loader!css-loader!sass-loader!../src/scss/style.scss';
// const storybookGlobalStyles = document.createElement('style');
// storybookGlobalStyles.innerHTML = globalCss;
// document.body.appendChild(storybookGlobalStyles);
