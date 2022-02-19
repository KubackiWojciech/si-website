const firstDefaultClassName = 'options';
const secondDefaultClassName = 'links';
const defaultTarget = '_blank';

    export const iconsData = [[
        {
            href: 'https://www.facebook.com/',
            src: '/static/telIcon.jpg',
            className: firstDefaultClassName,
            target: defaultTarget
        },
        {
            href: 'https://www.youtube.com/?gl=PL&hl=pl',
            src: '/static/bipIcon.png',
            className: firstDefaultClassName,
            target: defaultTarget
        },
        {
            href: 'https://translate.google.com/?hl=pl',
            src: '/static/englishFlagIcon.png',
            className: firstDefaultClassName,
            target: defaultTarget
        }
    ],
    [
        {
            href: 'https://european-union.europa.eu/principles-countries-history/country-profiles/poland_pl',
            src: '/static/europeFlagIcon.jpg',
            className: secondDefaultClassName,
            target: defaultTarget
        },
        {
            href: 'https://dsc.kprm.gov.pl/',
            src: '/static/cyvilServiceIcon.jpg',
            className: secondDefaultClassName,
            target: defaultTarget
        }
    ]
]