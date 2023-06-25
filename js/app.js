
function send(){
let Name = document.querySelector("#fname").value;
let Email= document.querySelector("#email").value;
let EmailClass= document.querySelector(".meil");
let ClassName = document.querySelector(".name");
let errorMessige = document.querySelector(".error");
let errorMessige2 = document.querySelector(".error2");
let errorMessige3 = document.querySelector(".error3");
let Pwd = document.querySelector("#pwd").value;
let Classpasword = document.querySelector(".pwd");

if(Name.length==0){
    ClassName.classList.add("name-error");
    errorMessige.innerHTML = "შეავსეთ სახელი";

}else{
    ClassName.classList.remove("name-error");
    ClassName.classList.add("name-ok");
    errorMessige.innerHTML = " ";
}
if(Email.length==0){
    errorMessige2.innerHTML = "შეავსეთ მეილი";
    EmailClass.classList.add("name-error");
}else{
    errorMessige2.innerHTML = " ";
    EmailClass.classList.remove("name-error");
    EmailClass.classList.add("name-ok");
}
if(Pwd.length==0){
    errorMessige3.innerHTML ="შეავსეთ პაროლი";
    Classpasword.classList.add("name-error")
}else{
    errorMessige3.innerHTML =" ";
    Classpasword.classList.remove("name-error")
    Classpasword.classList.add("name-ok");
}
return false;
}