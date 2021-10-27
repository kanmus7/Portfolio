const msj = "Hi!, my name is Sebastian Gómez and  i'm currently 26 years old.I'm studying Web development and Social Siencies.I really like reading, video games, chess, training my body, listening to music, sharing conversations and thoughts with my family and friends, etc.      I am very interested in relevant social problems such as discrimination, the society of control, fascism or neo fascism, and among other current ethical and moral issues."
const navOptions = document.querySelectorAll(".nav-selector")

const skillInfo = {
    javaScript: "https://img.icons8.com/color/48/000000/javascript.png",
    html5: "https://img.icons8.com/color/48/000000/html-5.png",
    git: "https://img.icons8.com/color/48/000000/git.png",
    sql: "https://img.icons8.com/color/48/000000/sql.png",
    css: "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",

    showInfo() {
       const info = `<img src="${this.javaScript}" alt="JS" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">  <img src="${this.html5}" alt="HTML5" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">  <img src="${this.git}" alt="GIT" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">  <img src="${this.sql}" alt="SQL" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">  <img src="${this.css}" alt="CSS3" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">`
        return info
    }
}

const aboutInfo = `<p id="main-container-text__p " style=" line-height:2; word-spacing:3px;"> ${msj} </p>`

navOptions.forEach((option,index) =>{
    option.addEventListener("click", function (){
        var info =  establishInfo(index) 
        document.getElementById("main-container-text__p").innerHTML = info
    })
})

const establishInfo = (index) =>{
    let info = ""
   switch (index){
    case 0:  return info = "";
    case 1:  return info = aboutInfo;      
    case 2: return info =  skillInfo.showInfo();      
   }
}


if (window.matchMedia("(max-width:780px)").matches) {
    const body = document.querySelectorAll("body")
    /* Llamar al elemento que despliega el parrafo, el aboun */

  }