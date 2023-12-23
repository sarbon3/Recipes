const input = document.querySelector('.search');
const text = document.querySelectorAll('.container');

input.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    text.forEach(item =>{
        item.querySelector('h3').textContent.toLowerCase().includes(word)?
        (item.style.display = 'flex'):(item.style.display='none');
    })
})

const next = document.querySelector('.next');
const back = document.querySelector('.back');

const photos = ["cesar.jpg","bread.jpg","cheese and garlic.jpg","lettuce.jpg","oil.jpg"];
let i = 0;

next.addEventListener('click' ,() =>{
    i++;
    if(i>photos.length-1){
    i=0;
    }
    document.querySelector('.img').src=photos[i];
})
back.addEventListener('click',() => {
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector('.img').src=photos[i];
})
const nextOne = document.querySelector('.nextOne');
const backOne = document.querySelector('.backOne');

const photoMozz = ["mozzarella.jpg","mozzarella (2).jpg","basil&tomat.jpg","balsamic.jpg"];
let h = 0;
nextOne.addEventListener('click',() =>{
    h++;
    if(h>photoMozz.length-1){
        h=0;
    }
    document.querySelector('.imgOne').src=photoMozz[h];
})
backOne.addEventListener('click',() =>{
    h--;
    if(h<0){
        h=photoMozz.length-1;
    }
    document.querySelector('.imgOne').src=photoMozz[h];
})

const nextTwo = document.querySelector('.nextTwo');
const backTwo = document.querySelector('.backTwo');

const photoMango = ["mango salad.jpg","mango.jpg","onion.jpg","sweet.jpg","cilantro.jpg","chilly.jpg","peanut butter.jpg"];
let b=0;
nextTwo.addEventListener('click',() =>{
    b++;
    if(b>photoMango.length-1){
        b=0;
    }
    document.querySelector('.imgTwo').src=photoMango[b];
})
backTwo.addEventListener('click',()=>{
    b--;
        if(b<0){
            b=photoMango.length-1;
    }
    document.querySelector('.imgTwo').src=photoMango[b];
})

const nextThree = document.querySelector(".nextThree");
const backThree = document.querySelector(".backThree");

const imgThree = ["rolls.jpg","cabbage.jpg","carrot.jpg","cucumber.jpg","jolopeno.jpg", "lettuce (2).jpg","mint.jpg","onion green.jpg"];
let c =0;

nextThree.addEventListener('click', () =>{
    c++;
    if (c>imgThree.length-1){
        c=0
    }
    document.querySelector('.imgThree').src=imgThree[c];
})
backThree.addEventListener('click', () =>{
    c--;
    if(c<0){
        c=imgThree.length-1;
    }
    document.querySelector(".imgThree").src=imgThree[c];
})

const nextFour = document.querySelector('.nextFour');
const backFour = document.querySelector('.backFour');

const imgFour = ["corn.jpg","tomatoes.jpg","sweetCorn.jpg","onion.jpg","oil.jpg","lime.jpg","honey.jpg"];
let r=0;

nextFour.addEventListener("click", () => {
    r++;
    if (r>imgFour.length-1){
        r=0;
    }
    document.querySelector(".imgFour").src=imgFour[r];
})

backFour.addEventListener('click',() =>{
    r--;
    if (r<0){
        r= c=imgFour.length-1;
    }
    document.querySelector(".imgFour").src=imgFour[r];
})

function recipe(){
    const deadline = new Date ("August 03 , 2022 13:34");
    const myDate = new Date();
    const diff = deadline - myDate;
    
    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;

    const displayDays = Math.floor(diff/msInDays);
    document.querySelector(".days").textContent = displayDays;

    const displayHours = Math.floor((diff%msInDays)/msInHours);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHours)/msInMinutes);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinutes)/msInSeconds);
    document.querySelector(".seconds").textContent = displaySeconds;

    if(diff<=0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerId);
        change();
        newElement();
    }
}
let timerId= setInterval(recipe,1000);

function change (){
    const newHeading = document.querySelector("h1");
    newHeading.textContent = "Welcome!";
    
    const timeout = document.querySelector(".timeout");
    timeout.remove();

    const nowCook = document.querySelector(".now")
    nowCook.textContent = "Now you can enjoy the salads recipes from Jamie Oliver";

    const topContainer = document.querySelector(".bigContainer");
    topContainer.remove();
}

function newElement(){
    const newEl = document.querySelector(".newEl");
    const div = document.querySelector(".Newpicture");
    
    const imgNew = document.createElement("img");
    imgNew.src = "https://img.jamieoliver.com/jamieoliver/recipe-database/8EDENOCEKbAB5AS4UtzHMh.jpg?tr=w-800,h-1066";
    imgNew.classList.add("imgFive");
    
    newEl.appendChild(imgNew);
    
    const link = document.createElement("a"); 
    const newHead = document.createElement("h3");
    newHead.textContent = "Moorish crunch salad (by Jamie Oliver)";
    newHead.classList.add("white");
    link.classList.add("newLink")
    link.href = "https://www.jamieoliver.com/recipes/vegetable-recipes/moorish-crunch-salad/";
    
    newEl.appendChild(div);
    div.appendChild(link);
    link.appendChild(newHead);

    const select = document.createElement("select");
    const array = ["Ingredients","150 g wholewheat couscous","1 large preserved lemon , (or use two small)", "150 g small heritage carrots","1 red onion","4 tablespoons white wine vinegar","½ a bunch of fresh mint , (15g)","4 sheets of filo pastry , (180g)","4 tablespoons natural yoghurt",""];
    
    const options = document.createElement('option');
    let i=0;
    for (i=0; i<array.length; i++){
        options.text = array[i];
        options.value = array[i];
        select.appendChild(options.cloneNode(true));
        div.appendChild(select);
    }
    select.classList.add("selectStyle");

    const textRecipe = document.createElement("p");
    textRecipe.textContent = "The bonus of using three lovely oranges here means that this beautifully bright salad provides us with our daily recommended intake of vitamin C, helping to keep our immune systems strong";
    textRecipe.classList.add("textRecipe");
    div.appendChild(textRecipe);
}

recipe();