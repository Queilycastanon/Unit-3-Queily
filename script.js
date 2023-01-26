/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title"); 
let StoryPart = document.querySelector(".story-opening"); 
let Bottons = document.querySelector (".buttons"); 
let StoryPart2Yes = document.querySelector(".option-one"); 
let StoryPart2no = document.querySelector(".option-two"); 
let StoryPart2Yesscreen = document.querySelector(".option-one-screen"); 
let StoryPart2noscreen = document.querySelector(".option-two-end"); 
let StoryPart3yes = document.querySelector(".option-one-end"); 



// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
 StoryPart2Yes.onclick=function(){
 StoryPart2Yesscreen.style.display="block";
     StoryPart2noscreen.style.display="none";
};

StoryPart2Yesscreen.onclick=function(){
 StoryPart3yes.style.display="block";
};
StoryPart2Yesscreen.onclick=function(){
 StoryPart3yes.style.display="block";
};
StoryPart2no.onclick=function(){
StoryPart2noscreen.style.display="block";
};


//



