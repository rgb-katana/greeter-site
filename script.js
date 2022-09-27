`use strict`;

// variables
const today = new Date();
const currentHour = today.getHours();
const submitButton = document.querySelector(`.fname-button`);
document.querySelector('.content').classList.add('display');
document.querySelector('.greeting').classList.add('hidden');

// time-block
if (currentHour >= 5 && currentHour <= 11) {
  document.querySelector('.daytime').classList.add('morning');
} else if (currentHour > 11 && currentHour < 18) {
  document.querySelector('.daytime').classList.add('day');
} else if (currentHour >= 18 || currentHour < 5) {
  document.querySelector('.daytime').classList.add('evening');
}

// event-listener
submitButton.addEventListener('click', function () {
  const userName = document.getElementById('fname').value;
  document.querySelector('.content').classList.remove('display');
  document.querySelector('.content').classList.add('hidden');
  document.querySelector('.greeting').classList.remove('hidden');
  document.querySelector('.greeting').classList.add('display');
  if (currentHour >= 5 && currentHour <= 11) {
    document.querySelector('.morning-greet').classList.remove('hidden');
    document.querySelector('.morning-greet').classList.add('display');
    document.getElementById(`morning-image`).style.animation =
      'slidein 2s ease';
    document.getElementById(`morning-greeting`).style.animation =
      'appear 3s ease';
    document.getElementById(
      `morning-greeting`
    ).textContent = `Доброе утро, ${userName}`;
    // document.querySelector('.morning-greeting')
  } else if (currentHour > 11 && currentHour < 18) {
    document.querySelector('.day-greet').classList.remove('hidden');
    document.querySelector('.day-greet').classList.add('display');
    document.getElementById(`image-day`).style.animation = 'slidein 2s ease';
    document.getElementById(`day-greeting`).style.animation = 'appear 3s ease';
    document.getElementById(
      `day-greeting`
    ).textContent = `Добрый день, ${userName}`;
    // document.querySelector('.day-greeting')
  } else if (currentHour >= 18 || currentHour < 5) {
    document.querySelector('.evening-greet').classList.remove('hidden');
    document.querySelector('.evening-greet').classList.add('display');
    document.getElementById(`image-evening`).style.animation =
      'slidein 2s ease';
    document.getElementById(`evening-greeting`).style.animation =
      'appear 3s ease';
    document.getElementById(
      `evening-greeting`
    ).textContent = `Добрый вечер, ${userName}`;
  }
});
