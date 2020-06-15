function changeText() {
  var text = document.getElementById("text");
  if (text.innerHTML.match("“ I’ve")) {
    text.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
  } else {
    text.innerHTML = "“ I’ve been interested in coding for a while <br> but never taken the jump, until now. I <br> couldn’t recommend this course enough. <br> I’m now in the job of my dreams and so <br> excited about the future. ”";
  }

  var name = document.getElementById("name");
  if (name.innerHTML == "Tanya Sinclair") {
    name.innerHTML = "John Tarkpor"
  } else {
    name.innerHTML="Tanya Sinclair"
  }

  var profession = document.getElementById("profession");
  if (profession.innerHTML == "UX Engineer") {
    profession.innerHTML = "Junior Front-end Developer"
  } else {
    profession.innerHTML="UX Engineer"
  }

  var imagen = document.getElementById("imagen");
  if (imagen.src.match("images/image-tanya.jpg")) {
    imagen.src = "images/image-john.jpg"
  } else {
    imagen.src = "images/image-tanya.jpg"
  }
}