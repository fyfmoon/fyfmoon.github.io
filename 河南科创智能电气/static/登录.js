window.onload = function() {

	document.forms[0].onsubmit = function(e) {

		//阻止表单的默认事件
		e.preventDefault()

		var data = new FormData(this)

		var xhr = new XMLHttpRequest()

		xhr.onreadystatechange = function() {

			if(xhr.readyState == 4) {
				
				
				var jsonObj = JSON.parse(xhr.response)
				
				if(jsonObj.success == 1){
					
					alert('恭喜你，登录成功！')
					location.href = 'index.html'
				}
				else{
					
					alert(jsonObj.resultMsg)
				}

			}
		}

		xhr.open('POST', '/user/login')

		xhr.send(data)
	}
	

}