import img1 from '../src/assets/image/HONEST-Real-Estate.jpg'
import img2 from '../src/assets/image/king-lion-hotel.jpg'
import img3 from '../src/assets/image/Trek-trob.jpg'
export const projectData = [
    {
        id: 1,
        projectName: 'HONEST Real Estate',
        projectImg: img1,
        projectLiveUrl: 'https://assignment-12-e88ce.web.app/',
        projectDescription: 'HONEST Real Estate is a modern web app for streamlined real estate transactions. Featuring secure authentication, Stripe payment integration, and role-based dashboards, built with React, Tailwind CSS, Firebase, and Node.js.',
        Features:[

            'User Authentication',
            'Payment Integration',
            'Role-Based Dashboards'

        ],
        Technologies:[
            'React,',
            'Tailwind CSS',
            'Firebase ',
            'Node.js (Express.js)',
            'Mongodb',
            'Stripe',
        ]
    },
    {
        id: 2,
        projectName: 'King  Lion Hotel',
        projectImg: img2,
        projectLiveUrl: 'https://assignmet-11-jwt.web.app/',
        projectDescription: 'This hotel booking system enables users to seamlessly book rooms and manage reservations, supported by robust user authentication for security and ease of access.',
        Features:[

            'User Authentication',
            'Real-time Data Storage',
            'Review System'

        ],
        Technologies:[
            'React,',
            'Tailwind CSS',
            'Firebase ',
            'Node.js (Express.js)',
            'Mongodb',
        ]

    },
    {
        id: 3,
        projectName: 'TrekTrove',
        projectImg: img3,
        projectLiveUrl: 'https://assaignment-10-with-server.web.app/',

        projectDescription: 'TrekTrove is a single-page website showcasing various tourist spots. Users can explore destinations, view spot details, and access additional information',
        Features:[

            'Explore a variety of tourist destinations',
            'Secure login required to access detailed spot information',
            'Users can add spots to their list, edit them, or delete them as needed.'

        ],
        Technologies:[
            'React,',
            'Tailwind CSS',
            'Firebase ',
            'Node.js (Express.js)',
            'Mongodb',
        ]

    }
]