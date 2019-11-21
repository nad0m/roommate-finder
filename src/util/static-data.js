export const occupationData = [
    "Student", "Employed: Full-time", "Employed: Part-time", "Unemployed"
];

export const attributesData = [
    "Tidy & neat", "Cooks frequently", "Has or wants pet(s)", 
    "Drives a car", "Smokes cigarettes", "Order take-outs frequently",
    "Can share Amazon Prime", "Can share Netflix", "Plays video games often"
];

export const sidebarData = [
    {
        title: {
            text: 'About You'
        },
        content: [
            {
                text: 'Monthly budget',
                checked: true
            },
            {
                text: 'Occupation',
                checked: true
            },
            {
                text: 'Attributes',
                checked: true
            },
        ]
    },
    {
        title: {
            text: 'Your Preferences'
        },
        content: [
            {
                text: 'Preferred location',
                checked: true
            },
            {
                text: 'Preferred gender',
                checked: true
            },
            {
                text: 'Household size',
                checked: false
            },
            {
                text: 'Type of housing',
                checked: false
            }
        ]
    },
    {
        title: {
            text: 'Logistics'
        },
        content: [
            {
                text: 'Duration',
                checked: true
            },
            {
                text: 'Home schedule',
                checked: true
            },
            {
                text: 'Bathroom ratio',
                checked: false
            },
        ]
    }
]