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
    const ele = document.getElement("li");
    ele.class = ("dog-link");

}

function handleLeave() {
    const ele = document.querySelector(".dog-link");
    ele.classList.remove("dog-link");
}




// addEventListener("click", handleEnter);

attachDogLinks();
module.exports = attachDogLinks;