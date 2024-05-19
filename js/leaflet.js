document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([48.23009, 6.41616], 15);
  
    // Copyright
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    // Marker
    var marker = L.marker([48.23009, 6.41616]).addTo(map)
      .bindPopup('Random makering')
      .openPopup();
  
    // Rectangle
    var bounds = [[48.23041, 6.4155], [48.22991, 6.41675]];
    var rectangle = L.rectangle(bounds, {color: "red", weight: 1}).addTo(map);
  });