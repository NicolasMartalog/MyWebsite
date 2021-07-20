const typedTextSpan = document.querySelector(".typed-text"); 
const curosrSpan = document.querySelector(".cursor"); 

const textArray = ["Hello", "Bonjour", "Hola", "Zdravstvuyte", "Salve", "Konnichiwa",
"Guten Tag", "Ola", "Anyoung haseyo", "Goddag", "Shikamoo", "Selamat siang", "Namaste, Namaskar"]; 
const typingDelay = 200; 
const erasingDelay = 100; 
const newTextDelay = 2000; 
let textArrayIndex = 0; 
let charIndex = 0;     

const faders = document.querySelectorAll('.fade-in'); 
const sliders = document.querySelectorAll('.slide-in'); 
const appearOptions = {
    threshold: .5 
    
}; 

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return; 
        } else {
            entry.target.classList.add('appear'); 
            appearOnScroll.unobserve(entry.target); 
        }
    }); 
}, appearOptions);  

faders.forEach(fader => {
    appearOnScroll.observe(fader); 
}); 

sliders.forEach(slider => {
    appearOnScroll.observe(slider); 
}); 



window.onload = () => { 
    const transitio_el = document.querySelector('.transition'); 
    const anchors = document.querySelectorAll('.current'); 

    setTimeout(() => {
        transitio_el.classList.remove('is-active'); 
    }, 500);  

    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i]; 

        anchor.addEventListener('click', e => {
            e.preventDefault(); 
           let target = e.target.href; 

            transitio_el.classList.add('is-active');  

            setTimeout(() => {
                window.location.href = target; 
            }, 500); 
        }); 
    }
}



window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contact-form");
   // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success'); 
      status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add('error'); 
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  } 




function type(){
    if(charIndex < textArray[textArrayIndex].length)
    {
        if(!curosrSpan.classList.contains("typing")) curosrSpan.classList.add("typing"); 
        typedTextSpan.textContent +=  textArray[textArrayIndex].charAt(charIndex); 
        charIndex += 1; 
        setTimeout(type, typingDelay); 
    } 
    else{ 
        curosrSpan.classList.remove("typing");
        setTimeout(erase, typingDelay);
    }
} 

function erase(){
    if (charIndex > 0)
    { 
        if(!curosrSpan.classList.contains("typing")) curosrSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--; 
        setTimeout(erase, erasingDelay);
    } 
    else{
        curosrSpan.classList.remove("typing");
        textArrayIndex++; 
        if (textArrayIndex >= textArray.length) textArrayIndex = 0; 
        setTimeout(type, typingDelay + 1100); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
})

let theme = localStorage.getItem('theme') 

// sets the page to light mdoe at first 
// then it finds it grabs the value and sets the new light mode
if(theme == null)
{
    setTheme('light')
}
else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('themed-dot')

for(var i = 0; themeDots.length > i; i++)
{
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("options clicked", mode)
        setTheme(mode)
    })
} 

// Setting Color theme 
function setTheme(mode){ 

    if(mode == 'light')
    {
        document.getElementById('theme-style').href = 'light.css'
    } 

    if(mode == 'blue')
    {
        document.getElementById('theme-style').href = 'blue.css'
    } 

    if(mode == 'green')
    {
        document.getElementById('theme-style').href = 'green.css'
    } 

    if(mode == 'purple')
    {
        document.getElementById('theme-style').href = 'purple.css'
    }  

    if(mode == 'red')
    {
        document.getElementById('theme-style').href = 'red.css'
    }  

    if(mode == 'yellow')
    {
        document.getElementById('theme-style').href = 'yellow.css'
    } 
    if(mode == 'pink')
    {
        document.getElementById('theme-style').href = 'pink.css'
    } 
    // saves the new light mode in local Storage
    localStorage.setItem('theme', mode)

} 

