import { Component, OnInit  } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
declare var google:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'agm';

  ngOnInit() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -33.866, lng: 151.196 },
      zoom: 15
    });
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: { lat: -33.866, lng: 151.196 },
      radius: '500',
      type: ['restaurant']
    };
    
  }
 


  lat = 28.4595;
  long =77.0266;
  googleMapType = 'satellite';
  
  userAddress: any;
  userLatitude: any;
  userLongitude: any;
  options: any = {
    componentRestrictions: { country: 'IN' }
  } 
   

  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address;
    this.userLatitude = address.geometry.location.lat();
    this.userLongitude = address.geometry.location.lng();
    this.lat=this.userLatitude;
    this.long=this.userLongitude;
  
  }
  
 
}
