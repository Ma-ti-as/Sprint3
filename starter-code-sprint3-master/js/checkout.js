// Exercise 9
function validate() { 
//expressions regulars utilitzades per validar diferrents dades
var checkLetras=/^[a-zA-Z\s]*$/; //validar només lletres majúscules i minúscules
var checkNum=/^\d*$/;//validar només números 
var checkPass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;//validar números i lletres majúscules i minúscules
var checkEmail=/\w+@\w+\.+[a-z]/;//valida email(números o lletres+ @ + números o lletres + punt + lletres minúscules)

var email = document.querySelector(".email");
var password = document.querySelector(".password");
var address = document.querySelector(".address");
var phone = document.querySelector('.phone');
var name = document.querySelector(".name");
var lastName = document.querySelector(".lastName"); 
var errorName = document.getElementById("errorName").innerHTML;
var errorPhone = document.getElementById('errorPhone').innerHTML;
var errorPassword = document.getElementById("errorPassword").innerHTML;


   //name
   
   //last name   
   
  
 
 

//name
   if(name.value.length==0){
      console.log('pop');
      document.getElementById("wName").classList.add('input-error-active');
      name.nextElementSibling.classList.add('mensaje-activo');
      name.nextElementSibling.textContent='All camps are required';
      
      return false;
      }else{
         document.getElementById("wName").classList.remove('input-error-active');
         name.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wName").classList.add('input');
      }




   if(name.value.length<3){
      console.log('pop');
      document.getElementById("wName").classList.add('input-error-active');
      name.nextElementSibling.classList.add('mensaje-activo');
      name.nextElementSibling.textContent='At least 3 digits required';
      
      return false;
      }else{
         document.getElementById("wName").classList.remove('input-error-active');
         name.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wName").classList.add('input');
      }

   if(name.value.search(checkLetras)){
         
      document.getElementById("wName").classList.add('input-error-active');
      name.nextElementSibling.classList.add('mensaje-activo')
      name.nextElementSibling.textContent='Numbers are forbidden';
      
      return false;
      }else{
         document.getElementById("wName").classList.remove('input-error-active');
         name.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wName").classList.add('input')

      } 
   //email
   if(email.value.length==0){
      console.log('pop');
      document.getElementById("wEmail").classList.add('input-error-active');
      email.nextElementSibling.classList.add('mensaje-activo');
      email.nextElementSibling.textContent='All camps are required';
      
      return false;
      }else{
         document.getElementById("wEmail").classList.remove('input-error-active');
         email.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wEmail").classList.add('input');
      }

   if(email.value.search(checkEmail)){
      document.getElementById("wEmail").classList.add('input-error-active');
      email.nextElementSibling.classList.add('mensaje-activo');
      email.nextElementSibling.textContent='Enter a valid email address';
      
      return false;
      }else{
         document.getElementById("wEmail").classList.remove('input-error-active');
         email.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wEmail").classList.add('input');
   
      }
   
  //address
   if(address.value.length==0){
      console.log('pop');
      document.getElementById("wAddress").classList.add('input-error-active');
      address.nextElementSibling.classList.add('mensaje-activo');
      address.nextElementSibling.textContent='All camps are required';
      
      return false;
      }else{
         document.getElementById("wAddress").classList.remove('input-error-active');
         address.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wAddress").classList.add('input');
      }

   if(address.value.length<3){
      console.log('pop');
      document.getElementById("wAddress").classList.add('input-error-active');
      address.nextElementSibling.classList.add('mensaje-activo');
      address.nextElementSibling.textContent='At least 3 digits required';
      
      return false;
      }else{
         document.getElementById("wAddress").classList.remove('input-error-active');
         address.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wAddress").classList.add('input');
      }
      //last name
   if(lastName.value.length==0){
      console.log('pop');
      document.getElementById("wLastName").classList.add('input-error-active');
      lastName.nextElementSibling.classList.add('mensaje-activo');
      lastName.nextElementSibling.textContent='All camps are required';
      
      return false;
      }else{
         document.getElementById("wLastName").classList.remove('input-error-active');
         lastName.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wLastName").classList.add('input');
      }

   if(lastName.value.length<3){
      console.log('pop');
      document.getElementById("wLastName").classList.add('input-error-active');
      lastName.nextElementSibling.classList.add('mensaje-activo');
      lastName.nextElementSibling.textContent='At least 3 digits required';
      
      return false;
      }else{
         document.getElementById("wLastName").classList.remove('input-error-active');
         lastName.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wLastName").classList.add('input');
      }

   if(lastName.value.search(checkLetras)){

      document.getElementById("wLastName").classList.add('input-error-active');
      lastName.nextElementSibling.classList.add('mensaje-activo');
      lastName.nextElementSibling.textContent='Numbers are forbidden';
      
      return false;
      }else{
         document.getElementById("wLastName").classList.remove('input-error-active');
         lastName.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wLastName").classList.add('input');
   
      }
   //password
   if(password.value.length==0){
      console.log('pop');
      document.getElementById("wPassword").classList.add('input-error-active');
      password.nextElementSibling.classList.add('mensaje-activo');
      password.nextElementSibling.textContent='All camps are required';
      
      return false;
      }else{
         document.getElementById("wPassword").classList.remove('input-error-active');
         password.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wPassword").classList.add('input');
      }


   if(password.value.length<3){
      console.log('pop');
      document.getElementById("wPassword").classList.add('input-error-active');
      password.nextElementSibling.classList.add('mensaje-activo');
      password.nextElementSibling.textContent='At least 3 digits required';
      
      return false;
      }else{
         document.getElementById("wPassword").classList.remove('input-error-active');
         password.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wPassword").classList.add('input');
      }
   if(password.value.search(checkPass)){
      document.getElementById("wPassword").classList.add('input-error-active');
      password.nextElementSibling.classList.add('mensaje-activo');
      password.nextElementSibling.textContent='Numbers and letters needed';
      
      return false;
      }else{
         document.getElementById("wPassword").classList.remove('input-error-active');
         password.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wPassword").classList.add('input');
   
      }
   
   //phone
   if(phone.value.search(checkNum)){
      document.getElementById("wPhone").classList.add('input-error-active');
      phone.nextElementSibling.classList.add('mensaje-activo');
      phone.nextElementSibling.textContent='Just numbers';
      
      return false;
      }else{
         document.getElementById("wPhone").classList.remove('input-error-active');
         phone.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wPhone").classList.add('input');
   
      }

   if(phone.value.length==0){
      console.log('pop');
      document.getElementById("wPhone").classList.add('input-error-active');
      phone.nextElementSibling.classList.add('mensaje-activo');
      phone.nextElementSibling.textContent='All camps are required';
      
      return false;
      }else{
         document.getElementById("wPhone").classList.remove('input-error-active');
         phone.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wPhone").classList.add('input');
   
      }
   

   if(phone.value.length<3){
      console.log('pop');
      document.getElementById("wPhone").classList.add('input-error-active');
      phone.nextElementSibling.classList.add('mensaje-activo');
      phone.nextElementSibling.textContent='At least 3 digits required';
      
      return false;
      }else{
         document.getElementById("wPhone").classList.remove('input-error-active');
         phone.nextElementSibling.classList.remove('mensaje-activo');
         document.getElementById("wPhone").classList.add('input');
         return false;
   
      }

   

   
    
   /*if(name.value.length==0||lastName.value.length==0||email.value.length==0||password.value.length==0||address.value.length==0||phone.value.length==0){
      alert('All camps required')
      //document.getElementById("mensaje").classList.add('mensaje-activo');
      return false;
   }*/
   
   
    
}
    // Validate fields entered by the user: name, phone, password, and email
