function is_checked(name){
  // 1. checkbox element를 찾습니다.
  const checkbox_panser = document.getElementById("checkbox_"+name);

  // 2. checked 속성을 체크합니다.
  const is_checked_panser = checkbox_panser.checked; //true == 채크 /false == 채크 안됌
  
  if( is_checked_panser == true ){
    document.querySelector('#desc_'+name).style.display = "block";
  } 
  if( is_checked_panser == false ){
    document.querySelector('#desc_'+name).style.display = "none";
  }
}