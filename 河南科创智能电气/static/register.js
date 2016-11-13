
window.onload = function(){

    document.forms[0].onsubmit = function(e){

        e.preventDefault();

        var psw = document.querySelector('#psw').value

        var pswAgain = document.querySelector('#pswAgain').value


            if(psw != pswAgain){

                alert('两次密码不一致')

                return
            }

            var data = new FormData(this)

            console.log(data)

            var xhr = new XMLHttpRequest()

            xhr.onreadystatechange = function(){

                if(xhr.readyState == 4){

                    var jsonObj = JSON.parse(xhr.responseText)

                    if(jsonObj.success == 1){

                        alert('恭喜你，注册成功！')
                    }
                    
                }
            }

            xhr.open('POST','/user/register')
        
            xhr.send(data)

        }
}