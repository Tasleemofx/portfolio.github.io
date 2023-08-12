// declarations
const burger = document.querySelector('#burger');
const cross = document.querySelector('#cross')
const showlist = document.querySelector('nav ul');
const bar1 = document.querySelector('.d1');
const bar2 = document.querySelector('.d2');
const bar3 = document.querySelector('.d3')
let projectList;
const selector = document.querySelector("select")
const htmlCss = document.querySelectorAll(".html-css")
const js = document.querySelectorAll(".js")
const react = document.querySelectorAll('.react')
const node = document.querySelectorAll('.node')
let projectdiv = document.querySelector("#Projects-only")
const toggletheme = document.querySelector('.toggle');
const indicator = document.querySelector(' .indicator');
const bodyclass = document.querySelector('body');
const homebg= document.querySelector('#Home')

const sections = document.querySelectorAll('section');
// light mode and dark mode

toggletheme.addEventListener("click",()=>{
    indicator.classList.toggle("active")
    bodyclass.classList.toggle("bodyclass")
})


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






// Show projects

    let projects = [{
        name: "Ecommerce website",
    imgsrc: "images/ecommerce.png",
    description: "A full ecommerce website made with fakestore api, complete with flutterwave card checkout",
    skills: ["html5", "css3-alt", "bootstrap", 'react', "git-alt", "github", "node", "js"],
        classes: ["react", "html-css"],
    github: "https://github.com/Tasleemofx/ecommercefsapi",
    livesite: "https://ecommercefsapi.vercel.app/"
            
        },
        {
            name: "Lendsqr",
            imgsrc: "images/lendsqr.png",
            description: "Created with vite, Lendsqr homepage and dashboard with data from a REST API",
            skills: ["html5", "css3-alt", "git-alt", "github", "js", "react", "sass", "typescript"],
            classes: ["react", "ts", "html-css"],
            github: "https://github.com/Tasleemofx/lendsqr-fe-test",
            livesite: "https://tesleem-oladepo-lendsqr-fe-test.vercel.app/"
        },
    {
        name: "Apple and Banana website clone",
    imgsrc: "images/applenbanana.png",
    description: "A multi-page react app with a Landing page, an articles page and an about page",
    skills: ["html5", "css3-alt", 'react', "git-alt", "github", "js"],
        classes: ["react", "html-css"],
    github: "https://github.com/Tasleemofx/appleandbanana",
    livesite: "https://appleandbanana.vercel.app/"

         },
    {
        name: "Crypto News API",
    imgsrc: "images/CryptoUpdates.png",
    description: "Crypto News Webscraper built using web scraper API made with node and express.js. Gets up to date news from trusted news websites",
    skills: ["html5", "css3-alt", 'react', "git-alt", "github", "js"],
        classes: ["react", "node", "html-css"],
    github: "https://github.com/Tasleemofx/webscrapper",
        livesite: "https://webscrapperfrontend.vercel.app/News"
              
            },
    {
        name: "Admin Dashboard",
    imgsrc: "images/admin.png",
    description: "An ecommerce website's admin dashboard",
    skills: ["html5", "css3-alt", 'react', "git-alt", "github", "js"],
        classes: ["react", "html-css"],
    github: "https://github.com/Tasleemofx/admin-dashboard",
    livesite: "http://admin-dashboard-beryl.vercel.app/"

         },
    {
        name: "An Ecommerce product page",
    imgsrc: "images/sneakers.png",
    description: "An ecommerce product page built with react (Hooks)",
    skills: ["html5", "css3-alt", 'react', "git-alt", "github", "js"],
        classes: ["react", "html-css"],
    github: "https://github.com/Tasleemofx/ecommerce",
    livesite: "https://sneakers-iota.vercel.app/"

         },
    {
        name: "Giftlabs",
    imgsrc: "images/giftlabs.png",
    description: "A gift shop website build with React, Typescript and Sass",
    skills: ["html5", "css3-alt", 'react', "git-alt", "github", "js", "sass", "typescript"],
        classes: ["react", "html-css", "ts"],
    github: "https://github.com/Tasleemofx/giftLabs",
    livesite: "https://gift-labs.vercel.app/"
         },
    {
        name: "Country list and information",
    imgsrc: "images/countries.png",
    description: "A react app built using REST API showing information about each country with a filter function to search",
    skills: ["html5", "css3-alt", 'react', "git-alt", "github", "js", ],
        classes: ["react", "html-css"],
              github: "https://github.com/Tasleemofx/countrylist",
                livesite: "http://countrylist-rouge.vercel.app/"
              },
    {
        name: "Landing page design",
    imgsrc: "images/ajocard.png",
    description: "AjoCard Landing page",
    skills: ["html5", "css3-alt", "git-alt", "github", "js"],
        classes: ["html-css"],
        github: "https://github.com/Tasleemofx/ajocard",
        livesite: "https://tasleemofx.github.io/ajocard/"
         }

    ]
 
   
    let h4elem = document.createElement('h4');
    projects.map(({ name, imgsrc, description, skills, classes, github, livesite})=>{
        let maindiv = document.createElement('div');
        // add image tag and link
        let image = document.createElement('img');
        image.src = imgsrc;
        image.alt = "webcast";
        maindiv.appendChild(image);
        // add h3 heading
        let h3elem = document.createElement('h3');
        h3elem.innerText = name;
        maindiv.appendChild(h3elem);
        // add description
        let descriptionp = document.createElement('p')
        descriptionp.innerText = description 
        maindiv.appendChild(descriptionp);
        // add h4 heading
        maindiv.appendChild(h4elem)
        // add paragraph
        let para = document.createElement('p')
        // skills map
       skills.forEach((item)=>{
            let icontag = document.createElement('i')
            icontag.classList.add('fab')
            icontag.classList.add('fa-brands')
            icontag.classList.add(`fa-${item}`)
            para.appendChild(icontag)
        })
       
        maindiv.appendChild(para)
        
        // create links to github and livesite
        let githublink = document.createElement('a')
        let livelink = document.createElement('a')
        let gbtn = document.createElement("button")
        let lbtn = document.createElement("button")
        gbtn.innerText = "Code on Github";
        lbtn.innerText = "Live site"
        gbtn.classList.add("code")
        lbtn.classList.add("live")
        githublink.appendChild(gbtn)
        livelink.appendChild(lbtn)
        githublink.href =github
        githublink.target ="_blank"
        livelink.target = "_blank"
        livelink.href=livesite

        maindiv.appendChild(githublink)
        maindiv.appendChild(livelink)
        maindiv.classList.add("project")

        classes.map(item => maindiv.classList.add(item))
        projectdiv.appendChild(maindiv)
        projectList = document.querySelectorAll(".project")
    })
 
    // select functionality
selector.addEventListener('change', change)

function change() {
    projectList.forEach((item)=>item.classList.remove("hide"))
    if(selector.value === 'html'){
        [...projectList].filter(item=>{
            if(!(item.classList.contains("html-css"))){
                item.classList.add("hide")
            }
        })

    }else if(selector.value === "all"){
        projectList.forEach((item) => item.classList.remove("hide"))
    } else if (selector.value === "ts"){
        [...projectList].filter(item=>{
            if(!(item.classList.contains("ts"))){
                item.classList.add("hide")
            }
        })
    } else if (selector.value === "react") {
        [...projectList].filter(item=>{
            if(!(item.classList.contains("react"))){
                item.classList.add("hide")
            }
        })
    }else if(selector.value === "node"){
        [...projectList].filter(item=>{
            if(!(item.classList.contains("node"))){
                item.classList.add("hide")
            }
    })
}

}



window.addEventListener("scroll", animate)
function animate(){
sections.forEach(item=>{
    let windowheight = window.innerHeight
    let revealtop = item.getBoundingClientRect().top
    let revealbottom = item.getBoundingClientRect().bottom
    let revealpoint = 150
        if(revealtop < windowheight - revealpoint){
        item.classList.add('scroll')
        }else{
            item.classList.remove('scroll')
        }
})
}