function myfunction() {
if (document.querySelector("maxwell")) return;

//spinnign maxwell time 
const spinner = document.createElement("img");
//maxwell source
spinner.src ="maxwell.gif";
//maxwells id 
spinner.id ="maxwell";

spinner.alt ="spinning maxwell"
//styling time slayyyyyyyyyy

//this codes maxes the image stay at the centre of the screen
spinner.style.position = "fixed";

//this code centres vertically
spinner.style.top = "50%";  

// this one horizontally
spinner.style.left = "50%";

// this one adjusts for perfect centreing
spinner.style.transform = "translate(-50%, -50%)";

//this one makes it appear abovce other elements
spinner.style.zIndex = "1000";

// this one puts its widght size
spinner.style.width = "500x";

// this one its height size 
spinner.style.height = "500px";

    document.body.appendChild(spinner);
}