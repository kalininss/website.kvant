<?php

$frm_name  = "Форма";
$recepient = "kalinin.ss@hotmail.com";
$sitename  = "kvant-sale.ru";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$organization = trim($_POST["organization"]);
$secondname = trim($_POST["secondname"]);


$message = "
E-mail: $email <br>
Имя: $name $secondname <br>
Телефон: $phone <br>
Организация: $organization
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
