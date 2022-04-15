import { User } from './Classes/User';
import { Company } from './Classes/Company';
import { CustomMap } from './Classes/CustomMap';

// new instance of User
const user = new User();
console.log(user);

// new instance of Company
const company = new Company();
console.log(company);

const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(company);
