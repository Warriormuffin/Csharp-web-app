console.log("Hello Javascript")

$.get('http://localhost:5000/api/cats')
  .then(cats => {
    cats.forEach(c => {
      document.getElementById('cats').innerText += c + " "
    });
  })