(function($) {
    var _style = mapboxgl["mapboxgl_style"], _center_lng = mapboxgl["mapboxgl_center_lng"], _center_lat = mapboxgl["mapboxgl_center_lat"], _accessToken = mapboxgl["mapboxgl_accessToken"], _parent_uri = mapboxgl["_parent_uri"], _zoom = mapboxgl["mapboxgl_zoom"];
    _Maxzoom = mapboxgl["mapboxgl_Maxzoom"];
    $(document).ready(function() {
        function loadStyle(b) {
            $("<link>").appendTo("head").attr({
                type: "text/css",
                rel: "stylesheet",
                href: b
            });
        }
        var mapboxGL = "https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js";
        function mapLoad() {
            loadStyle("https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css"), loadStyle(_parent_uri + "/_css/mapbox.css");
            var a = document.createElement("script");
            a.src = mapboxGL, a.type = "text/javascript", a.setAttribute("defer", ""), document.getElementsByTagName("head")[0].appendChild(a);
        }
        var bounds = [ [ -122.998197, 37.299908 ], [ -121.494387, 38.143657 ] ];
        mapLoad();
        $.getScript(mapboxGL, function() {
            mapboxgl.accessToken = _accessToken;
            var map = new mapboxgl.Map({
                container: "neoMapbox",
                style: _style,
                center: [ _center_lng, _center_lat ],
                zoom: _zoom,
                maxZoom: _zoom,
                minZoom: _zoom,
                maxBounds: bounds
            });
            map.scrollZoom.disable();
            map.on("load", function(e) {
                map.addControl(new mapboxgl.NavigationControl());
                neoMainStyle = map.getStyle();
                neoMainLayer = neoMainStyle.layers;
                var _layers = [];
                for (var i = 0; i < neoMainLayer.length; i++) {
                    var row = neoMainLayer[i];
                    var id = row.id;
                    if (id.indexOf("mpbx_") >= 0) {
                        _layers[i] = id;
                    }
                }
                var toggleableLayerIds = _layers.filter(function(el) {
                    return el != null;
                });
                var _markers = [];
                for (var i = 0; i < toggleableLayerIds.length; i++) {
                    var layerID = toggleableLayerIds[i];
                    var description = layerID.replace("mpbx_", "");
                    description = description.replace(/\d+/g, "");
                    description = description.replace("_", "");
                    var prop = [];
                    var poi_rows = map.querySourceFeatures("composite", {
                        sourceLayer: "The_Jacx",
                        filter: [ "in", "description", description ]
                    });
                    for (var a = 0; a < poi_rows.length; a++) {
                        var row = poi_rows[a];
                        var lon = row.geometry.coordinates[0];
                        var lat = row.geometry.coordinates[1];
                        var nam = row.properties.name;
                        prop[a] = [ nam, lon, lat ];
                    }
                    _markers[layerID] = prop;
                    map.setLayoutProperty(layerID, "visibility", "none");
                }
                var coords = [ _center_lng, _center_lat ];
                var coordinates = coords.slice();
                var item = "";
                var layers = document.getElementById("mapMenu");
                for (var i = 0; i < toggleableLayerIds.length; i++) {
                    var _id = toggleableLayerIds[i];
                    var title = _id.replace("mpbx_", "");
                    var subitem = "";
                    for (var m = 0; m < _markers[_id].length; m++) {
                        var row = _markers[_id][m], __name = row[0], __lng = row[1], __lat = row[2];
                        subitem += '<li><a href="#" class="js-mapmarker" data-layer="' + _id + '" data-lat="' + __lat + '" data-lng="' + __lng + '" data-title="' + __name + '"  >' + __name + "</a></li>";
                    }
                    item += '<li><a href="" class="js-mapcategory" data-layer="' + _id + '">' + title + '</a><div class="mapsubitem"><ol>' + subitem + "</ol></div></li>";
                }
                jQuery(document).find("#corpcheck").prop("checked", false);
                var mainCategory = "";
                var popup = "";
                jQuery(document).on("click", ".js-mapcategory", function(e) {
                    var _zoomlng = "-73.94452778413719";
                    var _zoomlat = "40.748005543348185";
                    var zoomCoords = [ _zoomlng, _zoomlat ];
                    map.flyTo({
                        center: zoomCoords,
                        zoom: 15
                    });
                    for (var i = 0; i < toggleableLayerIds.length; i++) {
                        var layerID = toggleableLayerIds[i];
                        map.setLayoutProperty(layerID, "visibility", "none");
                    }
                    jQuery(document).find(".slider").removeClass("showing");
                    var a = jQuery(this);
                    var clickedLayer = a.data("layer");
                    if (mainCategory === "") {
                        mainCategory = clickedLayer;
                    } else if (mainCategory != clickedLayer) {
                        map.setLayoutProperty(mainCategory, "visibility", "none");
                        if (popup != "") {
                            popup.remove();
                        }
                        mainCategory = clickedLayer;
                    }
                    if (popup != "") {
                        popup.remove();
                    }
                    jQuery(".js-mapcategory").not(this).removeClass("active").parent("li").removeClass("open");
                    a.toggleClass("active");
                    var visibility = map.getLayoutProperty(clickedLayer, "visibility");
                    if (visibility === "visible") {
                        map.setLayoutProperty(clickedLayer, "visibility", "none");
                    } else {
                        map.setLayoutProperty(clickedLayer, "visibility", "visible");
                    }
                    jQuery(document).find("#corpcheck").prop("checked", false);
                    return false;
                });
                var mainMarker = "";
                jQuery(document).on("click", ".js-mapmarker", function(e) {
                    var a = jQuery(this), lat = a.data("lat"), lng = a.data("lng"), title = a.data("title"), clickedLayer = a.data("layer");
                    console.log("test");
                    map.setLayoutProperty(clickedLayer, "visibility", "visible");
                    var coords = [ lng, lat ];
                    if (mainMarker === "") {
                        mainMarker = coords;
                    } else if (mainMarker != coords) {
                        popup.remove();
                        mainMarker = coords;
                    }
                    var poi_id = 5;
                    var lon = coords[0];
                    var lat = coords[1];
                    var coordinates = coords.slice();
                    var neo_poiname = title;
                    map.panTo({
                        lat: lat,
                        lng: lon
                    });
                    popup = new mapboxgl.Popup().setLngLat(coordinates).setHTML(neo_poiname).addTo(map);
                    map.flyTo({
                        center: coordinates,
                        zoom: 15
                    });
                    return false;
                });
                jQuery(document).on("click", ".slider", function(e) {
                    var _zoomlng = "-73.94452778413719";
                    var _zoomlat = "40.748005543348185";
                    var zoomCoords = [ _zoomlng, _zoomlat ];
                    map.flyTo({
                        center: zoomCoords,
                        zoom: 15
                    });
                    if ($(this).hasClass("showing")) {
                        console.log("hide me");
                        for (var i = 0; i < toggleableLayerIds.length; i++) {
                            var _layerID = toggleableLayerIds[i];
                            map.setLayoutProperty(_layerID, "visibility", "none");
                        }
                        $(this).removeClass("showing");
                        jQuery(document).find("#corpcheck input").prop("checked", false);
                        map.flyTo({
                            zoom: 14
                        });
                    } else {
                        console.log("show me");
                        for (var i = 0; i < toggleableLayerIds.length; i++) {
                            var _layerID = toggleableLayerIds[i];
                            map.setLayoutProperty(_layerID, "visibility", "visible");
                        }
                        $(this).addClass("showing");
                        jQuery(document).find("#corpcheck input").prop("checked", true);
                        jQuery(document).find(".js-mapcategory").removeClass("active");
                    }
                });
            });
        });
    });
})(jQuery);