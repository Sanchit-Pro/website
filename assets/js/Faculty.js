const MAX_VISIBILITY = 3;
export const CARDS = 10;

export const loading = () => ({
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});

export const styleWatcher = (active, index) => {
    return {
        '--active': index === active ? 1 : 0,
        '--offset': (active - index) / 3,
        '--direction': Math.sign(active - index),
        '--abs-offset': Math.abs(active - index) / 3,
        'pointer-events': active === index ? 'auto' : 'none',
        'opacity': Math.abs(active - index) >= MAX_VISIBILITY ? '0' : '1',
        'display': Math.abs(active - index) > MAX_VISIBILITY ? 'none' : 'block',
      };
};