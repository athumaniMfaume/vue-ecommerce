import { reactive, watch } from 'vue'

const STORAGE_KEY = 'cart_items'

// Load saved cart from localStorage if available
const savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

export const cart = reactive({
  items: savedItems,

  add(product) {
    const existing = this.items.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      this.items.push({ ...product, quantity: 1 })
    }
  },

  remove(productId) {
    this.items = this.items.filter((item) => item.id !== productId)
  },

  clear() {
    this.items = []
  },

  get total() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
})

// Automatically save cart to localStorage whenever it changes
watch(
  () => cart.items,
  (newItems) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
  },
  { deep: true },
)
