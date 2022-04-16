import { User } from './Classes/User';
import { Company } from './Classes/Company';
import { CustomMap } from './Classes/CustomMap';

// new instance of User
const user = new User();
console.log(user);

// new instance of Company
const company = new Company();
console.log(company);

// new instance of our custom map class(div id)
const map = new CustomMap('map');

// add markers for user and company
map.addMarker(user);
map.addMarker(company);
