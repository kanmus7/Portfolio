const msj = "Hello, my name is Sebastian. I'm a social science student with experience in application development with Microsoft Dynamics 365, C#, and JavaScript. I also have experience with web development, including HTML5, CSS3, Javascript, React, and Sass.I also have basic knowledge of Express JS. I'm looking for an opportunity to apply the knowledge acquired in order to benefit your organization while developing myself professionally."
const navOptions = document.querySelectorAll(".nav-selector")
const skillInfo = {

    javaScript: "https://img.icons8.com/color/48/000000/javascript.png",
    html5: "https://img.icons8.com/color/48/000000/html-5.png",
    git: "https://img.icons8.com/color/48/000000/git.png",
    sql: "https://img.icons8.com/color/48/000000/sql.png",
    css: "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
    react: "https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png",
    node: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    sass: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",

    showInfo() {
        const info = `<img class ="skillimg" src="${this.javaScript}" alt="JS" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">
         <img class ="skillimg" src="${this.html5}" alt="HTML5" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">
           <img class ="skillimg" src="${this.git}" alt="GIT" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">
             <img class ="skillimg" src="${this.sql}" alt="SQL" height="50" width="50" style="border-radius: 50%;" aria-hidden="true"> 
              <img class ="skillimg" src="${this.css}" alt="CSS3" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">
              <img class ="skillimg" src="${this.react}" alt="REACT" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">
              <img class ="skillimg" src="${this.node}" alt="NODE" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">
              <img class ="skillimg" src="${this.sass}" alt="SASS" height="50" width="50" style="border-radius: 50%;" aria-hidden="true">`
        return info
    }
}

const aboutInfo = `<p id="main-container-text__p " style=" line-height:2; word-spacing:3px;"> ${msj} </p>`

document.getElementById("main-container-text__p").innerHTML = skillInfo.showInfo()
navOptions.forEach((option, index) => {
    option.addEventListener("click", function () {
        var info = establishInfo(index)
        document.getElementById("main-container-text__p").innerHTML = info
    })
})

const establishInfo = (index) => {
    let info = ""
    switch (index) {
        case 0: return info = "";
        case 1: return info = aboutInfo;
        case 2: return info = skillInfo.showInfo();
    }
}
