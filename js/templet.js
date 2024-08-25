//Start bollets
let Bullets = document.querySelectorAll(".nav-bullets .bullet");

scrolltosomewaer( Bullets);

//End bullets

//start translit by links

let alllinks = document.querySelectorAll(".landing-page .header .menu li a");

scrolltosomewaer(alllinks);

// end translit by links

// Building function

function scrolltosomewaer(elements){

    elements.forEach(function(ev){

    ev.addEventListener('click',e =>{
    
        e.preventDefault();
        
        document.querySelector(e.target.dataset.tool).scrollIntoView({
            behavior:'instant'
        });
    });
}); 
}



//chick the color in local storage

mainColor=localStorage.getItem("color_option");
//console.log(mainColor);
if( mainColor !== null ){
    //used the value in local storege
    document.documentElement.style.setProperty("--main-color", mainColor);
    //remove the class active when onload the page
    document.querySelectorAll(".color-list li").forEach( element =>{
        
        element.classList.remove("active");
            //add active to element after onload the page
            if(element.dataset.color === mainColor){

            element.classList.add("active");
            }
    });
}
let backgroundValue = true ;
let backgroundInterval;

//chick the background in local storage
mainbackground=localStorage.getItem("background-option");

if( mainbackground !== null ){
    //used the value in local storege

    if( mainbackground === 'true'){
    backgroundValue = true ;
    changeback();
    }else{
    backgroundValue = false ;
    }
    document.querySelectorAll(".random-image span").forEach( element =>{
        
        element.classList.remove("active");
            //add active to element after onload the page
            if(mainbackground === 'true'){

            document.querySelector(".random-image .yes").classList.add("active");
            
            }else{
                document.querySelector(".random-image .no").classList.add("active");
            }
    });
}
// start sitting
document.querySelector(".sitting i").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".sitting-container").classList.toggle("open");
}

//end sitting

// Biulding function to add and remove class active

function handelactive(e){
    //remove active from all elemant
    e.target.parentElement.querySelectorAll(".active").forEach( element =>{
        element.classList.remove("active");
    });
    //add class active to element
    e.target.classList.add("active");
};

//start change the color
const colorLi=document.querySelectorAll(".color-list");
colorLi.forEach(li =>{
    li.addEventListener("click", (e)=>{
                document.documentElement.style.setProperty("--main-color", e.target.dataset.color );
                //set color in local storage
                localStorage.setItem("color_option",e.target.dataset.color);
                //remove active from all elemant
                handelactive(e);
        });
}); 
//End change the color

//remove and add class active with element to change backgrond Image
const backgrel=document.querySelectorAll(".random-image span");
backgrel.forEach(span =>{
    span.addEventListener("click", (e)=>{
                
                handelactive(e);
                
                if(e.target.dataset.background === 'yes' ){
                    
                    backgroundValue = true;
                    changeback();
                    localStorage.setItem("background-option", backgroundValue );
            }else{
                    backgroundValue = false;   
                    clearInterval(backgroundInterval);
                    localStorage.setItem("background-option", backgroundValue );
                }
    });
});
// end remove

// show bullets or hidden

let showBullet = document.querySelectorAll(".bullets-option span");
let containerBullets = document.querySelector(".nav-bullets");
let bulletlocalitem = localStorage.getItem("bullet-opction");

if(bulletlocalitem !== null){

    showBullet.forEach(span =>{
        
        span.classList.remove("active");

    });

    if( bulletlocalitem === 'block'){
        containerBullets.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{
        containerBullets.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}


showBullet.forEach( span =>{
    span.addEventListener('click',(e)=>{
        
        if(span.dataset.display === 'show'){

                containerBullets.style.display = 'block';
                localStorage.setItem("bullet-opction" ,"block");
        }else{

                containerBullets.style.display = 'none';
                localStorage.setItem("bullet-opction","none");

        }
        handelactive(e);

    });
});








let landing = document.querySelector(".landing-page");

let imgsArry =[ "01.jpg" , "02.jpg" , "03.jpg" , "04.jpg" , "06.jpg" ];

//change the backgroundImage
function changeback (){
if( backgroundValue === true){

    backgroundInterval = setInterval(()=>{

    let random=Math.floor(Math.random()*imgsArry.length);

    landing.style.backgroundImage = 'url("imgs/'+imgsArry[random]+'")';

        },1000);
    }
}
//End change the backgroundImage

//setting toggle mnue

document.querySelector(".toggale-menu").onclick=function(){
    
    document.querySelector(".menu").classList.toggle("open");
}
//select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){

    //skills offsetTop 
    let skillOffsetTop = ourSkills.offsetTop;
    
    //skills outer height
    let skillouterHeight = ourSkills.offsetHeight;
    
    //window height
    let windowheight = this.innerHeight;
    
    //window scroll top
    let windowscrollTop = this.pageYOffset;
    
    if(windowscrollTop > skillOffsetTop + skillouterHeight - windowheight){
        let skillall = document.querySelectorAll(".box-skill .progres span");
    
    skillall.forEach(skill => {
    
        skill.style.width = skill.dataset.progres;
    
        });
    
    }
};


//event click in our gallery

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img =>{
    
    img.addEventListener( "click" , (e)=>{
        
        //creat overlay element
        let overlay = document.createElement("div");
        
        // add class name to element
        overlay.className = 'popup-overlay';
        
        // append overlay to body
        document.body.appendChild(overlay);

        //creat popup box
        let popupBox = document.createElement('div');

        // add class name to element
        popupBox.className = 'popup-box';

        // creat headen 
        if (img.alt !== null){

            let popupHeaden = document.createElement("h3");

            // creat text to heahen
            let textHeaden =document.createTextNode(img.alt);
            
            // append text to headen
            popupHeaden.appendChild(textHeaden);

            // append headen in popup box
            popupBox.appendChild(popupHeaden);

        }

        //creat popup image
        let popupImage = document.createElement('img');

        // add image sourse
        popupImage.src = img.src ;

        // append popupImage to popupBox
        popupBox.appendChild(popupImage);

        // append popupBox to body
        document.body.appendChild(popupBox);

        // create close span
        let popupButtom = document.createElement("span");

        // add clase 
        popupButtom.className='popup-buttom';

        // create text close buttom
        let textButtom = document.createTextNode('X');

        // append text in span
        popupButtom.appendChild(textButtom);

        // append close buttom in popup box
        popupBox.appendChild(popupButtom);

    });
});

    // remove popup box and overlay

    document.addEventListener('click', function(e){
    
        if(e.target.className==='popup-buttom'){

            // remove popup box
            e.target.parentNode.remove();
            // remove overlay
            document.querySelector(".popup-overlay").remove();

        }
    });













