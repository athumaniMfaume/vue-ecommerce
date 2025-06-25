<template>
  <div
    v-if="product"
    class="container d-flex flex-column align-items-center mt-4"
    style="max-width: 600px"
  >
    <h2 class="text-center">{{ product.name }}</h2>
    <img
      :src="product.image"
      class="img-fluid mb-3"
      :alt="product.name"
      style="max-height: 300px; object-fit: contain"
    />
    <h4 class="text-success mb-3 text-center">{{ currency(product.price) }}</h4>
    <p class="text-center">{{ product.description }}</p>

    <!-- Add to Cart Button -->
    <button class="btn btn-success mb-3" @click="addToCart(product)">Add to Cart</button>

    <router-link to="/" class="btn btn-secondary">Back</router-link>
  </div>

  <div v-else class="container d-flex flex-column align-items-center mt-4" style="max-width: 600px">
    <p>Product not found.</p>
    <router-link to="/" class="btn btn-primary">Back to Home</router-link>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { cart } from '@/stores/cartStore' // import your reactive cart store

const route = useRoute()
const product = ref(null)

const productList = [
  {
    id: 1,
    name: 'Smartphone A',
    price: 299.99,
    image:
      'https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A powerful smartphone with latest features and great battery life.',
  },
  {
    id: 2,
    name: 'Laptop B',
    price: 799.99,
    image:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'High performance laptop suitable for work and gaming.',
  },
  {
    id: 3,
    name: 'Headphones C',
    price: 99.99,
    image:
      'https://images.pexels.com/photos/3394655/pexels-photo-3394655.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Noise-cancelling headphones with clear sound and deep bass.',
  },
  {
    id: 4,
    name: 'Smartwatch D',
    price: 199.99,
    image:
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Stay connected and track your fitness with this stylish smartwatch.',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 59.99,
    image:
      'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Portable Bluetooth speaker with excellent sound quality.',
  },
  {
    id: 6,
    name: 'Tablet E',
    price: 349.99,
    image:
      'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lightweight tablet perfect for entertainment and productivity.',
  },
  {
    id: 7,
    name: 'Gaming Headset',
    price: 129.99,
    image:
      'https://images.pexels.com/photos/3945663/pexels-photo-3945663.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comfortable gaming headset with surround sound support.',
  },
  {
    id: 8,
    name: 'DSLR Camera',
    price: 899.99,
    image:
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Capture stunning photos with this professional DSLR camera.',
  },
  {
    id: 9,
    name: 'Wireless Mouse',
    price: 24.99,
    image:
      'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Ergonomic wireless mouse with long battery life.',
  },
  {
    id: 10,
    name: 'Keyboard Combo',
    price: 49.99,
    image:
      'https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Keyboard and mouse combo perfect for home and office use.',
  },
  {
    id: 11,
    name: 'Monitor 24"',
    price: 159.99,
    image:
      'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-definition 24-inch monitor with vibrant colors.',
  },
  {
    id: 12,
    name: 'VR Headset',
    price: 499.99,
    image:
      'https://images.pexels.com/photos/7988074/pexels-photo-7988074.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Immersive virtual reality headset for gaming and simulations.',
  },
]

const currency = (value) => {
  return `$${value.toFixed(2)}`
}

watchEffect(() => {
  const id = Number(route.params.id)
  product.value = productList.find((p) => p.id === id) || null
})

function addToCart(product) {
  cart.add(product)
  alert(`${product.name} added to cart!`)
}
</script>
