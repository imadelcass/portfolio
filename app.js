const navLists = document.querySelectorAll('.nav-list');
const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.burger');
const footer = document.querySelector('.footer');
const btnReturn = document.querySelector('.btn-return');
const liContact = document.querySelector('.li-contact');
const liSkils = document.querySelector('.li-skils');
const popup = document.querySelector('.popup');
const checkLeft = document.querySelector('.check-left');
const checkRight = document.querySelector('.check-right');
const slid = document.querySelector('.slid');



// display navigation with burger button
burger.addEventListener('click', () => {
    navigation.classList.toggle('nav-toggle');
})

// Add line under navlist item
navLists.forEach(item => {
    item.addEventListener('click', ()=>{
        navLists.forEach(li => {
            li.classList.remove('under-line');
        })
        item.classList.add('under-line');
    })
})
// add google map API :

function initMap(){
    let map;
    var options = {
        center : { lat: 30.3379, lng: -9.5040},
        zoom : 12,
    }
map = new google.maps.Map(document.getElementById("map"), options);
}

// image slider

const cards = [
     {
         id : 0,
         src : 'img/html.png',
     },
     {
        id : 1,
        src : 'img/css.png',
    },
    {
        id : 3,
        src : 'img/js.png',
    },
    {
        id : 4,
        src : 'img/bootstrap.png',
    },
    {
        id : 5,
        src : 'img/git.png',
    },
    {
        id : 6,
        src : 'img/github.png',
    },
    {
        id : 7,
        src : 'img/wordpress.png',
    }

]
const changeImg = document.querySelector('.change-img');


const items = [
    cards[0].src,
    cards[1].src,
    cards[2].src,
    cards[3].src,
    cards[4].src,
    cards[5].src,
]
items.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'item';
    const card = document.createElement('img');
    card.setAttribute('src', item);
    wrapper.appendChild(card);
    changeImg.appendChild(wrapper);
})
i = 6;
setInterval(()=>{
    changeImg.firstChild.remove();
    const card = document.createElement('img');
    //items.push(card[3].src)
    card.setAttribute('src', cards[i].src);
    const wrapper = document.createElement('div');
    wrapper.classList = 'item';
    wrapper.appendChild(card);
    changeImg.appendChild(wrapper);
    i++;
    if(i >= cards.length){
        i = 0;
    }
    
}, 1200)


// add year to the footer 

const year = new Date().getFullYear();

const footerTxt = document.createElement('h1');
footerTxt.innerHTML = `&copy; all the right are reserved ${year}`; 
footer.appendChild(footerTxt);

// mack navugation fixed after 200px of scroll:

onscroll = () => {
    
    if(pageYOffset >= 200){
        btnReturn.style.display = 'inline';
       navigation.style.position = 'fixed';
       navigation.style.right = '50%';
       navigation.style.transform = 'translateX(50%)';
       navigation.style.border = '1px solid black';
    }
    else{
        navigation.style.border = 'none';
        btnReturn.style.display = 'none';
    }
}
// add button to scroll to TOP 

btnReturn.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
})

//add button to scroll to contact section
liContact.addEventListener('click', ()=>{
    document.documentElement.scrollTo(0, 800);
})

// form validation :
// name :
const nameSet = document.querySelector('.name-set');
const faTimes = document.querySelector('.fa-times');
const faCheck = document.querySelector('.fa-check');

// add skils POP UP :
var count = 0;
liSkils.addEventListener('click', ()=>{
    popup.style.display = 'inline';
    document.body.style.background = '#333';
    count = 1;
})
// form validation
nameSet.addEventListener('keyup', e =>{
    const nameTxt = e.target.value;
    if(nameTxt.length > 0){
        let myRex = /[a-z]/g;
        let name =  nameSet.value;
        let result = myRex.test(name);
        if(result == false){
            faTimes.style.display = 'inline';
            faCheck.style.display = 'none';
        }else{
            faCheck.style.display = 'inline';
            faTimes.style.display = 'none';
        }
    }else{
        faTimes.style.display = 'none';
        faCheck.style.display = 'none';
    }
})
document.addEventListener('click', (e)=>{
// remove pop up
    const popNot = !liSkils.contains(e.target);
    const rightNot = !checkRight.contains(e.target);
    const leftNot = !checkLeft.contains(e.target);
    if(popNot == true && rightNot == true&& leftNot == true){
        document.body.style.background = '#fff';
        document.body.children[1].style.display = 'none';
}
})

const images = [
      {
            id : 1,
            src : 'url(img/item-6.jpeg)'
      },
      {
            id : 2,
            src : 'url(img/item-7.jpeg)'
      },
      {
            id : 3,
            src : 'url(img/item-8.jpeg)'
      },
      {
            id : 4,
            src : 'url(img/item-9.jpeg)'
      },
]
i = 0;
checkRight.addEventListener('click', () => {
      i++;
      i == images.length ? i = 0 : i = i;
      console.log(i);
      slid.style.background = images[i].src;
})
checkLeft.addEventListener('click', () => {
      i--;
      i < 0 ? i = images.length-1 : i = i;
      console.log(i);
      slid.style.background = images[i].src;
})   
