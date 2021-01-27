window.blockMap = [
    {
        id: 1,
        textQuestions: ['Welcome to Money Advisor! My name is Robert.  Would you like some free help about virtual currencies?'],
        btnsType: 'choose an answer',
        btns: [
            {
                text: 'Yes',
                valueTo: 1,
                handler: ()=>console.log("yes")
            },
            {
                text: 'No',
                valueTo: 1,
                handler:  ()=>console.log("no")
            },
        ],
        checkbox: [],
        btnsSelection: '',
        finished: false
    },
    {
        id:2,
        textQuestions: ['Great! I\'ve already helped over a hundred people today.', 'I need to ask you some questions so I can help you.', 'What is your experience with digital currency?'],
        btnsType: 'choose at least one',
        btns: [
            {
                text: 'Send',
                valueTo: 2,
                handler: () => { console.log('send') }
            }
        ],
        checkbox: [
            {
                text: 'Beginner',
                handler: () => console.log('Beginner')
            },
            {
                text: 'Intermediate',
                handler: () => console.log('Intermediate')
            },
            {
                text: 'Experienced',
                handler: () => console.log('Experienced')
            },
        ],
        btnsSelection: '',
        finished: false
    },
    {
        id: 3,
        textQuestions: ['Great.'],
        btnsType: 'go to the site',
        btns: [
            {
                text: 'Go',
                valueTo: 2,
                handler: () => window.location.href='https://google.com'
            },
            {
                text: 'GoGo',
                valueTo: null,
                handler: () => console.log('jmak')
            },

        ],
        checkbox: [],
        btnsSelection: '',
        finished: false
    },
]


window.test = JSON.parse(JSON.stringify(window.blockMap))