function next(){
    if(x==true){
        cita.innerHTML="If you want to lay the best fuondation possible I´d recommend taking this course. The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer.";
        nameA.innerHTML="John Tarkpor";
        work.innerHTML="Junior Front-end Developer";
        perfil.src = "./images/image-john.jpg";
        x=false;
    }
    else{
        cita.innerHTML="I´ve been interested in coding for a while but never taken the jump, until now. I couldn´t recommend this course enough.I’m now in the job of my dreams and so excited about the future. ";
        nameA.innerHTML="Tanya Sinclair";
        work.innerHTML="UX Engineer";
        perfil.src = "./images/image-tanya.jpg";
        x=true;
    }

    
}

let x = true;
const cita = document.getElementById("cita");
const nameA = document.getElementById("name");
const work = document.getElementById("work");
const perfil = document.getElementById("img-perfil");
