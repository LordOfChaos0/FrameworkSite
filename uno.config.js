import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  // Кастомные классы
  rules: [
    // Статические классы
    ['btn-primary', { 
      'background-color': '#3b82f6', 
      'color': 'white',
      'padding': '0.5rem 1rem',
      'border-radius': '0.375rem'
    }],
    ['text-gradient', {
      'background': 'linear-gradient(45deg, #f093fb, #f5576c)',
      'background-clip': 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }],
    // Динамические классы с помощью регулярных выражений
    [/^shadow-(\w+)$/, (match) => {
      const size = match[1]
      const shadows = {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
      }
      return { 'box-shadow': shadows[size] || shadows.md }
    }],
    [/^margin-(\d+)$/, (match) => {
      const value = match[1]
      return { margin: `${value}px` }
    }]
  ],
  
  // Короткие формы (shortcuts)
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium transition-colors duration-200',
    'btn-blue': 'btn bg-blue-500 hover:bg-blue-600 text-white',
    'btn-red': 'btn bg-red-500 hover:bg-red-600 text-white',
    'card': 'bg-white rounded-lg shadow-md p-6 border border-gray-200',
    'flex-center': 'flex justify-center items-center',
    'flex-between': 'flex justify-between items-center',
    'container-custom': 'max-w-6xl mx-auto px-4'
  },
  
  // Темы
  theme: {
    colors: {
      brand: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        accent: '#f59e0b'
      },
      custom: {
        50: '#fef2f2',
        100: '#fee2e2',
        500: '#ef4444',
        800: '#991b1b',
        900: '#7f1d1d'
      }
    },
    spacing: {
      '128': '32rem',
      '144': '36rem'
    }
  }
})