<template>
  <div class="container-fluid mt-4">
    <div class="row g-3">
      <div v-for="product in products" :key="product.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm d-flex flex-column">
          <img :src="product.image" class="card-img-top img-fluid" :alt="product.name" />
          <div class="card-body d-flex flex-column flex-grow-1">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-muted mb-2">{{ currency(product.price) }}</p>

            <div class="button-wrapper flex-grow-1 d-flex flex-column justify-content-end">
              <router-link :to="`/product/${product.id}`" class="btn btn-primary mb-2">
                View Details
              </router-link>
              <button class="btn btn-success" @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Adjust the import path of your cart store if needed
import { cart } from '@/stores/cartStore'

const products = ref([
  {
    id: 1,
    name: 'Smartphone A',
    price: 299.99,
    image:
      'https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Laptop B',
    price: 799.99,
    image:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Headphones C',
    price: 99.99,
    image:
      'https://images.pexels.com/photos/3394655/pexels-photo-3394655.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Smartwatch D',
    price: 199.99,
    image:
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 59.99,
    image:
      'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'Tablet E',
    price: 349.99,
    image:
      'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    name: 'Gaming Headset',
    price: 129.99,
    image:
      'https://images.pexels.com/photos/3945663/pexels-photo-3945663.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    name: 'DSLR Camera',
    price: 899.99,
    image:
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    name: 'Wireless Mouse',
    price: 24.99,
    image:
      'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    name: 'Keyboard Combo',
    price: 49.99,
    image:
      'https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 11,
    name: 'Monitor 24"',
    price: 159.99,
    image:
      'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 12,
    name: 'VR Headset',
    price: 499.99,
    image:
      'https://images.pexels.com/photos/7988074/pexels-photo-7988074.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
])

const currency = (value) => {
  return `$${value.toFixed(2)}`
}

function addToCart(product) {
  cart.add(product)
  alert(`Added "${product.name}" to cart!`)
}
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: scale(1.03);
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}

.button-wrapper {
  gap: 0.5rem; /* Space between buttons */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
}
</style>
