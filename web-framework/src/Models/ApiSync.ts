import axios, { AxiosPromise } from "axios";

// interface that gets extended by generic type
interface HasId {
    id?: number;
}

// generic class that represents the sync operations to the backend
export class ApiSync <T extends HasId> {
    // set rootId in constructor
    constructor(public rootUrl: string){}

    // method to fetch data from backend json-server
    fetch(id: number): AxiosPromise {
        // return promise of get request to /user/:id and set user to the data from request
        return axios.get(`${this.rootUrl}/${id}`)
    }

    // method to do a post request to save data to backend json-server (return promsie)
    save(data: T): AxiosPromise {
        const { id } = data;

        // if it contains id property
        if(id){
            // PUT
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            // POST
            return axios.post(this.rootUrl, data);
        }
    }
}