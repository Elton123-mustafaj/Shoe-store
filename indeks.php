<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Manage your ShoeStore e-commerce platform with ease. Track sales, orders, products, and customers.">
  <title>E-Commerce Dashboard - Shoes</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="container">
   
    <aside class="sidebar">
      <h2>ShoeStore</h2>
      <ul>
        <li><a href="indeks.php" class="active" aria-label="Dashboard">Dashboard</a></li>
        <li><a href="produkte.php" aria-label="Products">Products</a></li>
        <li><a href="newcart.php" aria-label="Orders">Orders</a></li>
        <li><a href="custumers.php" aria-label="Customers">Customers</a></li>
        <li><a href="login.php" aria-label="Login">Login</a></li>
        <li><a href="indeks.php" id="logout-link" class="logout-btn" aria-label="Log-out">Log-out</a></li>
      </ul>
    </aside>

  
    <main class="main-content">
     
      <div id="dynamic-content">
      
        <section id="dashboard" class="content-section">
          <header>
            <h1>Dashboard</h1>
          </header>
          <section class="stats">
            <div class="stat-card">
              <h3>Total Products</h3>
              <p>350</p>
            </div>
            <div class="stat-card">
              <h3>Total Sales</h3>
              <p>$12,500</p>
            </div>
            <div class="stat-card">
              <h3>Total Customers</h3>
              <p>1,200</p>
            </div>
            <div class="stat-card">
              <h3>Orders Today</h3>
              <p>25</p>
            </div>
          </section>
          <section class="charts">
            <canvas id="salesChart" aria-label="Sales Chart"></canvas>
          </section>
        </section>

    
        <section id="products" class="content-section hidden">
          <h2>Products</h2>
          <p>Manage your inventory and add new products here.</p>
          <button aria-label="Add New Product">Add New Product</button>
        </section>

      
        <section id="orders" class="content-section hidden">
          <h2>Orders</h2>
          <p>Track and manage customer orders efficiently.</p>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>John Doe</td>
                <td>Shipped</td>
                <td>$250</td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Jane Smith</td>
                <td>Processing</td>
                <td>$100</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  </div>

  <script src="script.js"></script>

</body>
</html>
