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


//burger interactivity
burger.addEventListener("click",()=>{
    showlist.classList.add('show-300')
})
cross.addEventListener('click',()=>{
    showlist.classList.remove('show-300')
})
const navUl = document.querySelectorAll('nav ul li');
navUl.forEach((listItem)=>{
    listItem.addEventListener('click',()=>{
        showlist.classList.remove('show-300')
    })
})

//select functionality
selector.addEventListener('change', change)

function change() {
    if(selector.value === 'html'){
        projectList.innerHTML = [...htmlCss]
        .forEach(item=> {
        console.log(item.innerHTML)
        return item.innerHTML
        })
        
    }
}

