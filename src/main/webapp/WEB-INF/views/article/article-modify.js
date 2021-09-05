$(document).ready(function () { 
	
	var formObj = $("form[role='form']"); 
	console.log(formObj); 
	
	$(".modBtn").on("click", function () { 
		formObj.submit(); 
	}); 
	
	$(".cancelBtn").on("click", function () { 
		history.go(-1); 
	}); 
	
	$(".listBtn").on("click", function () { 
		self.location = "${path}/article/list" 
	}); 
	
});

