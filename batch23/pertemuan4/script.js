
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const output = document.getElementById("outputBox");
    output.innerText += `Halo, ${name}! Umur kamu ${age} tahun.`;

    togglePopup("1")

});

// FORM F2
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput2").value;
    const age = document.getElementById("ageInput2").value;
    const output = document.getElementById("outputBox");
    output.innerText += `Halo, ${name}! Umur kamu ${age} tahun.`;

    togglePopup("2")

});


// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

function f2() {
    console.log('Test');
    togglePopup("2")
}