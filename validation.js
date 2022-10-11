
function setValidateFormEvent() {
  const signBtn = document.getElementsByClassName("signupbtn")[0];
  signBtn.addEventListener("click", function () {
    // Hãy viết code của bạn ở đây ...

    let inputList = document.querySelectorAll("input");
    inputList.forEach((input, i) => {
      
      if(input.name == 'email') {
        
        function checkAtSign(val){
          return val == '@';
        }
        
        function checkEmail(email){
          for(let i=0; i<email.length;i++){
            
            if(checkAtSign(email[i])){
              return true
            }
          }
          return false
        }
       
        if(!checkEmail(input.value)){
          document.querySelector('#err-email').innerText = "vui long nhap dung dinh dang email";
        } else document.querySelector('#err-email').innerText = '';

      }
      
      if(input.name == 'psw') {
        // psw la string
        
        function checkLengthPsw(psw){
          return psw.length >= 6;
        }
        function checkCapital(psw){
          for(let i=0;i<psw.length;i++){
            if(psw[i]>='A' && psw[i] <= 'Z') return true;
          }
          return false;
        }
        function checkCharacter(psw){
          if(!(
            psw[i]>='a' && psw[i] <= 'z' ||
            psw[i]>='0' && psw[i] <= '9' ||
            psw[i]>='A' && psw[i] <= 'Z' ||
            psw[i] == ' '
          )) {
            return true;
          }
          return false;
        }
        function checkPassword(psw){
          if(
            checkCapital(psw)&&
            
            checkLengthPsw(psw) &&
            checkCharacter(psw)
          ) return true;
          
          return false;
        }

        function isSame(psw1, psw2){
          return psw1 == psw2;
        }

        if(!(checkPassword(input.value))){
          document.querySelector('#err-psw').innerText = 'password phải có ít nhất 6 ký tự, 1 chữ cái in hoa và 1 ký tự đặc biệt'
        } else{
          
          document.querySelector('#err-psw').innerText = ' '
          
        }

        if(!(isSame(inputList[2].value, input.value))){
          document.querySelector('#err-psw-repeat').innerText = 'mật khẩu nhập lại không chính xác, vui lòng nhập lại'
        }
        else{
          document.querySelector('#err-psw-repeat').innerText = '';
        }
      }

    });
  });
}
function setCancelModalEvent() {
  const modal = document.getElementById("id01");
  const cancelBtn = document.getElementsByClassName("cancelbtn")[0];
  cancelBtn.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// ======================== Các lệnh toàn cục ===================
setCancelModalEvent();
setValidateFormEvent();
