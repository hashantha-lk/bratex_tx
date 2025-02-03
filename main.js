import './style.css'

// Theme toggle functionality
function toggleTheme() {
  document.documentElement.classList.toggle('light-theme')
  document.documentElement.classList.toggle('dark-theme')
  
  // Update the switch state
  const toggle = document.querySelector('.theme-switch input')
  toggle.checked = document.documentElement.classList.contains('light-theme')
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <div class="header-content">
        <h1 class="logo-text">BRATEX</h1>
        <label class="theme-switch">
          <input type="checkbox" onchange="toggleTheme()">
          <span class="slider round"></span>
        </label>
      </div>
    </header>
    <div class="layout">
      <div class="plot-section">
        <div class="button-group">
          <button class="scan-button">Scan Front</button>
          <button class="scan-button">Scan Back</button>
          <button class="scan-button">Calibrate</button>
        </div>
        <div class="plot-grid">
          <div class="plot-area">Image</div>
          <div class="measurements-panel">
            <h2>Measurements</h2>
            <div class="measurement-list">
              <div class="measurement-item">
                <span class="measurement-label">Width:</span>
                <span class="measurement-value">0 mm</span>
              </div>
              <div class="measurement-item">
                <span class="measurement-label">Height:</span>
                <span class="measurement-value">0 mm</span>
              </div>
              <div class="measurement-item">
                <span class="measurement-label">Area:</span>
                <span class="measurement-value">0 mm²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`


// Make the toggleTheme function available globally
window.toggleTheme = toggleTheme

// Set initial theme
document.documentElement.classList.add('dark-theme')