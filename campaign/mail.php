<?php 


$to = "matheen@benfy.co";
$subject = "New lead from Shradda campaign";
$message = "Name : " . $_GET['name'] . " - Email : " . $_GET['email'] . " - Phone : " . $_GET['phone'] . " - Message : " . $_GET['message'];

mail($to, $subject, $message);

header('Location: /campaign/thankyou.html');