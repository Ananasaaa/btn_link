const btn1 = document.createElement('button');
const btn2 = document.createElement('button');

btn1.textContent = 'First button';
btn2.textContent = 'Second button';

btn1.style.margin = '10px';
btn2.style.margin = '10px';

let userLink = '';

function setLink() {
 userLink = prompt('Enter link');
}

function goLink() {
    window.location.href = userLink;
}

btn1.onclick = setLink;
btn2.onclick = goLink;


document.body.appendChild(btn1);
document.body.appendChild(btn2); 






