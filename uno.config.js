import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
   theme: {
    colors: {
      primary: {
        50: '#e8f4fc',
        500: '#3498db',
        600: '#2980b9',
        800: '#2c3e50'
      },
      success: '#27ae60',
      warning: '#f39c12',
      error: '#e74c3c'
    }
  },
  rules: [
    ['body-def', {
      'font-family': ['Arial', 'sans-serif'],
      'line-height': '1.6',
      'color': '#333',
      'background-color': '#f4f4f4'
    }],

    ['btn-primary', { 
      'background': 'linear-gradient(135deg, #667eea, #764ba2)',
      'color':'linear-gradient(135deg, #667eea, #764ba2)', 
      'padding': '2rem 0',
      'text-align': 'center'
    }],

    ['text-gradient', {
      'background': 'linear-gradient(45deg, #f093fb, #f5576c)',
      'background-clip': 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }],

    ['nav', {
      'background-color': '#434343',
      'padding': '1rem 0'
    }],
    
    ['nav-a', {
      'background-color': '#434343',
      'color': 'white',
      'text-decoration': 'none',
      'padding': '0.5rem 1rem',
      'margin': '0 0.5rem',
      'border-radius': '4px',
      'transition': 'background-color 0.3s ease'
    }],

    ['reset-spacing', { 
      'margin': '0', 
      'padding': '0',
      'box-sizing': 'border-box'
    }],

    ['main-def', {
      'max-width': '1900px',
      'margin': '2rem auto',
      'padding': '0 1rem'
    }],

    ['card', {
      'background': 'white',
    'padding': '2rem',
    'margin-bottom': '2rem',
    'border-radius': '8px',
    'box-shadow': '0 2px 5px rgba(0,0,0,0.1)'
    }],

    ['footer-def', {
    'background-color': '#434343',
    'color': 'white',
    'text-align': 'center',
    'padding': '1rem 0',    
    'margin-top': '2rem'
    }],

     ['sidebar-base', {
      'position': 'fixed',
      'top': '0',
      'left': '-400px',
      'width': '300px',
      'height': '100vh',
      'background': '#434343',
      'color': 'white',
      'transition': 'left 0.3s ease',
      'z-index': '2000',
      'padding': '60px 20px 20px'
    }],
    
    ['sidebar-open', {
      'left': '0'
    }],
    
    ['overlay-base', {
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'background': 'rgba(0,0,0,0.5)',
      'opacity': '0',
      'visibility': 'hidden',
      'transition': 'all 0.3s ease',
      'z-index': '1500'
    }],
    
    ['overlay-active', {
      'opacity': '1',
      'visibility': 'visible'
    }],
    
    ['close-btn', {
      'position': 'absolute',
      'top': '15px',
      'right': '15px',
      'background': 'none',
      'border': 'none',
      'color': 'white',
      'font-size': '30px',
      'cursor': 'pointer',
      'width': '40px',
      'height': '40px',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    }],
    
    ['menu-toggle', {
      'position': 'fixed',
      'top': '20px',
      'left': '20px',
      'padding': '10px 15px',
      'background': '#2c3e50',
      'color': 'white',
      'border': 'none',
      'border-radius': '5px',
      'cursor': 'pointer',
      'z-index': '1000'
    }],

    ['good', {
      'color': '#27ae60',
      'font-weight': 'bold'
    }],

    ['average', {
      'color': '#f39c12',
      'font-weight': 'bold'
    }],

    ['poor', {
      'color': '#e74c3c',
      'font-weight': 'bold'
    }],

    ['table-container', {
      'overflow-x': 'auto',
      'margin': '30px 0',
      'border': '1px solid #e1e8ed',
      'border-radius': '8px'
    }],

    ['container', {
      'max-width': '1200px',
      'margin': '0 auto',
      'background': 'white',
      'border-radius': '10px',
      'box-shadow': '0 0 20px rgba(0, 0, 0, 0.1)',
      'padding': '30px'
    }]


  ],
  shortcuts: [
    ['btn', 'px-4 py-2 rounded font-medium transition-colors duration-200'],
    ['btn-blue', 'btn bg-blue-500 hover:bg-blue-600 text-white'],
    ['flex-center', 'flex justify-center items-center'],
    ['reset', 'm-0 p-0'],
    ['sidebar', 'sidebar-base'],
    ['overlay', 'overlay-base'],
    ['btn-close', 'close-btn'],
    ['btn-menu', 'menu-toggle'],
    ['custom-container', 'max-w-1200 mx-auto bg-white rounded-xl shadow-lg p-8'],
    ['table-container', 'overflow-x-auto my-8 border border-gray-200 rounded-lg'],
    
    ['main-title', 'text-center mb-2 text-3xl font-bold text-gray-900'],
    ['subtitle', 'text-center mb-8 text-gray-600 text-lg'],
    ['table-caption', 'caption-top bg-primary-500 text-white font-bold text-xl p-4 rounded-t-lg flex justify-center items-center'],
    
    ['table-header', 'bg-primary-800 text-white'],
    ['table-header-cell', 'p-4 text-left font-semibold'],
    ['table-body-cell', 'p-4 text-left'],
    ['table-row', 'border-b border-gray-200 even:bg-gray-50 hover:bg-primary-50 transition-colors'],
    
    ['rating-good', 'text-success font-bold'],
    ['rating-average', 'text-warning font-bold'],
    ['rating-poor', 'text-error font-bold'],
    ['rating-stars', 'text-warning font-bold'],
    
    ['note-box', 'mt-5 p-4 bg-primary-50 border-l-4 border-primary-500 text-sm']

  ]
})