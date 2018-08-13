const escape = new Date(2018, 7, 13, 19);
const messageDom = document.getElementById('message')


const interverId = setInterval(() => {
  const now = new Date()

  const ms =  escape - now;
  let message;
  if (ms > 0) {
    messageDom.style = 'width: 215px'
    message = msToTime(ms)
  } else {
    messageDom.style = ''
    message = '🎉경🎉   뀨 탈출   🎉축🎉'
  }

  messageDom.innerText = message;
}, 10);

function msToTime(ms) {
  const hour = parseInt(ms / (60 * 60 * 1000));
  // const min = parseInt(ms / (60 ))
  const min = parseInt((ms - (hour * 60 * 60 * 1000)) / (60 * 1000));
  const sec = parseInt((ms - (hour * 60 * 60 * 1000) - (min * 60 * 1000)) / 1000);
  const msec = Math.round(((ms - (hour * 60 * 60 * 1000) - (min * 60 * 1000)) - (sec * 1000)) / 10)

  const hourStr = hour < 10 ? `0${hour}` : `${hour}`
  const minStr = min < 10 ? `0${min}` : `${min}`
  const secStr = sec < 10 ? `0${sec}` : `${sec}`
  const msecStr = msec < 10 ? `0${msec}` : `${msec}`

  return `${hourStr}:${minStr}:${secStr}:${msecStr}`
}

