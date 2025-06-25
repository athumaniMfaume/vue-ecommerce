<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container-fluid">
      <!-- Brand -->
      <router-link class="navbar-brand fw-bold text-white" to="/">🛒 MyShop</router-link>

      <!-- Mobile toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/cart">
              <i class="bi bi-cart3"></i> Cart
            </router-link>
          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Phones</a></li>
              <li><a class="dropdown-item" href="#">Electronics</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Other</a></li>
            </ul>
          </li>
        </ul>

        <!-- Search -->
        <form class="d-flex" @submit.prevent>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search products..."
            v-model="searchQuery"
          />
          <button class="btn btn-light" type="submit" @click="onSearch">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

function onSearch() {
  alert(`Searching for: ${searchQuery.value}`)
}
</script>
