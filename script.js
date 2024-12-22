document.getElementById('box1').addEventListener('click', () => {alert("You're amazing! Just thought you should know");});

document.getElementById('box2').addEventListener('mouseover', () => {
    document.getElementById('box2').textContent = "Wow, You have a very great smile and a beautiful face!";});

document.getElementById('box3').addEventListener('click', () => { 
    const box3 =
document.getElementById('box3');
box3.textContent = "Suprise!";
box3.style.background = "#ffd700"
box3.style.color = "#000";
setTimeout(() => {
    box3.textContent = "What's This?";
    box3.style.background = "#333";}, 2000);
});           