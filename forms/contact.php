<?php
// Configuration
$receiving_email_address = 'lucdjomoyika@gmail.com';

// Validation des données
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : '';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

    // Vérifier les champs requis
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Tous les champs sont obligatoires.']);
        exit;
    }

    // Vérifier le format de l'email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Format d\'email invalide.']);
        exit;
    }

    // Préparer l'email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_body = "Nom: " . $name . "\r\n";
    $email_body .= "Email: " . $email . "\r\n";
    $email_body .= "Sujet: " . $subject . "\r\n";
    $email_body .= "Message:\r\n" . $message;

    // Envoyer l'email
    if (mail($receiving_email_address, 'Portfolio Contact: ' . $subject, $email_body, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message.']);
    }
    exit;
}

// Fonction de sécurité
function sanitize_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}
?>
