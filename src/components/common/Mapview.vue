<template>
    <div id="mapview"></div>
</template>

<script>
import { loadModules } from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};
export default {
    name: 'Mapview',
    components: {},
    mounted: function () {
        console.log(this.$store.state._defaultView);
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            const [Map, MapView, Basemap, TileLayer] = await loadModules(
                ['esri/Map', 'esri/views/MapView', 'esri/Basemap', 'esri/layers/TileLayer'],
                options,
            );
            //           let basemap = new Basemap({
            //               baselayers: [
            //                   new TileLayer({
            //                       url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
            //                       title: 'Basemap',
            //                   }),
            //               ],
            //               title: 'basemap',
            //              id: 'basemap',
            //           });

            const map = new Map({
                basemap: 'osm',
            });
            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [104.072745, 30.663774],
            });
            view.ui.components = [];
            this.$store.commit('_setDefaultView', view);
            console.log(view);
        },
    },
};
</script>

<style>
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
