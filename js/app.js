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



//scroll reveal


//burger interactivity
burger.addEventListener("click",()=>{
    showlist.classList.add('show-300')
    showlist.classList.remove('hidden')
})
cross.addEventListener('click',()=>{
    showlist.classList.remove('show-300')
    showlist.classList.add('hidden')
})
const navUl = document.querySelectorAll('nav ul li');
navUl.forEach((listItem)=>{
    listItem.addEventListener('click',()=>{
        showlist.classList.remove('show-300')
        showlist.classList.add('hidden')
        setInterval(()=>{
            showlist.classList.add('hide')
        }, 500)        
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