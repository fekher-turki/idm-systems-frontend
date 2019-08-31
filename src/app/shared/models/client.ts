import {ClientType} from './clientType';
import {Company} from './company';

export class Client {
    id: number;
    code: string;
    name: string;
    fiscal_number: string;
    vat_number: string;
    clientType: ClientType;
    company: Company;
    tel_number: number;
    email: string;
    address1: string;
    address2: string;
    zip_code: string;
    city: string;
    country: string;
}
