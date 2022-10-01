function display()
		{
			var n;
			var name=document.getElementById("aa").value;
			if(name ==""||name=="null")
			{
				n="name can't be blank";
			}
			else{
				n="";
			}
			{
				document.getElementById("aa").innerHTML=n;
			}
   var a,data;
      a=document.getElementById("ss").value;
   if(isNaN(a) || a.length!=10) {
    data="not valid";
   }
   else{
   	    data=" valid";

   }
   document.getElementById("dd").innerHTML=data;
			var email=document.getElementById('txtEmail');
			var filter=/^([a-zA-Z0-9\_\.\-])+\@(([a-z A-Z0-9\-])+\.)+([a-zA-z0-9]{3,9})+$/;
			if(!filter.test(email.value)){
				alert("Please provide a valid email address!");
			}
			else{
				alert("Submitted Successfully!");
			}