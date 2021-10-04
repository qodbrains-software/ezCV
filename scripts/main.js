// ====================================================================
// LOGIC:
// ====================================================================
const saveCV = () => {
    const fullNames = document.querySelector("#full-names").textContent.trim("_")
    html2pdf(document.querySelector(".main"), {
    margin:       0,
    filename:     fullNames + "_CV",
    image:        { type: 'jpeg', quality: 0.95 },
    html2canvas:  { dpi: 250, letterRendering: true },
    jsPDF:        { unit: 'cm', format: 'tabloid', orientation: 'portrait',}
    });
}

const detectPageHeight = () => {
    return pageHeight = document.querySelector('.main').getBoundingClientRect().height;
}

const addElement = () => {     
    if(detectPageHeight() < 1725){
        var node = document.createElement("li");                 // Create a <li> node
        var textnode = document.createTextNode("Water Experience....");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.querySelector("ul").appendChild(node);
    }
    else{
        alert("You've exceeded the recommended page size");
    }    
}


const hexToRgbA = hex =>{
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.1)';
    }
    throw new Error('Bad Hex');
}

const changeTheme = (event) => {
    let body = document.querySelector("body");
    let heading = document.querySelector("h1");
    let subTitles = document.querySelectorAll("h3");
    let icons = document.querySelectorAll(".material-icons");
    let listItems = document.querySelectorAll("li");
    icons.forEach(icon => {
        icon.style.color = event.target.value;
    })
    heading.style.color = event.target.value;
    body.style.backgroundColor = event.target.value;
    listItems.forEach(item => {
        item.style.setProperty("--li-background-color", hexToRgbA(event.target.value))
    })
    subTitles.forEach(subTitle => {
        subTitle.style.setProperty("--default", hexToRgbA(event.target.value));
    })
}

// Make editable links dynamic:
const makeLinksDynamic = (listOfLinks) => {
    listOfLinks.forEach(link => {
        link.addEventListener('input', function(){
            if(Array.from(link.classList).includes("email-link")){
                link.href = "mailto:" + link.textContent;
            }
            else {
                link.href = "http://" + link.textContent;
            }
        })
    })
}

// ====================================================================
//Make List items sortable:
// ====================================================================
const sortable = new Sortable.default(document.querySelectorAll('ul'), {
    draggable: 'li'
  });

// ====================================================================
//TAG/ELEMENT ELEMENT SELECTION:
// ====================================================================
const themer = document.querySelector(".themer"); //input:color
const saveButton = document.querySelector(".save-button");
const links = document.querySelectorAll(".link");


// ====================================================================
//PUTTING THINGS TO WORK:
// ====================================================================
makeLinksDynamic(links);

themer.addEventListener("input", e => {
    changeTheme(e);
})

saveButton.addEventListener('click', saveCV);