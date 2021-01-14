//define the text whose going on page
const text = "💻 Welcome to my new JavaScript \nproject !\nWelcome to my new JavaScript \nproject !\nWelcome to my new JavaScript \nproject !\nWelcome to my new JavaScript \nproject !\n "
//Initialisation of the index to 0
let index = 0;

//WriteText function will be called for each character
function writeText(){
    //With slice we separate each character of the string
    //Slice start at 0 , and goes to index 
    document.body.innerText = text.slice (0, index);
    //Each time function is called , index rise +1
    index++;
    //If index is as long as the string, it restart to 0.
    if(index >text.length -1){
        index=0;
    }
}

//Function will be called every 0.07second
setInterval(writeText, 70)