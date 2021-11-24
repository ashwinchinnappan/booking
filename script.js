function val(){
  var where = document.form.whre.value;
  var guest = document.form.guess.value;
  var arrival = document.form.arr.value;
  var leving = document.form.lev.value;
  var sel = document.form.stay.value;
  
  if(where ==""){
    alert("You should enter the Destination..!");
    return false;
  }
  if(where == null){
      alert("Invalid destination..")
  }
  if(guest ==""){
    alert("You should enter Number of guest..!");
    return false;
  }
  if(guest == 0){
    alert("Invalid number of guests..!");
    return false;
  }
  if(guest < 0){
    alert("Invalid number of guests..!");
    return false;
  }
  if(arrival ==""){
    alert("You should enter arrival date..!");
    return false;
  }
  if(leving ==""){
    alert("You should enter leaving date..!");
    return false;
  }
  if(sel.value== '0'){
    alert("You should select Hotel stay");
    return false;
  }
  }
function validate(){
var uname = document.form1.name.value;
var mail = document.form1.email.value;
var number = document.form1.num.value;
var sub = document.form1.subject.value;

if(uname=="" || uname == null || uname <8){
alert("Enter valid Name..!!");
return false;
}
if(mail=="" || mail == ".com"){
alert("Enter valid mail");
return false;
}
if(number=="" || number <10){
alert("Enter valid Phone number");
return false;
}
if(sub==""){
alert("Enter Subject..");
return false;
}

}
$('#show').on('click', function () {
  $('.center').show();
  $(this).hide();
})

$('#close').on('click', function () {
  $('.center').hide();
  $('#show').show();
})