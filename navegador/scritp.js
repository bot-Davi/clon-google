var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var query = encodeURIComponent(form.querySelector('input[name="q"]').value);
  var url = 'https://www.google.com/search?q=' + query;
  window.location.href = url;
});