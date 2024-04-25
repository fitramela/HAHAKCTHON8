let Qjs = [
  {
    question: `let myObj = {
      sayHello() {
        return 'Hello there!';
      }
    }`,
    answer: `myObj.sayHello()`,
    pilgan: [`myObj['sayHello']`, `myObj.sayHello()`, `myObj.sayHello`, `sayHello()`]
  },
  { // ini ds
    question: `What is not part of the data flow in supporting decision making?`,
    answer: `Data Preparation`,
    pilgan: [`Data Question`, `Data Decision`, `Data Preparation`, `Business Analysis`]
  },
  {
    question: `let meatballs = {
      cost: 5,
      withDiscount() {
        
      }
    };`,
    answer: `return this.cost - 2;`,
    pilgan: [`cost - 2;`, `this.cost - 2;`, `return cost - 2;`, `return this.cost - 2;`]
  },
  { // ini ds
    question: `What is the most basic need of data science?`,
    answer: `Collect`,
    pilgan: [`Collect`, `Explore/ Transform`, `Move/Store`, `Learn/Optimise`]
  }, {
    question: `Which of the following statements is correct?`,
    answer: `Objects store unordered data of any type as key-value pairs.`,
    pilgan: [`Objects can’t store other objects.`, `Objects store data in numbered positions.`, `Objects only store strings.`, `Objects store unordered data of any type as key-value pairs.`]
  }, { // ini ds
    question: `Which of the following are Continuous Quantitative Data?`,
    answer: `Time & Height`,
    pilgan: [`Observations & Time`, `Observations & Errors`, `Time & Height`, `Time & Errors`]
  }, {
    question: `Which of the following Object methods can be used to copy all of the properties of an object into a new object?`,
    answer: `Object.assign()`,
    pilgan: [`Object.assign()`, `Object.keys()`, `Object.entries()`, `myObject.hasOwnProperty()`]
  }, { // ini ds
    question: `What is the main rule for data analysis?`,
    answer: `Plot the data`,
    pilgan: [`Collect data`, `Present the graph`, `Plot the data`, `Choose the right chart`]
  }, {
    question: `What is a factory function?`,
    answer: `A function that returns an object.`,
    pilgan: [`A function that returns an array of objects.`, `A function that takes an object as an argument and then modifies it.`, `A function that returns an object.`]
  }, { // ini ds
    question: `Which of the following is true?`,
    answer: `Means are lies!`,
    pilgan: [`Means are correct!`, `Means with confidence intervals are lies!`, `Means are lies!`, `Means with confidence intervals are incorrect!`]
  }, {
    question: `const car = {
      numDoors: 4,
      isDirty: true,
      color: 'red'
    }
    
    for (let key in car) {
      console.log(key)
    }`,
    answer: `numDoors
    isDirty
    color
    `,
    pilgan: [`numDoors: 4
    isDirty: true
    color: red
    `, `4
    true
    red
    `, `numDoors
    isDirty
    color
    `]
  }, { // ini ds
    question: `Which of the following is false?`,
    answer: `Always stick to 1 collection method.`,
    pilgan: [`Always stick to 1 collection method.`, `Surveys and Focus groups are primary data collection methods.`, `Financial Reports and Internets are secondary data collection methods.`, `Combination of tools is the best way for getting valid and confirmed data.`]
  }, {
    question: `let tempObj = {
      _num: 22,
      get num() {
        return this._num;
      }
    };`,
    answer: `console.log(tempObj.num());`,
    pilgan: [`console.log(tempObj._num);`, `console.log(tempObj.num);`, `console.log(tempObj['num']);`, `console.log(tempObj.num());`]
  }, { // ini ds
    question: `Why do we need to prepare data?`,
    answer: `All of the above.`,
    pilgan: [`All of the above.`, `Data might have outliers.`, `Data might need to be transformed.`, `Data might be invalid.`]
  }, { // ini ds
    question: `Which are the 2 approaches of Data Analysis?`,
    answer: `Historical Data & Experimentation `,
    pilgan: [`Historical Data & Graphical Data Analysis`, `Historical Data & Experimentation`, `Experimentation & Regression Analysis`, `Experimentation & Hypothesis Testing`]
  }, {
    question: `const refrigerator = {
      dairy: ['cheese', 'milk', 'sour cream'],
      temperature: 35,
      'produce drawer': {
        vegetables: ['lettuce', 'broccoli', 'peas'],
        fruit: ['apples', 'berries', 'grapes'] 
      }
    }`,
    answer: `refrigerator['produce drawer'].fruit[0]`,
    pilgan: [`refrigerator['produce drawer']`, `refrigerator.'produce drawer'.fruit[0]`, `refrigerator.temperature`, `refrigerator['produce drawer'].fruit[0]`]
  }, {
    question: `let bikes = {
      schwinn: 'blue',
      trek: 'black'
    }`,
    answer: `bikes['specialized'] = 'red';`,
    pilgan: [`let bikes.specialized = 'red'`, `bikes['specialized'] = 'red';`, `bikes.'specialized' = 'red';`, `bikes = specialized: 'red';`]
  }, { // ini ds
    question: `Which is not a tool for Statistical Data Analysis?`,
    answer: `Histogram`,
    pilgan: [`Histogram`, `Linear & Non-linear Regression`, `Logistic Regression`, `ANOVA`]
  }
]
const codeElement = document.getElementById('codeElement')
const pilgan = document.getElementById('pilgan')
const usedIndexes = []
function getRandomIndex(i) {
  let index = Math.floor(Math.random() * i)
  while (usedIndexes.includes(index)) {
    index = Math.floor(Math.random() * i)
  }
  usedIndexes.push(index)
  return index
}
const QuestionFu = Qjs[getRandomIndex(Qjs.length)]
console.log(QuestionFu);
codeElement.innerHTML = QuestionFu.question
for (const i in QuestionFu.pilgan) {
  const answer = QuestionFu.answer;
  const pilihan = QuestionFu.pilgan[i];
  const button = document.createElement('button');
  button.textContent = pilihan;
  button.onclick = function () {
    cekJawaban(pilihan, i, answer);
  };
  const benarDiv = document.createElement('div');
  benarDiv.className = 'jawaban';
  benarDiv.id = 'benar' + i;
  benarDiv.style.display = 'none';
  const animasiBenarDiv = document.createElement('div');
  animasiBenarDiv.className = 'animasi';
  animasiBenarDiv.id = 'animasi-benar' + i;
  const answerBenarDiv = document.createElement('div');
  answerBenarDiv.className = 'answer';
  answerBenarDiv.textContent = 'Benar sekali';
  benarDiv.appendChild(animasiBenarDiv);
  benarDiv.appendChild(answerBenarDiv);
  const salahDiv = document.createElement('div');
  salahDiv.className = 'jawaban';
  salahDiv.id = 'salah' + i;
  salahDiv.style.display = 'none';
  const animasiSalahDiv = document.createElement('div');
  animasiSalahDiv.className = 'animasi';
  animasiSalahDiv.id = 'animasi-salah' + i;
  const answerSalahDiv = document.createElement('div');
  answerSalahDiv.className = 'answer';
  answerSalahDiv.textContent = 'Asu lu!';
  salahDiv.appendChild(animasiSalahDiv);
  salahDiv.appendChild(answerSalahDiv);
  pilgan.appendChild(button);
  pilgan.appendChild(benarDiv);
  pilgan.appendChild(salahDiv);
}
function cekJawaban(jawaban, id, answer) {
  let benarElement = document.getElementById('benar' + id)
  let salahElement = document.getElementById('salah' + id)
  let animasiBenar = document.getElementById('animasi-benar' + id)
  let animasiSalah = document.getElementById('animasi-salah' + id)
  if (jawaban === answer) {
    benarElement.style.display = "block"
    bener(animasiBenar)
  } else {
    salahElement.style.display = "block"
    salah(animasiSalah)
  }
  const buttonElements = document.getElementsByTagName('button');
  for (let i = 0; i < buttonElements.length; i++) {
    let bt = buttonElements[i]
    bt.disabled = true;
    const valB = bt.textContent
    if (valB === jawaban){
      bt.classList.add("btn-benar")
    }
  }
}
function bener(anim) {
  const animationBenar = bodymovin.loadAnimation({
    container: anim,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'anim/jempol.json'
  });
}
function salah(anim) {
  const animationSalah = bodymovin.loadAnimation({
    container: anim,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'anim/Animation - 1713954478607.json'
  });
}