function validate()
{ var b= document.getElementById('a2').value;
 var c= document.getElementsByName('ab').value;
 var d=document.getElementById('a3').value;
 var e= document.getElementById('a4').value;
 var f=document.getElementById('a5').value;
if(b==" " || b==0)
{
  alert("Please Enter First Name");
  return false;
}
if(c==" " || c==0)
{ alert("Please Select Gender");
return false;}
if(d==" " || d==0)
{ alert("Please Enter a Valid E-mail");
return false;}
if(d==" " || d==0 || d.length<10)
{ alert("Please Enter a Valid Number");
return false;}
if(c==" ")
{ alert("Please Enter a valid address");
return false;}
}