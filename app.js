const chat=document.querySelector(".chat");
const button=document.querySelector(".send");
const text=document.querySelector(".text");



button.addEventListener("click",()=>{
    
let send=document.createElement("section");
send.innerText=`${text.value}`;
send.classList.add("mytext");
chat.appendChild(send);


text.value="";
setTimeout(()=>{

const AI=[
{text:"welcome"},
{text:"welcome to open AI how can i help you"},
{text:"how old are you"},
{text:"What is your name"},
{text:"good bye"},
{text:"is that you"},
{text:"Do you have a PC"},
{text:"are you good at python programming"},
{text:"hello"},
{text:"I will se you soon"},
{text:"No i dont like you at all"},
{text:"i love you"}
];

let random=Math.floor(Math.random()*AI.length);


  let reply=document.createElement("section");
    reply.classList.add("reply");
    reply.innerText=`${AI[random].text}`;
    chat.appendChild(reply);
    text.value="";

},1500)



});












