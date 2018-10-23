<?php
$errors = '';
$myemail = 'guilhermejabur@outlook.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
if( empty($errors))
{
$to = $myemail;
$email_subject = "[$name] New Foton Lead";
$email_body = "$email_address\n\n$message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: about.html');
}
?>