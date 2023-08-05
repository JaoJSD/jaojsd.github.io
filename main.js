const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "tiger-image.png") {
        myImage.setAttribute("src", "tiger-image2.png");
    } 
    if (mySrc === "tiger-image2.png") {
        myImage.setAttribute("src", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7825539/horse-clipart-md.png");
    } else if (mySrc === "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7825539/horse-clipart-md.png") {
        myImage.setAttribute("src", "tiger-image.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `This page is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This page is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};



