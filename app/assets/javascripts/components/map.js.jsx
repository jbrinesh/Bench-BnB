(function(root) {
  'use strict';
  var _markers = [];

  root.Map = React.createClass({

    getInitialState: function(){
        return {benches: BenchStore.all()};
    },

    componentDidMount: function(){
      BenchStore.addChangeHandler(this._benchesChanged);
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function(){
        var bounds = this.map.getBounds();
        var NEBound = bounds.getNorthEast();
        var SWBound = bounds.getSouthWest();
        var qString = {
        bounds: {northEast: {lat: NEBound.lat(), lng: NEBound.lng()},
        southWest: {lat: SWBound.lat(), lng:  SWBound.lng()}}
        };
        ApiUtil.fetchBenches(qString);
      }.bind(this));
    },

    _benchesChanged: function(){
      this.removeMarkers();
      _markers = [];
      var benches = BenchStore.all();

      benches.forEach(function(bench){
        var pos = new google.maps.LatLng(bench.lat, bench.lng);
        var mark = new google.maps.Marker({
          position: pos,
          title: bench.description
        })
          _markers.push(mark);
      })
      this.addMarkers();
    },

    addMarkers: function(){
      _markers.forEach(function(marker){
        marker.setMap(this.map)
      }.bind(this))
    },

    removeMarkers: function(){
      _markers.forEach(function(marker){
        marker.setMap(null);
      })
    },

    render: function(){
      return(
        <div className="map" ref="map">
        </div>
      )
    }
  })
}(this));
