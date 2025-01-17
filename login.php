<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShoeStore</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <aside class="sidebar">
            <h2>ShoeStore</h2>
            <ul>
                <li><a href="indeks.php" class="active">Dashboard</a></li>
                <li><a href="produkte.php">Products</a></li>
                <li><a href="newcart.php">Orders</a></li>
                <li><a href="custumers.php">Customers</a></li>
                <li><a href="login.php">login</a></li>
            </ul>
        </aside>
    </div>

    <div class="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <input type="text" placeholder="Username" id="username" required>
            <input type="password" placeholder="Password" id="password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#">Register</a></p>
    </div>

    <script>
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            
            if (username === "admin" && password === "password123") {
                alert("U regjistrua me sukses!");
            } else {
                alert("Provo përsëri! Të dhënat nuk janë të sakta.");
            }
        });
    </script>
</body>
</html>

