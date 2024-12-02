<!DOCTYPE html>
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
