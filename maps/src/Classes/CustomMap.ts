import { User } from "./User";
import { Company } from "./Company";

// Custom Map to create a new google map
export class CustomMap {
    // private property of type google.aps.Map
    private googleMap: google.maps.Map;

    // initialize googleMap
    constructor(divId: string) {
        // new intance of a google Map(takes a div and options)
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable .location.lat
            }
        })
    }
}