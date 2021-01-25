const blocksMap = [
    {
        id: 1,
        texts: ['Welcome to Money Advisor! My name is Robert.  Would you like some free help about virtual currencies?'],
        btnsText: ['Yes', 'No'],
        btnsValue: [1, 1,],
        btnsType: 'choose an answer',
        btnsSelection: '',
        checkbox: [],
        finished: false
    },
    {
        id: 2,
        texts: ['Great! I\'ve already helped over a hundred people today.', 'I need to ask you some questions so I can help you.', 'What is your experience with digital currency?'],
        btnsText: ['Send'],
        btnsValue: [2],
        btnsType: 'choose at least one',
        btnsSelection: '',
        checkbox: ['Beginner', 'Intermediate', 'Experienced'],
        finished: false
    },
    {
        id: 1,
        texts: ['Great.'],
        btnsText: [],
        btnsValue: [],
        btnsType: '',
        btnsSelection: '',
        checkbox: [],
        finished: false
    },
]
export default blocksMap;