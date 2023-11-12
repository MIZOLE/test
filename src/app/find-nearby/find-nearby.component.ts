import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { MyLocation } from '../interfaces/MyLocationInt';

import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-find-nearby',
  templateUrl: './find-nearby.component.html',
  styleUrls: ['./find-nearby.component.scss'],
})

export class FindNearbyComponent  implements OnInit{
    ngOnInit():void {
      this.getUserCurrentLocation();
  
  }
    display:any
  
    LocationWatcher:any;
    
    getUserCurrentLocation():void {
  
      if(!navigator.geolocation) {
        this.display = "Location cannot be accessed"
      }
  
      this.LocationWatcher = navigator.geolocation.getCurrentPosition(this.OnsuccessLocationFound, this.OnFailedLocation, this.options);
       
    }
  
    OnsuccessLocationFound(posi:any){
      // console.log(posi);
  
      const location:MyLocation = {
        lat:posi.coords.latitude,
        lng:posi.coords.longitude
      };
  
        const loader = new Loader({
          apiKey: environment.googleMapsApi,
          version: "weekly",
          });
    
      loader.load().then(async () => {
        const infoWindow = new google.maps.InfoWindow();
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    
        let map = new Map(document.getElementById("map") as HTMLElement, {
          center: location,
          zoom: 28,
          mapId: "MyMap"
        });
  
        const beachFlagImg = document.createElement('img');
      beachFlagImg.src = 'https://i.postimg.cc/6QvGQ5q6/wireless-8104764.png';
        const marker = new AdvancedMarkerElement({
          map: map,
          position: location,
          title: 'Current Location',
          // gmpDraggable: true,
  
        });
  
         
        marker.addListener('click', (event: any) => {
          infoWindow.setPosition(location);
          infoWindow.setContent("Your Location.");
          infoWindow.open(map);
          console.log(event.latLng.toJSON())
        })
  
        // marker.addListener('dragend', (event: any) => {
        //   infoWindow.setPosition(location);
        //   infoWindow.setContent("Your Location.");
        //   infoWindow.open(map);
        //   console.log(event.latLng.toJSON())
        // }) 
  
        const locations = [
          {name: "GSB", lat:-33.92197115348429, lng:18.425460550904013},
          {name: "African Bank", lat:-33.904470, lng:18.416372},
          {name: "PhilipV", lat:-33.907479, lng:18.412874},
          {name: "ReaHouse", lat:-33.904487, lng:18.418668}
        ]
  
        for(let loc of locations){
          // const marker = new AdvancedMarkerElement({
          //   map: map,
          //   position: loc,
          //   title: 'Current Location'
          // });
          const beachFlagImg = document.createElement('img');
      beachFlagImg.src = 'https://i.postimg.cc/6QvGQ5q6/wireless-8104764.png';
        const marker = new AdvancedMarkerElement({
          map: map,
          position: loc,
          title: 'Current Location',
          // gmpDraggable: true,
          content:beachFlagImg
  
        });
          
        marker.addListener('click', (event: any) => {
          infoWindow.setPosition(loc);
          infoWindow.setContent(loc.name);
          infoWindow.open(map);
          console.log(event.latLng.toJSON())
        })
        }
  
        
      });
  
      // navigator.geolocation.clearWatch(this.LocationWatcher);
    }  
  
    OnFailedLocation(error:any){
  
      if(error.code === 1)
      {
        alert("Location access denied")
      }
      else{
        alert(error)
      }
    }
  
    options = {
      enableHighAccuracy:true,
      timeout: 5000,
    };
  
  
    mInitializeMap(location:MyLocation){
  
      // const position = { lat: location.lat,
      //    lng: location.lon 
      //   };
    
      // this.loader.load().then(async () => {
      //   const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      //   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    
      //   let map = new Map(document.getElementById("map") as HTMLElement, {
      //     center: position,
      //     zoom: 18,
      //     mapId: "MyMap"
      //   });
    
      //   const marker = new AdvancedMarkerElement({
      //     map: map,
      //     position: position,
      //     title: 'Current Location'
      //   });
      // });
      console.log("Fail")
    }
    
    mMove(event: any){
      if(event.latLng != null){
        this.display = event.latLng.toJSON()
        
      }console.log("noo")
    }
    
    mMapClick(event:any){
      if(event.latLng != null){
        this.display = event.latLng.toJSON()
        
      }console.log("yed")
    }
  }