const eventTime = Date.UTC(2026, 10, 15, 17, 0, 0); // 7 PM in Cairo (UTC+2)
const pad = value => String(value).padStart(2, '0');
function updateCountdown() {
  const remaining = Math.max(0, eventTime - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  document.querySelector('#days').textContent = pad(days);
  document.querySelector('#hours').textContent = pad(hours);
  document.querySelector('#minutes').textContent = pad(minutes);
  document.querySelector('#seconds').textContent = pad(seconds);
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector('#wish-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#guest-name').value.trim();
  const message = document.querySelector('#wish-message').value.trim();
  const subject = encodeURIComponent(`A wish for Yousef & Lili from ${name}`);
  const body = encodeURIComponent(`Dear Yousef and Lili,\n\n${message}\n\nWith love,\n${name}`);
  window.location.href = `mailto:Yousefbasem124@gmail.com?subject=${subject}&body=${body}`;
});
