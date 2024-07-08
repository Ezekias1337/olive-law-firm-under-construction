// Redirect after 10 seconds
setTimeout(function () {
  window.location.href = "https://www.osa-law.com/";
}, 10000);

// Set the initial countdown time
let countdownTime = 10;

// Function to update the countdown timer
const updateCountdown = () => {
  if (countdownTime > 0) {
    document.getElementById('redirect-timer').innerText = `Redirecting in ${countdownTime} seconds...`;
    countdownTime--;
  } else {
    window.location.href = "https://www.osa-law.com/";
  }
};

// Update the countdown every second
setInterval(updateCountdown, 1000);
