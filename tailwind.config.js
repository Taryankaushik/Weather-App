/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'nature': "url(images/city.jpg)",
        'cloud' : "url(images/cloudWeather.jpg)",
        'clear' : "url(images/clearWeather.jpg)",
        'drizzel' : "url(images/drizzelWeather.jpg)",
        'snow' : "url(images/snowWeather.jpg)",
        'mist' : "url(images/mistWeather.jpg)",
        'rainy' : "url(images/rainyWeather.jpg)",
        'haze' : "url(images/hazeWeather.jpg)",
        'back': "url('images/background1.jpg')",
      }
    },
  },
  plugins: [],
}

