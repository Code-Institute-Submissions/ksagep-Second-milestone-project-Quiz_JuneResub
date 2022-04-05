const Questions = [{
        id: 0,
        question: "Where does coffee come from?",
        answers:[{ text: "Ethiopia", isCorrect: true },
                 { text: "Italy", isCorrect: false },
                 { text: "France", isCorrect: false },
                 { text: "from a nearby store", isCorrect: false }]        
    },

    {
        id: 1,
        question: "Which is not a roasting method?",
        answers:[{ text: "Spanish", isCorrect: false },
                 { text: "Italian", isCorrect: false },
                 { text: "Frenc", isCorrect: false },
                 { text: "British", isCorrect: true }]        
    },

    {
        id: 2,
        question: "What color is the ripe coffee berry?",
        answers:[{ text: "Yellow", isCorrect: false },
                 { text: "Green", isCorrect: false },
                 { text: "Red", isCorrect: true },
                 { text: "Blue", isCorrect: false }]        
    },

    {
        id: 3,
        question: "There is really no caffeine in decaffeinated coffee?",
        answers:[{ text: "Yes, it is true", isCorrect: false },
                 { text: "No, it is not true (decaffeinated coffee contains 2-6% caffeine)", isCorrect: true },
                 { text: "Maybe, it is true", isCorrect: false },
                 { text: "What does decaffeinated coffee mean?", isCorrect: false }]        
    },

    {
        id: 4,
        question: "Where they produce the most coffee in the world?",
        answers:[{ text: "Vietnam", isCorrect: false },
                 { text: "Brasil", isCorrect: true },
                 { text: "Ethiopia", isCorrect: false },
                 { text: "India", isCorrect: false }]        
    },

    {
        id: 5,
        question: "What is not the main characteristic of robusta coffees?",
        answers:[{ text: "acidic", isCorrect: false },
                 { text: "high in caffeine", isCorrect: false },
                 { text: "dark brown", isCorrect: true },
                 { text: "full-bodied", isCorrect: false }]
    },

    {
        id: 6,
        question: "What is not the main characteristic of arabica coffees?",
        answers:[{ text: "sweeter than the robusta", isCorrect: false },
                 { text: "low in caffeine", isCorrect: false },
                 { text: "light-bodied", isCorrect: false },
                 { text: "smaller beans", isCorrect: true }]
    },

    {
        id: 7,
        question: "When coffee was discovered?",
        answers:[{ text: "15th century", isCorrect: true },
                 { text: "16th century", isCorrect: false },
                 { text: "17th century", isCorrect: false },
                 { text: "19th century", isCorrect: false }]
    },

    {
        id: 8,
        question: "What percentage of the coffee stays warm if we add cream to it?",
        answers:[{ text: "10%", isCorrect: false },
                 { text: "20%", isCorrect: true },
                 { text: "30%", isCorrect: false },
                 { text: "if you have a microwave oven, always", isCorrect: false }]
    },

    {
        id: 9,
        question: "In which country do people drink the most coffee?",
        answers:[{ text: "USA", isCorrect: false },
                 { text: "Finland", isCorrect: true },
                 { text: "Russia", isCorrect: false },
                 { text: "Vietnam", isCorrect: false }]
    }
]

/** Set start **/
var start = true;

/** Iterate **/
function Iterate(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    question.innerText = Questions[id].question;

    /** Get the options and provide option text**/
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    /** The false and true value to the options **/
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
}

