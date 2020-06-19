function validate()
{ var a= document.getElementById('a1').value;
 var b=document.getElementById('a2').value;
 var c= document.getElementById('a3').value;
 var d=document.getElementById('a4').value;
 var e=document.getElementById('a5').value;
 var f=document.getElementById('ab').value;
if(a==" " || a==0)
{
  alert("Please Enter Password");
  return false;
}
if(b==" " || b==0)
{
  alert("Please Enter First Name");
  return false;
}
if(c==" " || c==0)
{ alert("Please Enter a Valid E-mail");
return false;}
if(d==" " || d==0 || d.length<10)
{ alert("Please Enter a Valid Number");
return false;}
if(e==" ")
{ alert("Please Enter a valid address");
return false;}
}
if(f==" ")
{ alert("Please Enter a valid gender");
return false;}
}
