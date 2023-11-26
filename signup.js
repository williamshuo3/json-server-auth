const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const checkPassword = document.querySelector('#checkPassword');
const Name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const signupBtn = document.querySelector('#signup')



signupBtn.addEventListener('click',function(e){
   if(
    inputEmail.value.trim() == "" 
    // Name.value.trim() == "" ||
    // phone.value.trim() == "" 
   ){
        alert("請確實填寫")
        return
    }else if(
        inputPassword.value.length < 6||
        checkPassword.value.length < 6
        
    ){
        alert('密碼錯誤')
        return
    };
let obj = {};
obj.email = inputEmail.value;
obj.password = inputPassword.value;
obj.checkPassword = checkPassword.value;
// obj.name = Name.value;
// obj.phone = phone.value;
signUp(obj);
})

function signUp(obj){
    axios.post(' https://json-server-auth-q2r9.onrender.com/users',obj)
    .then(function(res){
        if(res.status == 201){
            window.location.assign("login.html");
        }
    })
    .catch(function(error){
        alert('未連結')
    })
};