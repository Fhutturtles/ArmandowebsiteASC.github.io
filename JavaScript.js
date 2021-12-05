

function showMain_page(){document.getElementById("Main_Page").style.display="";document.getElementById("Sustainability_Statement_Page").style.display="none";}
function showSustainability_Statement_Page(){document.getElementById("Main_Page").style.display="none";document.getElementById("Sustainability_Statement_Page").style.display="";}


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 600
  })
  .add({
    targets: ' .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: ' .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });