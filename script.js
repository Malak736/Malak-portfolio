// toggle icon navbar

// // scroll Selection

window.onscroll= () =>{
   Selections.forEach(sec => {
    let top =window.scrollY;
    let offset=sec.offsetTop=100;
    let hight=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if (top>= offset&&top<offset+hight) {
        // active navbar links
        navlinkes.forEach(link=>{
            link.classList.remove('active');
            document.querySelector('header nav a [href*='+id+']').classList('active');
        })
    }
   });
}

let Selections =document.querySelectorAll('section');
let navlinkes= document .querySelectorAll('header nav a');

let menuIcone=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcone.onclick=()=>{
    menuIcone.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
navlinkes.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcone.classList.remove('bx-x');
  });
});
document.getElementById("waButton").addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let phone = "201271502036"; 

  let text = "👤 Name: " + name + "\n"
           + "📧 Email: " + email + "\n"
           + "📱 Phone: " + phoneNumber + "\n"
           + "📝 Subject: " + subject + "\n"
           + "💬 Message: " + message;

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

  window.open(url, '_blank');

  document.getElementById("infoText").style.display = "block";
});

