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
</html>  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Gallery</title>
    <link rel="stylesheet" href="produkte.css">
  
</head>
<body>
    <div class="container">
    
        <aside class="sidebar">
            <h2>ShoeStore</h2>
            <ul>
                <li><a href="indeks.php" class="active" onclick="showSection('dashboard')">Dashboard</a></li>
                <li><a href="produkte.php" onclick="showSection('products')">Products</a></li>
                <li><a href="newcart.php" onclick="showSection('orders')">Orders</a></li>
                <li><a href="custumers.php" onclick="showSection('customers')">Customers</a></li>
                <li><a href="login.php" onclick="showSection('reports')">Login</a></li>
              
            </ul>
        </aside>
    
  
        <main class="main-content">
            <h1>Our Products</h1>
            <div class="gallery">
             
                <div class="gallery-item">
                    <img src="image/images (1).jfif" alt="Nike Air Max">
                    <p>Nike Air Max</p>
                    <p class="price">$120</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
                <div class="gallery-item">
                    <img src="image/jdau_product_list.webp" alt="Adidas Ultraboost">
                    <p>Adidas Ultraboost</p>
                    <p class="price">$150</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
                <div class="gallery-item">
                    <img src="image/NIKE+COURT+VISION+LO+NN.png" alt="Nike Court Vision">
                    <p>Nike Court Vision</p>
                    <p class="price">$90</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
                <div class="gallery-item">
                    <img src="image/images.jfif" alt="Puma Classic">
                    <p>Puma Classic</p>
                    <p class="price">$85</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
          
                <div class="gallery-item">
                    <img src="image/produkut i ri(1).webp" alt="Product 1">
                    <p>Product 1</p>
                    <p class="price">$100</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
                <div class="gallery-item">
                    <img src="image/Produki i dyte.jpg" alt="Product 2">
                    <p>Product 2</p>
                    <p class="price">$110</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
                <div class="gallery-item">
                    <img src="image/White_Navy.webp" alt="Product 3">
                    <p>Product 3</p>
                    <p class="price">$95</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
                <div class="gallery-item">
                    <img src="image/AIR+ZOOM+PEGASUS+41.png" alt="Air Zoom Pegasus">
                    <p>Air Zoom Pegasus</p>
                    <p class="price">$130</p>
                    <a href="newcart.php"><button>Order</button></a>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shoe Store Dashboard</title>
  <link rel="stylesheet" href="new.css">
  
</head>
<body>
  <div class="container">
   
    <aside class="sidebar">
      <h2>ShoeStore</h2>
      <ul>
        <li><a href="indeks.php" class="active" onclick="showSection('dashboard')">Dashboard</a></li>
        <li><a href="produkte.php" onclick="showSection('products')">Products</a></li>
        <li><a href="newcart.php" onclick="showSection('orders')">Orders</a></li>
        <li><a href="custumers.php" onclick="showSection('customers')">Customers</a></li>
        <li><a href="login.php" onclick="showSection('reports')">Login</a></li>
      </ul>
    </aside>

 
    <div class="main-content">
      <header>
        <h1>Welcome to ShoeStore Dashboard</h1>
        <button onclick="toggleProductForm()">Porosit Produkt</button>
      </header>

      <div class="banner">
        <h2>Latest Updates</h2>
        <p>Stay updated with new product arrivals and store statistics.</p>
      </div>

   
      <div id="productForm" class="product-form">
        <h2>Order</h2>
        <form id="order-form">
          <input type="text" name="product-name" placeholder="Product Name" required>
          <input type="number" name="product-quantity" placeholder="Quantity" min="1" required>
          <input type="text" name="buyer-name" placeholder="Buyer Name" required>
          <input type="text" name="buyer-address" placeholder="Delivery Address" required>
          <input type="tel" name="buyer-phone" placeholder="Phone Number" pattern="[0-9]{10}" required>
          <textarea name="special-notes" placeholder="Additional Notes (optional)" rows="3"></textarea>
          <button type="submit">Submit Order</button>
      </form>
      
      <div id="overlay" class="overlay" onclick="toggleProductForm()"></div>
    </div>
  </div>

  <script>
    
    function toggleProductForm() {
      const productForm = document.getElementById('productForm');
      const overlay = document.getElementById('overlay');
      if (productForm.style.display === 'block') {
        productForm.style.display = 'none';
        overlay.style.display = 'none';
      } else {
        productForm.style.display = 'block';
        overlay.style.display = 'block';
      }
    }

    document.getElementById('order-form').addEventListener('submit', function (e) {
      e.preventDefault(); 
      
      
      const productName = e.target['product-name'].value;
      const productQuantity = e.target['product-quantity'].value;
      const buyerName = e.target['buyer-name'].value;
      const buyerAddress = e.target['buyer-address'].value;
      const buyerPhone = e.target['buyer-phone'].value;
      const specialNotes = e.target['special-notes'].value;

      alert(
        Porosia u dërgua me sukses!
        Detaje të Porosisë:
        - Produkti: ${productName}
        - Sasia: ${productQuantity}
        - Blerësi: ${buyerName}
        - Adresa: ${buyerAddress}
        - Telefoni: ${buyerPhone}
        ${specialNotes ? - Shënime: ${specialNotes} : ''}
      );

      
      toggleProductForm();

     
      e.target.reset();
    });

    
    
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShoeStore</title>
    <link rel="stylesheet" href="customer.css">
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
                <li><a href="login.php" aria-label="Reports">Login</a></li>
                
            </ul>
        </aside>

       
        <div class="main-content">
      
            <header>
                <h1>Consumer opinions </h1>
            </header>

          
            <div class="banner">
                <h2>Your Favorite Online Shoe Store</h2>
                <p>Quality, style, and comfort at your fingertips.</p>
            </div>

        
            <div class="reviews">
                <h3>What Our Customers Are Saying</h3>

                
                <div class="reviews-top">
                    <p>
                        <strong>Ilir b</strong>
                        "The quality of the shoes is absolutely amazing. I always find what I'm looking for here!"
                    </p>
                    <p>
                        <strong>leo h</strong>
                        "Fantastic customer service and fast delivery. Highly recommended!"
                    </p>
                    <p>
                        <strong>toni  m</strong>
                        "I love the variety of styles available. ShoeStore never disappoints!"
                    </p>
                </div>

                <div class="reviews-bottom">
                    <p>
                        <strong>lona a</strong>
                        "Great prices and fast shipping. I will definitely order again."
                    </p>
                    <p>
                        <strong>Amy C.</strong>
                        "The customer support team was very helpful in resolving my issue quickly."
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
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

CREATE DATABASE shoestore;


CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Customers (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Phone VARCHAR(15)
);

CREATE TABLE Orders (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductId INT NOT NULL,
    CustomerId INTNOT NULL,
    UserId INT NOT NULL,  
    Quantity INT NOT NULL,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CustomerId) REFERENCES Customers(Id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE ON UPDATE CASCADE
);
  me mundso lidhjeen 