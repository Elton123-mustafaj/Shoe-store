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

      alert(`
        Porosia u dërgua me sukses!
        Detaje të Porosisë:
        - Produkti: ${productName}
        - Sasia: ${productQuantity}
        - Blerësi: ${buyerName}
        - Adresa: ${buyerAddress}
        - Telefoni: ${buyerPhone}
        ${specialNotes ? `- Shënime: ${specialNotes}` : ''}
      `);

      
      toggleProductForm();

     
      e.target.reset();
    });

    
    
  </script>
</body>
</html>
