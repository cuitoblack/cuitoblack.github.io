<?php 
$errors = "";
$myemail = "cuito@blackmajor.co.za";//<-----Put Your email address here.

$email_address = $_POST['address']; 

$to = $myemail; 
$email_subject = "Test";
$email_body = "Testing"; 
	
$headers = "From: $myemail\n"; 
$headers .= "Reply-To: $email_address";
	
mail($to,$email_subject,$email_body,$headers);
?>