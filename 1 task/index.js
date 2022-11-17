const timer = document.querySelector('.timer__time');
const input = document.querySelector('.timer__input');
const button = document.querySelector('.timer__btn');

function timeFormat(sec) {
  const hours = Math.floor(sec / 60 / 60);
  const minutes = Math.floor(sec / 60) - (hours * 60);
  const seconds = sec % 60;

  return `
  ${hours.toString().padStart(2, '0')}:
  ${minutes.toString().padStart(2, '0')}:
  ${seconds.toString().padStart(2, '0')}
  `;
}

button.addEventListener('click', () => {
  const val = input.value;
  const timeArr = val.split(':');
  const hours = timeArr[0];
  const minutes = timeArr[1];
  const seconds = timeArr[2];

  let totalSeconds = (hours * 60 * 60) + (minutes * 60) + Number(seconds);

  const time = setInterval(() => {
    if (totalSeconds < 1) {
      clearInterval(time);
      timer.textContent = '00:00:00';
      button.disabled = false;
    } else {
      timer.textContent = timeFormat(totalSeconds);
      button.disabled = true;
      totalSeconds -= 1;
    }
  }, 1000);

  input.value = '';
});
