var checkOtpVar;
var uid;
var xhr =new XMLHttpRequest();
var otp;
function isMailValid()
{

	uid=document.forms["fform"]["uid"].value;
	document.forms["fform"]["uid"].style.borderColor="#ccc";
	if(!uid.match(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/))
	{
		document.forms["fform"]["uid"].style.borderColor="red";
	}
	else
	{
			if (xhr.readyState == 4 || xhr.readyState == 0) 
				{
	
				xhr.open("GET", 'http://localhost:8090/ChargebackCalculation/CheckMailController?email='+uid, true);
				xhr.onreadystatechange = function(){setDiv(xhr);}; 
				xhr.send(null);
				}	
	}
}
function setDiv(xhr)
{
if (xhr.readyState == 4) 
{
var str = xhr.responseText;
//alert(str);
if(str=="false")
	{
	myFunction("The Email Does Not Exist!!");
	}
else
	SendOtp2();

	}
}
function SendOtp2()
	{ 
	
		var uid=document.forms["fform"]["uid"].value;
		document.forms["fform"]["uid"].style.borderColor="#ccc";
		if(!uid.match(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/))
		{
			document.forms["fform"]["uid"].style.borderColor="red";
		}
		else
			{
			otp=Math.round(Math.random()*1000000);
			
			if (xhr.readyState == 4 || xhr.readyState == 0) 
			{
			xhr.open("GET", 'http://localhost:8090/ChargebackCalculation/SendOtp?otp='+otp+'&to='+uid+'&name="user"', true);
			xhr.onreadystatechange = function(){setDiv3(xhr);}; 
			xhr.send(null);	
			document.getElementById("otp_button2").disabled=true;
			document.getElementById("resend_Otp2").innerHTML="Otp Sent!! <a  href='#' onclick='SendOtp2();'>Click Here</a> to send again.";
			}
			}
	}
function setDiv3(xhr)
{
if (xhr.readyState == 4) 
{
var str = xhr.responseText;

//alert(str);

	myFunction(str);

	}
}

	function checkOtp2()
		{
		var otp2=document.forms["fform"]["otp"].value;
		
		if(otp2==otp)
			{
			checkOtpVar = 1;
			document.getElementById("out2").innerHTML="Verified";
			}
		else
			{
			checkOtpVar = 0;
			document.getElementById("out2").innerHTML="Check OTP";
			
			}
			 
		
		}

function forgotPassword()
{	
	var uid=document.forms["fform"]["uid"].value;
	var pswd=document.forms["fform"]["pswd"].value;
	var cpswd=document.forms["fform"]["cpswd"].value;
	
	var uid_flag,pswd_flag,cpswd_flag;
	
	document.forms["fform"]["uid"].style.borderColor="#ccc";
	document.forms["fform"]["pswd"].style.borderColor="#ccc";
	document.forms["fform"]["cpswd"].style.borderColor="#ccc";
	
	if(!uid.match(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/))
	{
		document.forms["fform"]["uid"].style.borderColor="red";
	}
	else
	{
		uid_flag=1;
	}
	
	if(!pswd.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
	{
		document.forms["fform"]["pswd"].style.borderColor="red";
		document.getElementById("p_mssg").style.display="block";
		document.getElementById("p_mssg").innerHTML="password must contain atleast one capital letter,one small letter,one digit and one special character(!@#$%^&*) and minimum length must be 8";
	}
	else
	{
		pswd_flag=1;
		
	}	
	
	if(!cpswd.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) && !cpswd.match(pswd))
	{
		document.forms["fform"]["cpswd"].style.borderColor="red";	
		document.getElementById("c_mssg").style.display="block";
		document.getElementById("c_mssg").innerHTML="Password and Confirm Password must be same";
	}
	else
	{
		cpswd_flag=1;
		
	}	
	
	if(uid_flag==1 && pswd_flag==1 && cpswd_flag==1)
	{
		document.forms["fform"].submit();
	}
	else
	{
		document.getElementById("fpass").innerHTML="please update the highlighted mandetory field(s)";
		document.getElementById("fpass").style.color="red";
	}
	
}
function myFunction(str) {

	  var x = document.getElementById("snackbar");
	  x.innerHTML=str;
	  x.className = "show";
	  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	 
	}