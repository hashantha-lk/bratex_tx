import './style.css'

// Theme toggle functionality with localStorage persistence
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  document.documentElement.classList.add(`${savedTheme}-theme`)
  return savedTheme === 'light'
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light-theme')
  document.documentElement.classList.toggle('dark-theme')
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
  
  // Update the switch state
  const toggle = document.querySelector('.theme-switch input')
  toggle.checked = isLight
}

// Initialize measurements state
const measurements = {
  width: 0,
  height: 0,
  area: 0
}

function updateMeasurements(newMeasurements) {
  Object.assign(measurements, newMeasurements)
  updateMeasurementsDisplay()
}

function updateMeasurementsDisplay() {
  const elements = {
    width: document.querySelector('[data-measurement="width"]'),
    height: document.querySelector('[data-measurement="height"]'),
    area: document.querySelector('[data-measurement="area"]')
  }
  
  if (elements.width) elements.width.textContent = `${measurements.width.toFixed(2)} mm`
  if (elements.height) elements.height.textContent = `${measurements.height.toFixed(2)} mm`
  if (elements.area) elements.area.textContent = `${measurements.area.toFixed(2)} mm²`
}

// Mock scan function
function scanSurface(side = 'front') {
  // Simulate scanning with random measurements
  const newMeasurements = {
    width: Math.random() * 100 + 50,
    height: Math.random() * 100 + 50
  }
  newMeasurements.area = newMeasurements.width * newMeasurements.height
  
  updateMeasurements(newMeasurements)
}

// Initialize app
document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <div class="header-content">
        <h1 class="logo-text">BRATEX</h1>
        <label class="theme-switch">
          <input type="checkbox" onchange="window.toggleTheme()">
          <span class="slider round"></span>
        </label>
      </div>
    </header>
    <div class="layout">
      <div class="plot-section">
        <div class="button-group">
          <button class="scan-button" onclick="window.scanSurface('front')">
            Scan Front
          </button>
          <button class="scan-button" onclick="window.scanSurface('back')">
            Scan Back
          </button>
          <button class="scan-button" onclick="window.scanSurface('calibrate')">
            Calibrate
          </button>
        </div>
        <div class="plot-grid">
          <div class="plot-area">Scan preview will appear here</div>
          <div class="measurements-panel">
            <h2>Measurements</h2>
            <div class="measurement-list">
              <div class="measurement-item">
                <span class="measurement-label">Width:</span>
                <span class="measurement-value" data-measurement="width">0.00 mm</span>
              </div>
              <div class="measurement-item">
                <span class="measurement-label">Height:</span>
                <span class="measurement-value" data-measurement="height">0.00 mm</span>
              </div>
              <div class="measurement-item">
                <span class="measurement-label">Area:</span>
                <span class="measurement-value" data-measurement="area">0.00 mm²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>2025 Thullex GmbH</footer>
`

// Make functions available globally
window.toggleTheme = toggleTheme
window.scanSurface = scanSurface

// Initialize theme on load
const isLightTheme = initTheme()
document.querySelector('.theme-switch input').checked = isLightTheme