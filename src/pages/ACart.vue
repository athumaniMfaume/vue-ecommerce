<template>
  <div class="container mt-4" style="max-width: 800px">
    <h2 class="mb-4 text-center">Your Cart</h2>

    <div v-if="cart.items.length">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="d-flex align-items-center justify-content-between mb-3 p-3 border rounded shadow-sm"
      >
        <div class="d-flex align-items-center">
          <img
            :src="item.image"
            alt="product image"
            class="img-thumbnail me-3"
            style="width: 80px; height: 80px; object-fit: contain"
          />
          <div>
            <h5 class="mb-1">{{ item.name }}</h5>
            <p class="mb-1 text-success fw-bold">{{ currency(item.price) }} each</p>
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-secondary btn-sm me-2" @click="decreaseQty(item)">
                -
              </button>
              <span class="fw-bold">{{ item.quantity }}</span>
              <button class="btn btn-outline-secondary btn-sm ms-2" @click="increaseQty(item)">
                +
              </button>
            </div>
          </div>
        </div>

        <div class="text-end">
          <p class="mb-1 fw-bold">Subtotal: {{ currency(item.price * item.quantity) }}</p>
          <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>

      <hr />

      <div class="d-flex justify-content-between align-items-center mt-4">
        <h4>Total:</h4>
        <h4 class="text-success">{{ currency(cart.total) }}</h4>
      </div>

      <div class="mt-4 text-center">
        <button class="btn btn-warning me-3" @click="clearCart">Clear Cart</button>
        <router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
      </div>
    </div>

    <div v-else class="text-center text-muted">
      <p>Your cart is empty.</p>
      <router-link to="/" class="btn btn-primary">Start Shopping</router-link>
    </div>
  </div>
</template>

<script setup>
import { cart } from '@/stores/cartStore'

const currency = (value) => `$${value.toFixed(2)}`

function increaseQty(item) {
  cart.add(item)
}

function decreaseQty(item) {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removeFromCart(item.id)
  }
}

function removeFromCart(productId) {
  cart.remove(productId)
}

function clearCart() {
  cart.clear()
}
</script>

<style scoped>
img.img-thumbnail {
  border-radius: 8px;
  background-color: #f8f9fa;
}
</style>
