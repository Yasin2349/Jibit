<template>
  <div class="app-container">
    <!-- Header -->
    <header class="header">
      <div class="logo">XDGPay</div>
      <nav class="menu">
        <NuxtLink to="/register"><button class="menu-button">sign up</button></NuxtLink>
        <NuxtLink to="/login"><button class="menu-button">sign in</button></NuxtLink>
        
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main">
      <!-- Crypto List -->
      <aside class="crypto-sidebar">
        <h2>Cryptocurrencies</h2>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search cryptocurrencies..."
          class="search-input"
          @input="debouncedSearch"
        />
        <div class="crypto-list">
          <div
            v-for="crypto in filteredCryptos"
            :key="crypto.id"
            class="crypto-item"
            :class="{ 'selected': selectedCrypto === crypto.id }"
            @click="selectCrypto(crypto.id, crypto.symbol)"
          >
            <img :src="crypto.image" alt="crypto logo" class="crypto-logo" />
            <span>{{ crypto.name }} ({{ crypto.symbol.toUpperCase() }})</span>
          </div>
        </div>
      </aside>

      <!-- TradingView Chart -->
      <section class="chart-section">
        <h2>Price Chart - {{ selectedCryptoName }}</h2>
        <div id="tradingview_chart" class="chart-container"></div>
      </section>

      <!-- Order Book -->
      <aside class="order-sidebar">
        <h2>Order Book - {{ selectedCryptoName }}</h2>
        <div class="order-section">
          <h3>Buy Orders</h3>
          <div class="order-list">
            <div
              v-for="order in buyOrders"
              :key="order.id"
              class="order-item"
            >
              <span>{{ order.price.toFixed(2) }} USD</span>
              <span>{{ order.amount.toFixed(4) }} {{ selectedCryptoSymbol }}</span>
            </div>
          </div>
        </div>
        <div class="order-section">
          <h3>Sell Orders</h3>
          <div class="order-list">
            <div
              v-for="order in sellOrders"
              :key="order.id"
              class="order-item"
            >
              <span>{{ order.price.toFixed(2) }} USD</span>
              <span>{{ order.amount.toFixed(4) }} {{ selectedCryptoSymbol }}</span>
            </div>
          </div>
        </div>
      </aside>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 XDGPay. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Default crypto list for fallback
const defaultCryptos = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', image: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', image: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png' },
  { id: 'tether', name: 'Tether', symbol: 'USDT', image: 'https://assets.coingecko.com/coins/images/325/thumb/Tether.png' }
]

const searchQuery = ref('')
const cryptos = ref([])
const selectedCrypto = ref('bitcoin')
const selectedCryptoSymbol = ref('BTC')
const selectedCryptoName = ref('Bitcoin')
const buyOrders = ref([])
const sellOrders = ref([])

// Debounce function
const debounce = (func: Function, wait: number) => {
  let timeout: number | null = null
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Fetch cryptocurrencies from CoinGecko API
const fetchCryptos = async (query = '') => {
  try {
    const response = await fetch(
      query
        ? `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${query}`
        : 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    )
    if (!response.ok) throw new Error('Failed to fetch cryptocurrencies')
    const data = await response.json()
    cryptos.value = data.length > 0 ? data : defaultCryptos // Fallback to default if empty
  } catch (error) {
    console.error('Error fetching cryptos:', error)
    cryptos.value = defaultCryptos // Fallback to default list
  }
}

// Debounced search
const debouncedSearch = debounce(() => {
  fetchCryptos(searchQuery.value.toLowerCase())
}, 500)

// Filter cryptocurrencies
const filteredCryptos = computed(() => {
  if (!searchQuery.value) return cryptos.value
  return cryptos.value.filter(
    (crypto: any) =>
      crypto.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Fetch buy/sell orders from Coinbase API
const fetchOrders = async (symbol: string) => {
  try {
    const response = await fetch(
      `https://api.exchange.coinbase.com/products/${symbol}-USD/book?level=2`
    )
    if (!response.ok) {
      if (response.status === 429) {
        console.warn('Coinbase API rate limit exceeded')
      }
      throw new Error(`Failed to fetch order book for ${symbol}-USD`)
    }
    const data = await response.json()
    // Validate data structure
    if (!data.bids || !data.asks || !Array.isArray(data.bids) || !Array.isArray(data.asks)) {
      throw new Error('Invalid order book data')
    }
    buyOrders.value = data.bids.slice(0, 10).map(([price, quantity]: [string, string], i: number) => ({
      id: `buy-${symbol}-${i}-${Date.now()}`,
      price: parseFloat(price),
      amount: parseFloat(quantity) // Match template property
    }))
    sellOrders.value = data.asks.slice(0, 10).map(([price, quantity]: [string, string], i: number) => ({
      id: `sell-${symbol}-${i}-${Date.now()}`,
      price: parseFloat(price),
      amount: parseFloat(quantity) // Match template property
    }))
  } catch (error) {
    console.error('Error fetching orders:', error)
    // Fallback to mock data with realistic prices
    const basePrice = symbol === 'BTC' ? 60000 : symbol === 'ETH' ? 3000 : 100 // Tailored base prices
    const mockBuyOrders = Array.from({ length: 10 }, (_, i) => ({
      id: `buy-${symbol}-${i}-${Date.now()}`,
      price: basePrice - Math.random() * basePrice * 0.005, // ~0.5% variance
      amount: Math.random() * 5
    }))
    const mockSellOrders = Array.from({ length: 10 }, (_, i) => ({
      id: `sell-${symbol}-${i}-${Date.now()}`,
      price: basePrice + Math.random() * basePrice * 0.005, // ~0.5% variance
      amount: Math.random() * 5
    }))
    buyOrders.value = mockBuyOrders
    sellOrders.value = mockSellOrders
  }
}

// Select crypto and update chart and orders
const selectCrypto = (cryptoId: string, symbol: string) => {
  selectedCrypto.value = cryptoId
  selectedCryptoSymbol.value = symbol.toUpperCase()
  selectedCryptoName.value = cryptos.value.find((c: any) => c.id === cryptoId)?.name || cryptoId
  loadTradingViewWidget(cryptoId, symbol)
  fetchOrders(symbol.toUpperCase())
}

// Load TradingView widget
const loadTradingViewWidget = (cryptoId: string, symbol: string) => {
  const container = document.getElementById('tradingview_chart')
  if (!container) return

  container.innerHTML = '' // Clear previous widget

  const tradingViewSymbol = `COINBASE:${symbol.toUpperCase()}USD`
  new window.TradingView.widget({
    width: '100%',
    height: '600px',
    symbol: tradingViewSymbol,
    interval: 'D',
    timezone: 'Etc/UTC',
    theme: 'dark',
    style: '1',
    locale: 'en',
    toolbar_bg: '#1a1a1a', // Match new dark gray theme
    enable_publishing: false,
    allow_symbol_change: false,
    container_id: 'tradingview_chart'
  })
}

// Initialize data
onMounted(() => {
  // Load TradingView script
  const script = document.createElement('script')
  script.src = 'https://s3.tradingview.com/tv.js'
  script.async = true
  script.onload = () => {
    fetchCryptos()
    fetchOrders('BTC')
    loadTradingViewWidget('bitcoin', 'BTC')
  }
  script.onerror = () => console.error('Failed to load TradingView script')
  document.head.appendChild(script)

  // Update orders every 1.5 seconds
  const orderInterval = setInterval(() => fetchOrders(selectedCryptoSymbol.value), 1500)

  // Cleanup
  onUnmounted(() => {
    clearInterval(orderInterval)
    if (script.parentNode) document.head.removeChild(script)
  })
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #1a1a1a; /* Dark gray theme */
  color: #e0e0e0;
  font-family: 'Segoe UI', Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background: linear-gradient(90deg, #252525, #333333); /* Gray gradient */
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #00c4b4; /* Turquoise accent */
  letter-spacing: 1px;
}

.menu {
  display: flex;
  gap: 12px;
}

.menu-button {
  padding: 10px 20px;
  background-color: #00c4b4; /* Turquoise buttons */
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s;
}

.menu-button:hover {
  background-color: #00a89a; /* Darker turquoise on hover */
  transform: translateY(-2px);
}

/* Main Content */
.main {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  max-width: 1600px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .main {
    flex-direction: row;
  }
}

/* Crypto Sidebar */
.crypto-sidebar {
  width: 100%;
  height: 700px; /* Match chart-section height */
  background: #252525; /* Dark gray shade */
  padding: 24px;
  border-radius: 12px;
  flex: 1;
  max-width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .crypto-sidebar {
    max-width: 320px;
  }
}

.crypto-sidebar h2 {
  font-size: 22px;
  margin-bottom: 16px;
  color: #00c4b4; /* Turquoise accent */
}

.search-input {
  width: 100%;
  padding: 12px;
  background-color: #333333;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #e0e0e0;
  font-size: 16px;
  margin-bottom: 16px;
}

.search-input:focus {
  outline: none;
  border-color: #00c4b4;
  box-shadow: 0 0 8px rgba(0, 196, 180, 0.3);
}

.crypto-list {
  flex-grow: 1;
  max-height: 600px; /* Adjusted for h2 and search input */
  overflow-y: auto;
}

.crypto-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease, transform 0.2s;
}

.crypto-item:hover {
  background-color: #333333;
  transform: translateX(4px);
}

.crypto-item.selected {
  background-color: #00c4b4;
  color: #ffffff;
}

.crypto-logo {
  width: 24px;
  height: 24px;
}

/* Chart Section */
.chart-section {
  width: 100%;
  height: 700px; /* Set to match other sections */
  flex: 3;
  background: #252525;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.chart-section h2 {
  font-size: 22px;
  margin-bottom: 16px;
  color: #00c4b4;
}

.chart-container {
  width: 100%;
  flex-grow: 1; /* Take up remaining space */
  height: 100%; /* Inherit height from chart-section */
}

/* Order Sidebar */
.order-sidebar {
  width: 100%;
  height: 700px; /* Match chart-section height */
  background: #252525;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .order-sidebar {
    max-width: 320px;
  }
}

.order-sidebar h2 {
  font-size: 22px;
  margin-bottom: 16px;
  color: #00c4b4;
  font-weight: 600;
}

.order-section {
  flex-grow: 1;
}

.order-section h3 {
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 500;
}

.order-section h3:first-child {
  color: #34c759; /* Vibrant green for buy orders */
}

.order-section h3:last-child {
  color: #ff3b30; /* Vibrant red for sell orders */
}

.order-list {
  max-height: 250px; /* Adjusted for two order sections */
  overflow-y: auto;
  background: #333333;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #444444;
}

.order-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #444444;
  font-size: 15px;
  background: linear-gradient(90deg, rgba(0, 196, 180, 0.1), transparent);
  border-radius: 6px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease, transform 0.2s;
}

.order-item:hover {
  background: linear-gradient(90deg, rgba(0, 196, 180, 0.2), transparent);
  transform: translateX(4px);
}

.order-item span {
  font-weight: 500;
  color: #e0e0e0;
}

/* Footer */
.footer {
  background: linear-gradient(90deg, #252525, #333333);
  padding: 16px;
  text-align: center;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.6);
  color: #b0b0b0;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #333333;
}

::-webkit-scrollbar-thumb {
  background: #00c4b4;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00a89a;
}
</style>