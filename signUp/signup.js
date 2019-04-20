function signup(){
    const email = document.getElementById("email").value;
    const password= document.getElementById("pw").value;
    const name = document.getElementById("name").value;

    const parameter = JSON.stringify({
        email,
        password,
        name
    });
    console.log(parameter);
    axios.post('http://aws.jaehoon.kim:5001/api/accounts', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Content-Type': 'application/json'
            
        },
        mode: 'no-cors'
    } , parameter)
        .then(res=>{
            if(res.state === 200){
                alert("회원가입 성공!");
                location.href="../main/main.html"
                let JWT = JSON.parse(res.response);
                console.log(JWT);
                let storage = localStorage;
                storage.setItem( 'JWT', JWT.accessTocken);

                console.log(storage);
            }
            else if(res.state === 401){
                alert("로그인 실패");
                location.href="../login/login.html"
            }
        })
        .catch(err=>{
            console.log(err);
            alert("오류!")
        })
        
    
}