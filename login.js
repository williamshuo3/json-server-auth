

const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const loginBtn = document.querySelector('#login');

let token = "";
loginBtn.addEventListener("click",function(){
    if(inputEmail.value.trim() == "" || inputPassword.value.trim() == ""){
        alert("請填寫帳號/密碼")
        return;
    };
    let obj = {};        
        obj.email = inputEmail.value;
        obj.password = inputPassword.value;
        login(obj);
})

function login(obj){
    axios.post('https://json-server-auth-q2r9.onrender.com/users', obj)
    .then(function(res){
        if (res.status == 200) {
            window.location.assign("index.html");
          }else{
            alert("Login failed. Please check your credentials.")
          }
    })
    .catch(function(error){
        console.log(error.response);
    })
}
// login()
// wwww@ffff
// wwwwww
// {'email':'rrrrr@eeeee','password':'qqqqqq'}