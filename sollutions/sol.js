//1. (Dev.to) Target the Top description div and change the DEV Community to <Your_Name> and description to your passion
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").textContent = "iNeuron";
document.querySelector(".side-bar .crayons-card .color-base-70").textContent = "I Wtite Code";

// 2. (Apple) Fetch all the product name and store in an array
const productArray = [];

document.querySelectorAll(".as-imagegrid-item > a > span").forEach((prod) => {
    let product = prod.innerText.trim();
    productArray.push(product.replace("Support", "").trim());
});
console.log(productArray);

//3. (Youtube Support)  Add another FAQ 'My New FAQ' to the list
const accordinContainer = document.querySelector(".accordion-homepage");
const h3 = document.createElement("h3");
const sectionEl = document.createElement("section");
const text = document.createTextNode("My New FAQ");
h3.appendChild(text);
sectionEl.appendChild(h3);
sectionEl.setAttribute("class", "parent");
accordinContainer.appendChild(sectionEl);

//4. (OnePlus) Change the contact number
//without icon
document.querySelector(".customer-support > a").innerText = "+91 6366256689";
//with icon
document.querySelector(".customer-support > a > i").nextSibling.textContent = "+91 6366256689";

//5.(Samsung) Target the main div of card and change the Button text to Check out
document.querySelector(
    ".feature-column-carousel__button > .cta.cta--contained.cta--black"
).textContent = "Checkout";

//6. (Adidas) Target the search box and on hover change thebackground color to red.
document.querySelector(".searchinput___zXLAR").addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "Red";
});

//7. (MDN) Search using dom
document.getElementById("hp-search-input").value = "javascript";
document.querySelectorAll(".search-form.search-widget")[1].submit();

//8. (google)  Remove alternate languages from the home page languages listed
let parentEl = document.getElementById("SIvCob");
let lists = document.getElementById("SIvCob").children;
for (let list of lists) {
    parentEl.removeChild(list);
}

// 9. (Codewars) Change the font family of the text to monospace and text color to the logo’s background color.
let color = document.getElementById("start-coding-btn");
color = getComputedStyle(color).backgroundColor;
const heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "monospace";
heading.style.color = color;

//10. (Freecodecamp) Target the button and change background colour on mouseover
document.querySelectorAll(".login-btn-text")[1].addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
});

// 11. (realme) change the realme logo to ineuron logo
const logo = document.querySelector(".logo");
logo.removeChild(document.querySelector(".logo > span"));
const img = document.createElement("img");
img.src = "https://ineuron.ai/images/ineuron-logo.png";
img.style.height = "40px";
logo.appendChild(img);

// 12. (github) change the background colour of the button to blue.
document.querySelector(".btn.btn-sm.btn-primary").style.backgroundColor = "#341433";

// 13. (heacker rank) Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.
document.querySelector(".fl-heading").innerHTML = "<span class='fl-heading-text'>JSBOOTCAMP</span>";

// 14. (asus) change the fontsize of “Hot Deals” to 80px
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

//15. (dell) Convert the text “G15 Gaming Laptop” from left to right
document.querySelector(".ps-title").style.textAlign = "right";

// 16. (vercel) change the heading “Start with the developer” to “Start with Scratch”
document.querySelector(".section-title_title__VEDfK").innerHTML = "Start with scratch";

// 17. (sony) change the button text To current Date.
document.querySelector(".btn-container").innerHTML = new Date();

// 18. (philips) change the background colour blue to orange
document.querySelector(".p-f03-footer-container").style.background = "orange";

// 19. (canon) extract the canon logo
document.querySelector(".navbar-brand > img").src;

// 20. (oppo)  Change the description colour black to orange
document.querySelector(".desc").style.color = "orange";
