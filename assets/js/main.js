const file = "assets/js/information.json";

async function fillPage(){
    const response = await fetch(file);
    const data = await response.json();
    // Filling Content 
    const nameList = document.querySelectorAll(".name");
    const info = document.querySelectorAll(".info");
    const state = document.querySelectorAll(".status");

    nameList[0].innerHTML = data.names.mark;
    nameList[1].innerHTML = data.names.angela;
    nameList[2].innerHTML = data.names.jac;
    nameList[3].innerHTML = data.names.rizky;
    nameList[4].innerHTML = data.names.kim;
    nameList[5].innerHTML = data.names.nat;
    nameList[6].innerHTML = data.names.anna;
    info[0].childNodes[1].nodeValue = ` ${data.reactions.react} `;
    info[1].childNodes[1].nodeValue = ` ${data.reactions.follow} `;
    info[2].childNodes[1].nodeValue = ` ${data.reactions.join} `;
    info[3].childNodes[1].nodeValue = ` ${data.reactions.message} `;
    info[4].childNodes[1].nodeValue = ` ${data.reactions.comment} `;
    info[5].childNodes[1].nodeValue = ` ${data.reactions.react} `;
    info[6].childNodes[1].nodeValue = ` ${data.reactions.left} `;
    state[0].innerHTML = data.posts.postOne
    state[2].innerHTML = data.posts.group
    info[3].parentElement.children[2].innerHTML = "Hello, Thanks for setting up the Chess Club. i've been a member for a few weeks now and i'm already having a lots of fun and improving my game.";
    state[3].firstChild.src = data.posts.image;
    state[4].innerHTML = data.posts.postTwo;
    state[5].innerHTML = data.posts.group;

    const users = document.querySelectorAll(".container");
    const redDot = document.querySelectorAll(".red")
    const notes = document.querySelector(".notes")
    notes.innerHTML = redDot.length
    const marking = document.querySelector(".mark")

    // Unhightlting The Unread Nots
    users.forEach(user => {
        user.addEventListener("click", () => {
            user.classList.remove("new");
            user.children[1].firstElementChild.lastElementChild.classList.remove("red");
        })
    })
    // Discounting unread Notification 
    redDot.forEach(red => {
        const unreadCon = red.parentElement.parentElement.parentElement;
        unreadCon.addEventListener("click", () => {
            notes.innerHTML -= 1;
            notes.innerHTML < 0 ? notes.innerHTML = 0 : false ;
        })
    })

    // Marking All As Read
    marking.addEventListener("click", () => {
        const unread = document.querySelectorAll(".new") 
        unread.forEach(un => {
            un.classList.remove("new");
        })
        redDot.forEach(rd => {
            rd.classList.remove("red");
        })
        notes.innerHTML = 0
    })
    
}

fillPage()
