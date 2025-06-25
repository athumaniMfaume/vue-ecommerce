<template>
  <footer class="text-center text-lg-start bg-primary border-top mt-5 text-white">
    <div class="container p-5">
      <div class="row text-start">
        <!-- Column 1 -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-uppercase fw-bold mb-3">MyShop</h5>
          <p class="small">
            We offer top quality electronics at affordable prices. Shop with confidence!
          </p>
        </div>

        <!-- Column 2 -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-uppercase fw-bold mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="footer-link">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="footer-link">About</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">Contact</router-link>
            </li>
            <li>
              <router-link to="/cart" class="footer-link">Cart</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div class="col-lg-4 col-md-12 mb-4">
          <h5 class="text-uppercase fw-bold mb-3">Contact</h5>
          <p class="mb-2"><i class="bi bi-envelope me-2"></i> support@myshop.com</p>
          <p><i class="bi bi-phone me-2"></i> +255 123 456 789</p>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center p-3 bg-dark text-white small">
      &copy; 2025 designed by- athumanimfaume1995@gmail.com
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: #d1e7dd; /* light teal for contrast */
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-link:hover {
  color: #ffffff; /* bright white on hover */
  text-decoration: underline;
  cursor: pointer;
}
</style>
