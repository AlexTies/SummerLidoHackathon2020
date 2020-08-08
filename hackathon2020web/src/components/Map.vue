<template>

  <div class="ngm-map">
    <l-map
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <l-marker
        :lat-lng="place.latLngObject"
        v-for="place in dataLatLng"
      >
        <l-icon
          :icon-size="[38, 38]"
          :icon-anchor="[19, 38]"
          :icon-url="'https://lteitaly.it/de/public/markers/speed/speed1.png'"
          :popupAnchor="[0, -34]"
        />
        <l-popup>
          <router-link :to="'/detail/' + place.id">
            {{place.description}}
          </router-link>
        </l-popup>
        <l-tooltip :options="{ permanent: true, interactive: true, direction: 'bottom' }">
          <div>
            {{place.name}}
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIcon } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon
  },
  data() {
    return {
      all: window.locationdata,
      zoom: 10,
      center: latLng(46.6787959,11.1920246),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 10,
      currentCenter: latLng(46.6787959,11.1920246),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  computed: {
    dataLatLng: function () {
      let out = [];
      this.all.forEach(function (item) {
        console.log(item);
        item.latLngObject = latLng(item.latlong.lat,item.latlong.lng);
        out.push(item);
      });
      return out;
    }
  }
};
</script>

<style lang="scss">
.ngm-map {
  height: 100vh;
  z-index: 0;
  @media screen and (min-width: 720px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.leaflet-top.leaflet-left {
  margin-top: 50px;
}
.leaflet-popup-content a {
  color: black;
  text-decoration: none;
}
</style>
