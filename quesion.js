const Question = () => {
  let Q = [
    {
      question: `let myObj = {
              sayHello() {
                return 'Hello there!';
              }
            }`,
      answer: `myObj.sayHello()`,
      pilgan: [`myObj['sayHello']`, `myObj.sayHello`, `sayHello()`]
    },
    {
      question: `let meatballs = {
              cost: 5,
              withDiscount() {
          
              }
          };`,
      answer: `return this.cost - 2;`,
      pilgan: [`cost - 2;`, `this.cost - 2;`, `return cost - 2;`]
    },
    {
      question: `Which of the following statements is correct?`,
      answer: `Objects store unordered data of any type as key-value pairs.`,
      pilgan: [`Objects can’t store other objects.`, `Objects store data in numbered positions.`, `Objects only store strings.`]
    },
    {
      question: `Which of the following Object methods can be used to copy all of the properties of an object into a new object?`,
      answer: `Object.assign()`,
      pilgan: [`Object.keys()`, `Object.entries()`, `myObject.hasOwnProperty()`]
    },
    {
      question: `What is a factory function?`,
      answer: `A function that returns an object.`,
      pilgan: [`A function that returns an array of objects.`, `A function that takes an object as an argument and then modifies it.`]
    },
    {
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
          `]
    },
    {
      question: `let tempObj = {
              _num: 22,
              get num() {
                  return this._num;
              }
          };`,
      answer: `console.log(tempObj.num());`,
      pilgan: [`console.log(tempObj._num);`, `console.log(tempObj.num);`, `console.log(tempObj['num']);`]
    },
    {
      question: `let apartment = {
              coffeeMaker: 'Aeropress',
              ceilingFan: true,
              books: 114
            }`,
      answer: `coffeeMaker,
          ceilingFan,
          books`,
      pilgan: [`'Aeropress',
          true,
          114`, `coffeeMaker: 'Aeropress',
          ceilingFan: true,
          books: 114`]
    },
    {
      question: `const refrigerator = {
              dairy: ['cheese', 'milk', 'sour cream'],
              temperature: 35,
              'produce drawer': {
                vegetables: ['lettuce', 'broccoli', 'peas'],
                fruit: ['apples', 'berries', 'grapes'] 
              }
            }`,
      answer: `refrigerator['produce drawer'].fruit[0]`,
      pilgan: [`refrigerator['produce drawer']`, `refrigerator.'produce drawer'.fruit[0]`, `refrigerator.temperature`]
    },
    {
      question: `let bikes = {
              schwinn: 'blue',
              trek: 'black'
            }`,
      answer: `bikes['specialized'] = 'red';`,
      pilgan: [`let bikes.specialized = 'red'`, `bikes.'specialized' = 'red';`, `bikes = specialized: 'red';`]
    },
    {
      question: `What is a method?`,
      answer: `A method is a property with a function as its value.`,
      pilgan: [`A method is a general term used to describe how to create objects.`, `A method is a function that takes an object as its parameter.`]
    },
    {
      question: `const myDog = {
              name: 'Tadpole',
              breed: 'mutt',
              color: 'tan',
              weight: 32
            }
            `,
      answer: `let {name} = myDog;
          `,
      pilgan: [`let name = myDog.name;`, `let {name} = myDog.name;`, `let color = 'tan';`]
    },
    {
      question: `Which is the correct syntax for creating an object literal?`,
      answer: `
          let myObject = {
            greeting: 'hello'
          };`,
      pilgan: [`let myObject: {
              greeting = 'hello'
            };`, `let myObject; {
              greeting: 'hello'
            };`, `let myObject = {
              greeting = 'hello'
            };`]
    },
    {
      question: `let tempObj = {
              _num: 22,
              set num(numIn) { 
                _num = numIn;
              }
            };`,
      answer: `The setter should contain this._num in place of _num.`,
      pilgan: [`The setter input argument should be called num.`, `There is nothing wrong with the method.`, `The _num key should not have an underscore (_) in it.`]
    },
  ]
  index = getRandomIndex(Q.length)
  return Q[index]
}

const usedIndexes = []
function getRandomIndex(i) {
  let index = Math.floor(Math.random() * i)

  while (usedIndexes.includes(index)) {
    index = Math.floor(Math.random() * i)
  }

  usedIndexes.push(index)
  return index
}

// console.log(Question());

const questionElement = document.getElementById('question')
const codeElement = document.getElementById('codeElement')
const answerElement = document.getElementById('answer')

const QuestionFu = Question()
codeElement.innerHTML = QuestionFu.question

for (const i in QuestionFu.pilgan) {
  const pilihan = QuestionFu.pilgan[i]
  const element = `
      <div class="radio-item">
        <input name="radio" id="radio${i}" type="radio">
        <label for="radio${i}">${pilihan}</label>
      </div>
      <div class="jawaban" id="jawaban${i}" style='display: none;'>
        <div class="animasi" id="animasi-benar${i}"></div>
        <div class="answer">Benar sekali</div>
      </div>
      <div class="jawaban" id="salah${i}" style='display: none;'>
        <div class="animasi" id="animasi-salah${i}"></div>
        <div class="answer">Salah sekali</div>
      </div>`;

  answerElement.innerHTML += element
}

const label = document.getElementsByTagName('label')
// for (const x of label){
//   console.log(x);
// }
console.log(salah());

function bener(){
  document.getElementById('jawaban0').style.display = "block"
  const animationBenar = bodymovin.loadAnimation({
    container: document.getElementById(`animasi-benar0`),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'anim/jempol.json'
  });
}
function salah(){
  document.getElementById('salah0').style.display = "block"
  const animationSalah = bodymovin.loadAnimation({
    container: document.getElementById(`animasi-salah0`),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'anim/Animation - 1713954478607.json'
  });
}