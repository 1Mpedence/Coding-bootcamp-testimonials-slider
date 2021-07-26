const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const userList = [
    {
        image: "images/image-tanya.jpg",
        textPara: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: "Tanya Sinclair",
        desig: "UX Engineer"
    },
    {
        image: "images/image-john.jpg",
        textPara: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        name: "John Tarkpor",
        desig: "Junior Front-end Developer"
    },
]


let user = 0;
displayUser()

function displayUser(){
    document.querySelector(".text-para").innerHTML = userList[user].textPara;
    document.querySelector(".user-img").src = userList[user].image;
    document.querySelector(".name").innerHTML = userList[user].name;
    document.querySelector(".desig").innerHTML = userList[user].desig;
    user = 1-user;
}

prev.addEventListener("click", displayUser);
next.addEventListener("click", displayUser);