const h1 = name =>
{
    return `<h1>${name}</h1>`
}

const section = section =>
{
    return `<section>${section}</section>`
}

const aside = info =>
{
    return `<aside>${info}</aside>`
}

const element = (type, content, classlist) => {
    return `
            <${type} class=${classlist}>${content}</h1>
    `
}

// const createStudentComponent = (student) => {
//     return `
//         <div class="student">
//             <h1>${student.name}</h1>
//             <section>${student.subject}</section>
//             <aside>${student.info}</aside>
//         </div>
//     `
// }

// const createStudentComponent = (student) => {
//     return `
//     <div id="student">
//         ${h1(student.name)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>`
// }

const createStudentComponent = (student) => 
{
    return `
    <div id="student">
        ${element("h1", student.name, student.className)}
        ${element("section", student.subject, student.className)}
        ${element("aside", student.info, student.className)}
    </div> `
}

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container")

// Update its contents with the return value of the function
// for (let i = 0; i < students.length; i++) {
//     const student = students[i]
//     studentContainer.innerHTML += createStudentComponent(
//         student.name,
//         student.subject,
//         student.info
//     )
// }

students.forEach(function(student) {
    console.log(student)
    console.log(student.score)
    let studentComponent = ""
    if (student.score >= 60) {
        student.className = "passing"
        studentComponent = createStudentComponent(student);
        studentContainer.innerHTML += studentComponent;
    } else {
        student.className = "failing"
        studentComponent = createStudentComponent(student);
    }
    studentContainer.innerHTML += studentComponent;
});

const msgArray = [];
const article = document.getElementById("messages");
const fragment = document.createDocumentFragment()
const message1 = document.createElement("section");
message1.className = "message"
message1.textContent = "Message"
msgArray.push(message1);
fragment.appendChild(message1)

const message2 = document.createElement("section");
message2.className = "message"
message2.textContent = "message 2"
fragment.appendChild(message2)

const message3 = document.createElement("section");
message3.className = "message"
message3.textContent = "message 3"
fragment.appendChild(message3)

const message4 = document.createElement("section");
message4.className = "message"
message4.textContent = "message 4"
fragment.appendChild(message4)

const message5 = document.createElement("section");
message5.className = "message"
message5.textContent = "message 5"
fragment.appendChild(message5)

article.appendChild(fragment)
// for (i = 1; i < 6; i++)
// {
//     console.log(i)
//     fragment.appendChild(message)
// }

let family = [
    {
      name: "Fred Jones",
      age: 49,
      title: "parent"
    },
    {
      name: "Pat Jones",
      age: 50,
      title: "parent"
    },
    {
      name: "Bubba Jones",
      age: 20,
      title: "adult child"
    },
    {
      name: "Kelly Jones",
      age: 12,
      title: "dependent child"
    },
    {
      name: "Bartleby",
      age: 3,
      title: "pet"
    }
  ]

const familyContainer = document.getElementById("family")

addFamily = (div, item) =>
{
    div.innerHTML += h3ify(item)
}

h3ify = name =>
{
    return `<h3>${name}</h3>`
}

for (let i = 0; i < family.length; i++)
{
    addFamily(familyContainer, family[i].name)
}