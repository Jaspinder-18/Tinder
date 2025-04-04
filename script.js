let user = [
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmF3JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://plus.unsplash.com/premium_photo-1668485968590-aff3717c1dbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmF3JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",

        pendingMessage: 6,
        Location: "India, Delhi",
        userName: "Nisha",
        age: 21,
        interests: [{
            icon: '<i class="ri-spotify-fill"></i>',
            heading: "songs"
        },
        {
            icon: '<i class=" ri-quill-pen-ai-fill"></i>',
            heading: "writing"
        },
        {
            icon: '<i class="ri-terminal-box-fill"></i>',
            heading: "coding"
        }
        ],
        Bio: "Nisha is an Indian actress and model who has worked in Hindi, Tamil, Malayalam, and Kannada films. Her father, R.K. Puri, is a retired assistant police commissioner, and her mother is an astrologer.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1673283630464-92c16a8141e0?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingMessage: 4,
        Location: "India, Punjab",
        userName: "Akansha",
        age: 21,
        interests: [{
            icon: '<i class="ri-spotify-fill"></i>',
            heading: "songs"
        },
        {
            icon: '<i class=" ri-quill-pen-ai-fill"></i>',
            heading: "writing"
        },
        {
            icon: '<i class="ri-terminal-box-fill"></i>',
            heading: "coding"
        }
        ],
        Bio: "Akanksha is an Indian actress and model who has worked in Hindi, Tamil, Malayalam, and Kannada films. Her father, R.K. Puri, is a retired assistant police commissioner, and her mother is an astrologer.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 2,
        Location: "USA, Pune",
        userName: "Nveena",
        age: 25,
        interests: [{
            icon: '<i class="ri-spotify-fill"></i>',
            heading: "songs"
        },
        {
            icon: '<i class=" ri-quill-pen-ai-fill"></i>',
            heading: "writing"
        },
        {
            icon: '<i class="ri-terminal-box-fill"></i>',
            heading: "coding"
        }
        ],
        Bio: "Akanksha is an Indian actress and model who has worked in Hindi, Tamil, Malayalam, and Kannada films. Her father, R.K. Puri, is a retired assistant police commissioner, and her mother is an astrologer.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1508185140592-283327020902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 13,
        Location: "Canada, Ansa",
        userName: "Lusiya",
        age: 22,
        interests: [{
            icon: '<i class="ri-spotify-fill"></i>',
            heading: "songs"
        },
        {
            icon: '<i class=" ri-quill-pen-ai-fill"></i>',
            heading: "writing"
        },
        {
            icon: '<i class="ri-terminal-box-fill"></i>',
            heading: "coding"
        }
        ],
        Bio: "Akanksha is an Indian actress and model who has worked in Hindi, Tamil, Malayalam, and Kannada films. Her father, R.K. Puri, is a retired assistant police commissioner, and her mother is an astrologer.",
        isFriend: null,
    }
];
function select(elem) {
    return document.querySelector(elem);
}

function setData(index) {
    select(".prfilimg img").src = user[index].profilePic;
    select(".badge").textContent = user[index].pendingMessage;
    select(".location h1").textContent = user[index].Location;
    select(".user h1:nth-child(1)").textContent = user[index].userName;
    select(".user h1:nth-child(2)").textContent = user[index].age;
    let clutter = "";
    user[index].interests.forEach(elem => {
        clutter += `<div class="tag flex items-center bg-white/80 px-3 py-0.5 rounded-full gap-1 capitalize">
                            ${elem.icon}
                            <h3 class="text-sm tracking-tighter">${elem.heading}</h3>
                        </div>`;
        select(".tags").innerHTML = clutter
            ;
    });
    select(".bio p").textContent = user[index].Bio;
}

let curr = 0;
(function setInitial() {
    select(".maincard img").src = user[curr].displayPic;
    select(".incomingcard img").src = user[curr + 1].displayPic;
    setData(curr);
    curr = 2;
})();

let isAnimating = false;
function imgChange() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,
                    {
                        scale: 1,
                        opacity: 1
                    }
                )
                if (curr === user.length) {

                    curr = 0;
                }
                select(".maincard img").src = user[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a").from(".incomingcard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
    }
}

(function createContainer() {
    document.querySelectorAll(".element").forEach((element) => {
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container` + `overflow-hidden`);
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

const deny = select(".deny");
const accept = select(".accept");
function handleClick(action) {
    if (!isAnimating) {
        imgChange();
        setData(curr - 1);
        gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            ease: Power4.easeInOut,
            stagger: .06,
            duration: 1.1
        });
    }
}

deny.addEventListener("click", () => handleClick('deny'));
accept.addEventListener("click", () => handleClick('accept'));