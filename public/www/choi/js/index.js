document.addEventListener("DOMContentLoaded", function(){

    // document.getElementById('submit').addEventListener('click',()=>{
    //     var inputData = document.getElementById('email').value;
    //     alert(inputData);
    //     var inputData2 = document.getElementById('password').value;
    //     alert(inputData2);

    //     // fetch("http://localhost:10030/member/login",{
    //     //     username
    //     // })
    //     // .then()
    //     // .then(()=>{
    //     //     location.href="main.html";
    //     // })
    //     // .catch(err=>{
    //     //     console.log(err);
    //     // })
    // });

    // 자바반 제공 소스
    function doLogin() {
        const id = document.getElementById("loginid").value;
        const password = document.getElementById("loginpassword").value;

        fetch("http://112.222.157.156:10010/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            password: password,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              return response.text();
            }
            return response.text();
          })
          .then((data) => {
            console.log(data);
          });
      }
    
});