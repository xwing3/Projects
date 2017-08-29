window.onload = function() {
var x = document.getElementById("map");
var map = L.map(x).setView([47.0028790, 22.5368858], 13);
var googleLayer = new L.Google('ROADMAP');
map.addLayer(googleLayer);

///refresh page function - return to previous coordinates
document.getElementById("refresh").onclick = function(){
	location.reload();
}
///cluj-napoca function
document.getElementById("loc").onclick = function() {
map.panTo(new L.LatLng(46.774334, 23.611706));
}
///oradea function
document.getElementById("loc2").onclick = function() {
map.panTo(new L.LatLng(47.056471, 21.929548));
}

}

	
		