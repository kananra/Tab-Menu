const btnLondon=document.querySelector(".london");
const btnParis=document.querySelector(".paris");
const btnTokyo=document.querySelector(".tokyo");
const london=document.querySelector("#London");
const paris=document.querySelector("#Paris");
const tokyo=document.querySelector("#Tokyo");



btnLondon.addEventListener("click",()=>{
  if (london.style.display==="block") {
    london.style.display="none"
  }
  else{
    london.style.display="block"
    paris.style.display="none";
    tokyo.style.display="none";
  };
});

btnParis.addEventListener("click",()=>{
  if (paris.style.display==="block") {
    paris.style.display="none"
  }
  else{
    paris.style.display="block"
    london.style.display="none";
    tokyo.style.display="none";
  };
});

btnTokyo.addEventListener("click",()=>{
  if (tokyo.style.display==="block") {
    tokyo.style.display="none"
  }
  else{
    tokyo.style.display="block"
    paris.style.display="none";
    london.style.display="none";
  };
});


$(document).ready(function(){
  $(".londonjq").click(function(){
  if ($("#Londonjq").css("display")==="block") {
    $("#Londonjq").hide()
  }else{
    $("#Londonjq").show()
    $("#Parisjq").hide()
    $("#Tokyojq").hide()
  }
  });
  
  $(".parisjq").click(function(){
  if ($("#Parisjq").css("display")==="block") {
    $("#Parisjq").hide()
  }else{
    $("#Parisjq").show()
    $("#Londonjq").hide()
    $("#Tokyojq").hide()
  }
  });
  
  $(".tokyojq").click(function(){
  if ($("#Tokyojq").css("display")==="block") {
    $("#Tokyojq").hide()
  }else{
    $("#Tokyojq").show()
    $("#Londonjq").hide()
    $("#Parisjq").hide()
  }
  });
  
  });
