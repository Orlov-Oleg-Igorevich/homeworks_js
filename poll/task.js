'use strict'

async function getPollData() {
  let pollTitle = document.getElementById('poll__title');
  let pollAnswers = document.getElementById('poll__answers');
  let response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
  let responseJson = await response.json();
  pollTitle.textContent = responseJson['data']['title'];
  for (let answer of responseJson['data']['answers']) {
    let newAnswer = document.createElement('button');
    newAnswer.className = 'poll__answer';
    newAnswer.textContent = answer;
    newAnswer.onclick = (event) => {
      alert("Спасибо, ваш голос засчитан!");
      getStatistics(responseJson['data']['answers'].findIndex(value => value == event.target.textContent), responseJson['id']);
    }
    newAnswer.onmouseover = (event) => {
      newAnswer.style.backgroundColor = '#c5ecfc';
    }
    newAnswer.onmouseout = (event) => {
      newAnswer.style.backgroundColor = '#F0F0F0';
    }
    pollAnswers.append(newAnswer);
  }
}

async function getStatistics(number_answer, number_poll) {
  let pollAnswers = document.getElementById('poll__answers');
  let response = await fetch('https://students.netoservices.ru/nestjs-backend/poll', {
    method: "POST",
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: `vote=${number_poll}&answer=${number_answer}`,
  });
  let responseJson = await response.json();
  pollAnswers.textContent = '';
  let sumVotes = responseJson['stat'].reduce((sum, current) => sum += current['votes'], 0)
  for (let answer of responseJson['stat']) {
    let newP = document.createElement('p');
    newP.innerHTML = `<b>${answer['answer']}</b>: ${(answer['votes'] / sumVotes * 100).toFixed(2)}%`
    pollAnswers.append(newP);
  }
}

getPollData();