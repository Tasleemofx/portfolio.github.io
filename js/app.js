// declarations
const burger = document.querySelector('#burger');
const cross = document.querySelector('#cross')
const showlist = document.querySelector('nav ul');
const bar1 = document.querySelector('.d1');
const bar2 = document.querySelector('.d2');
const bar3 = document.querySelector('.d3')
let projectList= document.querySelectorAll(".project")
const selector = document.querySelector("select")
const htmlCss = document.querySelectorAll(".html-css")
const js = document.querySelectorAll(".js")
const react = document.querySelectorAll('.react')
const node = document.querySelectorAll('.node')
let projectdiv = document.querySelector("#Projects-only")
const themeIcon = document.querySelector('#theme-icon');
const bodyclass = document.querySelector('.go');

// light mode and dark mode

themeIcon.addEventListener("click",()=>{
    if (themeIcon.src === "https://icons.veryicon.com/png/o/weather/color-weather/moon-21.png"){
        themeIcon.src = "https://cdn-icons-png.flaticon.com/512/169/169367.png"
        bodyclass.classList.add('bodyclass')
    }else{
        themeIcon.src = "https://icons.veryicon.com/png/o/weather/color-weather/moon-21.png"
        bodyclass.classList.remove('bodyclass')
}
})
//scroll reveal
ScrollReveal().reveal('#Home',{ delay: 250})
ScrollReveal().reveal('#Skills', { delay: 250 })
ScrollReveal().reveal('.project', { delay: 250 })


//burger interactivity
burger.addEventListener("click",()=>{
    showlist.classList.toggle('show-300')
    showlist.classList.toggle('hidden')
})
cross.addEventListener('click',()=>{
    showlist.classList.toggle('show-300')
    showlist.classList.toggle('hidden')
})
const navUl = document.querySelectorAll('nav ul li');
navUl.forEach((listItem)=>{
    listItem.addEventListener('click',()=>{
        showlist.classList.remove('show-300')
        showlist.classList.add('hidden')
        // setInterval(()=>{
        //     showlist.classList.add('hide')
        // }, 500
    })
})

//select functionality
selector.addEventListener('change', change)

function change() {
    projectList.forEach(item => item.classList.remove('hide'))
    if(selector.value === 'html'){
       [...projectList].filter(item=>{
           if(!(item.classList.contains('html-css'))){
               item.classList.add('hide')
            }
       })
    }else if(selector.value === "all"){
        projectList.forEach(item=> item.classList.remove('hide'))
    } else if (selector.value === "js"){
        [...projectList].filter(item => {
        if (!(item.classList.contains('js'))) {
            item.classList.add('hide')        }
        })
    } else if (selector.value === "react") {
        [...projectList].filter(item =>{
            if (!(item.classList.contains('react'))) {
            item.classList.add('hide')
        }
        })
    }else if(selector.value === "node"){
        [...projectList].filter(item =>{
            if (!(item.classList.contains('node'))){
            item.classList.add('hide')
        }
    })
}
}
