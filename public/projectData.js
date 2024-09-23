import img1 from '../src/assets/image/HONEST-Real-Estate.jpg'
import img2 from '../src/assets/image/king-lion-hotel.jpg'
import img3 from '../src/assets/image/Trek-trob.jpg'
import img4 from '../src/assets/image/red-love-banner.png'
export const projectData = [
    {
        id: 1,
        projectName: 'Red Love',
        projectImg: img4,
        projectLiveUrl: 'https://blood-donation-client-zeta.vercel.app/',
        clientRepo:'https://github.com/ShahAlom47/Blood-Donation-Project',
        serverRepo:'https://github.com/ShahAlom47/Blood-Donation-Server',
        projectDescription: 'RedLove is a blood donation platform that allows users to easily request blood, donate blood, and make one-time or monthly donations. The project is still in development and is currently 70% complete.',
         Features:[
            'Blood Donation',
            'Blood Requests',
            'Monetary Donations',
            'Donation Reminder',
            'Live Chat',
            'Live Notifications',
            'Payment Integration'

        ],
        Technologies:[
            'React,',
            'Tailwind CSS',
            'Node.js (Express.js)',
            'Mongodb',
            'Stripe',
            'Socket.io',
            'EmailJS and Nodemailer'
        ]
    },
    {
        id: 2,
        projectName: 'HONEST Real Estate',
        projectImg: img1,
        projectLiveUrl: 'https://assignment-12-e88ce.web.app/',
        clientRepo:'https://github.com/ShahAlom47/Assignment-12-Real-Estate',
        serverRepo:'https://github.com/ShahAlom47/Assignment-12-Server',
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
        id: 3,
        projectName: 'King  Lion Hotel',
        projectImg: img2,
        projectLiveUrl: 'https://assignmet-11-jwt.web.app/',
        clientRepo:'https://github.com/ShahAlom47/Assignment-11-JWT-Hotel-Booking?tab=readme-ov-file',
        serverRepo:'https://github.com/ShahAlom47/Assignment-11-Jwt-Server',
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
        id: 4,
        projectName: 'TrekTrove',
        projectImg: img3,
        projectLiveUrl: 'https://assaignment-10-with-server.web.app/',
        clientRepo:'https://github.com/ShahAlom47/Assaignment-10-Client',
        serverRepo:'https://github.com/ShahAlom47/Assaignment-10-Server',
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