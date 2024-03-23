
//======Mobile navbar functionality===

function navToggle(){
  const navbar =  document.querySelector("[data-navbar]");
  const navToggler = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  const navLinks = document.querySelectorAll("[data-navbar-link]");

  const navOpen = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  navToggler.forEach((toggler) => {
    toggler.addEventListener("click" , navOpen);
  })

  const navClose = () => {
    navbar.classList.remove("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click" , navClose);
  })
}
navToggle();

//======Header scroll===========

function headerScroll(){
  const header = document.querySelector("[data-header]");
  
  window.addEventListener("scroll" , () => {
    header.classList[window.scrollY > 90 ? "add" : "remove"]("active");
  })
}

headerScroll();

//=========Modal toggle======

const selectionModal = document.querySelector("[data-selection-modal]");
const successModal = document.querySelector("[data-success-modal]");
const overlay = document.querySelector("[data-overlay]");
const successModalSubmit = document.querySelector("[data-success-modal-btn]");
const selectionModalBtn = document.querySelector("[data-back-project]");

function placeModal(modal){
  modal.style.top = modal.parentElement.getBoundingClientRect().top - 30  + "px";
  modal.style.left = modal.parentElement.getBoundingClientRect().left + "px";
}

function placeOnResize(modal){
  window.addEventListener("resize",() => { 
    placeModal(modal);
    }
  )
}

function toggleModal(openBtn ,  modal){
  openBtn.addEventListener("click" , () =>{ 
    placeModal(modal);   
    placeOnResize(modal);  
    modal.showModal(); 
  })
}

toggleModal(selectionModalBtn,selectionModal);

//=========Function to show pledge cards===========

const pledgeSubmits = document.querySelectorAll("[data-pledge-submit-btn]");
const pledgeHandlers = document.querySelectorAll("[data-pledge-handler]");
const pledgeHandlerCards = document.querySelectorAll("[data-has-pledge-form]")
const markers = document.querySelectorAll("[data-marker]");

function showPledgeCard(){
  const pledgeToggle = document.querySelectorAll("[data-check-label]");
  const pledgeHandlerCards = document.querySelectorAll("[data-has-pledge-form]");

  pledgeToggle.forEach((toggleBtn , index) => {

    toggleBtn.addEventListener("click" , () => {
      markers[index].style.backgroundColor = "hsl(176, 50%, 47%)";
      pledgeHandlerCards[index].style.borderColor = "hsl(176, 50%, 47%";
      pledgeHandlers[index].classList.add("active");
    })

  })
}

showPledgeCard();

//Function to parse the textContent of elements in number

function parseTextContent(element){
 let textContent = element.textContent;

 if(textContent.includes(",")){
  let formattedContent = textContent.replace("," , "");
  return parseInt(formattedContent);
 }else{
  return parseInt(textContent);  
 }
}

//=========Function to update the page data 

function updateData(){
  let totalFunds = document.querySelector("[data-total-funds]");
  let totalBackers = document.querySelector("[data-total-backers]");
  let daysLeft = document.querySelector("[data-days-left]");
  const pledgesLeft = document.querySelectorAll("[data-pledges-left]");
  const inputFields = document.querySelectorAll("[data-pledge-input]");

  let totalFundsAmount = parseTextContent(totalFunds);
  totalFundsAmount++;

  inputFields.forEach((input) => {
    if(input.value){
      let inputValue = parseInt(input.value);
      totalFundsAmount+=inputValue;
    }
  })

  let formattedTotalFunds = totalFundsAmount.toLocaleString(2);
  totalFunds.textContent = formattedTotalFunds;

  let totalBackersCount = parseTextContent(totalBackers);
  totalBackersCount++;
  totalBackers.textContent = totalBackersCount;

  pledgesLeft.forEach((pledge) => {
    let pledgesLeftCounter = parseTextContent(pledge);
    pledgesLeftCounter--;
    pledge.textContent = pledgesLeftCounter ; 
  })
}

pledgeSubmits.forEach((submit,index) => {
  submit.addEventListener("click",() => {
    updateData();
    pledgeHandlers[index].classList.remove("active");
    markers[index].style.backgroundColor = "#fff";
    pledgeHandlerCards[index].style.borderColor = "#fff";

    selectionModal.close();
    successModal.showModal();
  })
})

successModalSubmit.addEventListener("click",() => {
  successModal.close();
})

//====Handling  hero background on desktop and mobile screen size

function changeBackground()
{
  const heroSection = document.querySelector("[data-heroSection]");
  const mobileUrl = "/images/image-hero-mobile.jpg";
  const heroUrl = heroSection.dataset.desktopbgurl;

  if(window.innerWidth > 768){
    heroSection.style.backgroundImage = `url("${heroUrl}")` 
  }else{
    heroSection.style.backgroundImage = `url("${mobileUrl}")`     
  }
}

window.addEventListener("resize" ,changeBackground);
window.addEventListener("load" , changeBackground);





