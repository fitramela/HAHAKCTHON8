let Qjs = [
  {
    question: `javascript 1`,
    answer: `javascript 1`,
    pilgan: [`javascript 1`,`javascript 2`,`javascript 3`,`javascript 4`]
  },
  {
    question: `data science 1`,
    answer: `data science 1`,
    pilgan: [`data science 1`,`data science 2`,`data science 3`,`data science 4`]
  },
  {
    question: `javascript 2`,
    answer: `javascript 2`,
    pilgan: [`javascript 1`,`javascript 2`,`javascript 3`,`javascript 4`]
  },
  {
    question: `data science 2`,
    answer: `data science 2`,
    pilgan: [`data science 1`,`data science 2`,`data science 3`,`data science 4`]
  },
  {
    question: `javascript 3`,
    answer: `javascript 3`,
    pilgan: [`javascript 1`,`javascript 2`,`javascript 3`,`javascript 4`]
  },
  {
    question: `data science 3`,
    answer: `data science 3`,
    pilgan: [`data science 1`,`data science 2`,`data science 3`,`data science 4`]
  },
  {
    question: `javascript 4`,
    answer: `javascript 4`,
    pilgan: [`javascript 1`,`javascript 2`,`javascript 3`,`javascript 4`]
  },
  {
    question: `data science 4`,
    answer: `data science 4`,
    pilgan: [`data science 1`,`data science 2`,`data science 3`,`data science 4`]
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

function dataBase() {
  if (!localStorage.getItem("js")) {
      localStorage.setItem('js', 0)
  }
  if (!localStorage.getItem("ds")) {
      localStorage.setItem('ds', 0)
  }
  // Cek jika total skor js dan ds sudah 10
  let scoreJs = parseInt(localStorage.getItem('js'));
  let scoreDs = parseInt(localStorage.getItem('ds'));
  // if (scoreJs + scoreDs >= 10) {
  //   document.body.innerHTML = '<h1>Selamat anda cocok masuk hahackton8</h1>'; // Tampilkan pesan dan hentikan fungsi lainnya
  //   return;
  // }
  if (scoreJs + scoreDs >= 10) {
    if (scoreJs > scoreDs) {
      document.body.innerHTML = '<h1>Selamat, anda cocok masuk fsjs</h1>'
    } else if (scoreDs > scoreJs) {
      document.body.innerHTML = '<h1>Selamat, anda cocok masuk ds</h1>'
    } else if (scoreDs === score) {
      document.body.innerHTML = '<h1>Selamat, anda cocok masuk fsjs ataupun ds</h1>'
    }
  }
}

dataBase()

const index = getRandomIndex(Qjs.length)
const QuestionFu = Qjs[index]
// console.log(QuestionFu);
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
  const semuaSalahElements = document.getElementsByClassName('jawaban');

  for (let elem of semuaSalahElements) {
    if (elem.id.startsWith('salah')) {
      elem.style.display = 'none';
    }
  }

  if (jawaban === answer) {
    if (index % 2 === 0){
      let scoreJs = parseInt(localStorage.getItem('js'))
      scoreJs += 1
      localStorage.setItem('js', scoreJs)
    } else {
      let scoreDs = parseInt(localStorage.getItem('ds'))
      scoreDs += 1
      localStorage.setItem('ds', scoreDs)
    }
    benarElement.style.display = "block"
    bener(animasiBenar)
    const buttonElements = document.getElementsByTagName('button');
    for (let i = 0; i < buttonElements.length; i++) {
      buttonElements[i].disabled = true;
    }
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  } else {
    if (!salahElement.getAttribute('data-shown')) {
      salahElement.style.display = "block"
      salah(animasiSalah)
      salahElement.setAttribute('data-shown', 'true');
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