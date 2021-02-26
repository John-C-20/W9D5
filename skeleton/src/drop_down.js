const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
    const dogLinks = []
    for (const [k, v] of Object.entries(dogs)) {
        const a = document.createElement("a")
        a.class = k;
        a.href = v;
        a.innerHTML = `${k}`;

        const li = document.createElement("li");
        li.setAttribute("class", "dog-link");
        li.id = "blackpink"
        li.appendChild(a);

        dogLinks.push(li);
    }
    return (dogLinks);
}

function attachDogLinks() {
    const dogLinks = dogLinkCreator();
    const ul = document.querySelector(".drop-down-dog-list");
    dogLinks.forEach(function(ele) {
        ul.appendChild(ele);
    })
}

function handleEnter() {
    const dropDown = document.querySelector(".drop-down-dog-list")
    dropDown.classList.remove("drop-down-dog-list")
    dropDown.classList.add("o")
}

function handleLeave() {
    const dropDown = document.querySelector(".o")
    dropDown.classList.add("drop-down-dog-list")
    dropDown.classList.remove("o")
}


const nav = document.querySelector(".drop-down-dog-nav")

nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);

attachDogLinks();
module.exports = attachDogLinks;