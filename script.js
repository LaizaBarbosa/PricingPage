const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navMenu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("activeH");
    navMenu.classList.toggle("activeH");
    
})





const accordionItem = document.querySelectorAll(".questItem");

accordionItem.forEach((item) => {
    const accordionTitle = item.querySelector(".titleQ");

    accordionTitle.addEventListener("click", () => {
        const accordionContentItem = item.querySelector(".questContent");

    const contentActived = document.querySelector(".active");

    verifyActive(item, accordionContentItem, contentActived);
})
})

function verifyActive(item, questContent, contentActived){
    //const iconItem = item.querySelector(".icon");

    const icons = document.querySelectorAll(".icon");

    icons.forEach((item) => (item.innerHTML = '<img src="img/chevron-down-regular-24.png" alt="">'))
 
    if(contentActived) {
        contentActived.style.heigth = 0;
        contentActived.classList.remove('active');
    }

    if (questContent !== contentActived){
        questContent.classList.add('active');
        questContent.style.heigth = questContent.scrollHeight + 10 + 'px'; 
    }
}


const card = document.querySelector('.innerCard');
const FlipCard = () => {
    card.classList.toggle('isFlipped');

 };

