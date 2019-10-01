const userData = [
    {
        id: "1",
        firstName: "Ted Ian",
        lastName: "Osias",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/dju4--IW7Qw"
    },
    {
        id: "2",
        firstName: "Heindrich",
        lastName: "Wooge",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/dju4--IW7Qw"
    },
    {
        id: "3",
        firstName: "Marrianne",
        lastName: "Owen",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/KrHHsrET_fQ"
    },
    {
        id: "4",
        firstName: "Teody",
        lastName: "Cue",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/dju4--IW7Qw"
    },
    {
        id: "5",
        firstName: "Hamza",
        lastName: "Macasindil",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/dju4--IW7Qw"
    },
    {
        id: "6",
        firstName: "Karren",
        lastName: "Silva",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/KrHHsrET_fQ"
    },
    {
        id: "7",
        firstName: "Anthon",
        lastName: "Wycoco",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/dju4--IW7Qw"
    },
    {
        id: "8",
        firstName: "Danielle",
        lastName: "Pimonte",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/KrHHsrET_fQ"
    },
    {
        id: "9",
        firstName: "Jhoanna",
        lastName: "Remonte",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/KrHHsrET_fQ"
    },
    {
        id: "10",
        firstName: "Hillary",
        lastName: "Briones",
        occupation: "Software Engineer",
        profilepicture: "https://unsplash.com/photos/KrHHsrET_fQ"
    }
];

const tableElement = document.getElementById('tableData');
const searchInput = document.getElementById('search');

const addRows = (user) => {
    const forEachcallBack = function(user){
        console.log(user);
        const rowElem = document.createElement('tr');

        const id = document.createElement('td');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        const occupation = document.createElement('td');

        id.textContent = user.id;
        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        occupation.textContent = user.occupation;

        rowElem.appendChild(id);
        rowElem.appendChild(firstName);
        rowElem.appendChild(lastName);
        rowElem.appendChild(occupation);

        tableElement.appendChild(rowElem);
    };
    userData.forEach(forEachcallBack);
};

searchInput.addEventListener('keyup', (event) =>{
    const searchText = searchInput.value;
    console.log(searchText);
    if(searchText){
        const filteredUser =  userData.filter((user) =>{
            return user.firstName.toLowerCase() === searchText || 
                user.lastName.toLowerCase() === searchText ||
                user.occupation.toLowerCase() === searchText;
        });
        console.log(filteredUser);
        clearRows();
        addRows(filteredUser);
    }else{
        clearRows();
        addRows(userData);
    }
});

const clearRows = () =>{
    const tbody = tableElement.children[1];
    Array.from(tbody.children).forEach((row) => {
        row.remove();
    });
}

addRows(userData);