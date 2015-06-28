var map = function createMapControl(params) {
  var m = new GMaps({
    div: '#map',
    lat: 50.394612,
    lng: 30.620041
  });
  m.addMarker({
    lat: 50.394612,
    lng: 30.620041,
    title: 'upsmile'
  });
};