/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1500px',
      'md': '1024px'
    },
    fontSize: {
      'xs': ['12px', '16px'],
      'sm': ['14px', '20px'],
      'base': ['16px', '24px'],
      'lg': ['18px', '28px'],
      'xl': ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '5xl': ['48px', '56px'],
    },
    extend: {
      colors: {
        'bg-primary': 'hsla(0, 0%, 8%, 1)',
        'bg-secondary': 'hsla(240, 1%, 14%, 1)',
        'bg-tertiary': 'hsla(240, 2%, 13%, 1)',
        'bg-modal': 'hsla(0, 0%, 19%, 1)',
        'bg-accent': 'hsla(217, 100%, 37%, 1)',
        'bg-success': 'hsla(123, 46%, 34%, 1)',
        'bg-error': 'hsla(0, 65%, 51%, 1)',
        'text-primary': 'hsla(216, 9%, 89%, 1)',
        'text-secondary': 'hsla(230, 4%, 70%, 1)',
        'text-tertiary': 'hsla(210, 2%, 47%, 1)',
        'text-accent': 'hsla(217, 100%, 37%, 1)',
        'text-success': 'hsla(123, 46%, 34%, 1)',
        'text-error': 'hsla(0, 65%, 51%, 1)',
        'icons-primary': 'hsla(216, 9%, 89%, 1)',
        'icons-secondary': 'hsla(230, 4%, 70%, 1)',
        'icons-tertiary': 'hsla(210, 2%, 47%, 1)',
        'icons-accent': 'hsla(217, 100%, 37%, 1)',
        'icons-success': 'hsla(123, 46%, 34%, 1)',
        'icons-error': 'hsla(0, 65%, 51%, 1)',
        'border-primary': 'hsla(210, 2%, 22%, 1)',
        'border-accent': 'hsla(217, 100%, 37%, 1)',
        'border-success': 'hsla(123, 46%, 34%, 1)',
        'border-error': 'hsla(0, 65%, 51%, 1)',
        'state-accent-disabled': 'hsla(0, 0%, 26%, 1)',
        'state-blue-hover': 'hsla(217, 100%, 25%, 1)',
        'state-blue-focused': 'hsla(217, 58%, 55%, 1)',
        'state-transparent-blue-hover': 'hsla(217, 100%, 37%, 0.10)',
        'state-transparent-blue-focused': 'hsla(217, 100%, 37%, 0.50)',
        'state-error-hover': 'hsla(0, 66%, 47%, 1)',
        'state-error-focused': 'hsla(0, 65%, 65%, 1)',
        'state-transparent-error-hover': 'hsla(0, 65%, 51%, 0.10)',
        'state-transparent-error-focused': 'hsla(0, 65%, 51%, 0.50)',
        'state-success-hover': 'hsla(124, 55%, 24%, 1)',
        'state-success-focused': 'hsla(123, 24%, 53%, 1)',
        'state-transparent-success-hover': 'hsla(123, 46%, 34%, 0.10)',
        'state-transparent-success-focused': 'hsla(123, 46%, 34%, 0.50)',
        'state-transparent-contrast-hover': 'hsla(0, 0%, 100%, 0.04)',
        'state-transparent-contrast-focused': 'hsla(0, 0%, 100%, 0.12)',
        'accent-orange': 'hsla(14, 62%, 59%, 1)',
        'modal-back': 'hsla(0, 0%, 0%, 0.4)',
      },
      margin: {
        '13': '52px',
        'r8': '-8px',
      },
      padding: {
        '7.5': '30px',
      },
      maxWidth: {
        '1494': '1494px',
      },
      width: {
        '820': '820px',
        '658': '658px',
        '368': '368px',
      },
    },
  },
  plugins: [],
}

