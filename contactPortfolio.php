<?php

try {

    $bdd = new PDO('mysql:host=localhost; dbname=formulaire; charset=utf8;', 'root', '');
    
} catch(Exception $e) {
    
    die('Erreur : ' . $e -> getMessage());
}



$req = $bdd->prepare('INSERT INTO contactportfolio (nom, prenom, email, messages) VALUES(?, ?, ?, ?)');
$req->execute([
    $_POST['lastname'], 
    $_POST['uname'], 
    $_POST['email'], 
    $_POST['comment']
]);

function verifier($valeur){

    $valeur = trim($valeur);
    $valeur = stripslashes($valeur);
    $valeur = htmlspecialchars($valeur);
    return $valeur;
}


    header('Location: contact.html');


?>