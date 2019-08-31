import {Country} from './country';

export class Address {
    id: number;
    address1: string;
    address2: string;
    zip_code: string;
    city: string;
    country_id: Country;
}
