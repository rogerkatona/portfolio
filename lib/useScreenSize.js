import {useEffect} from "react";

export const useScreen = (screen = '') => {
    // "Theme" is an alias to where you keep your tailwind.config.js - most likely your project root
    const screens = require('/tailwind.config.js').theme.screens;

    // create a keyed object of screens that match
    const matches = Object.entries(screens).reduce((results, [name, size]) => {
        const mediaQuery = typeof size === 'string' ? `(min-width: ${size})` : `(max-width: ${size.max})`;

        results[name] = window.matchMedia(mediaQuery).matches;

        return results;
    }, {});

    // show all matches when there is no screen choice
    if (screen === '') {
        return matches;
    }

    // invalid screen choice
    if (!screens[screen]) {
        console.error(`No match for "${screen}"`);

        return false;
    }

    return matches[screen];
};