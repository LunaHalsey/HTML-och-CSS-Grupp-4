// map on conatact page
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
let map;

async function initMap() {
  // The location of Store
    const position = { lat: 59.32956825052781, lng: 18.065821329009438 };
  // Request needed libraries.
  //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Store
    map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    gestureHandling: "cooperative",
    mapId: "STORE_MAP_ID",
    });

  // The marker, positioned at Store
    const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Store",
    });
}

initMap();