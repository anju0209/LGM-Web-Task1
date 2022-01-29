$(".owl-carousel").owlCarousel({
  video: true,
  image: true,
});

// The marker, positioned at pune
const marker = new google.maps.Marker({
  position: pune,
  map: map,
});

// Initialize and add the map
function initMap() {
  // The location of pune
  const pune = { lat: 18.516726, lng: 73.856255 };
  // The map, centered at pune
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: pune,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: pune,
    map: map,
  });
}
