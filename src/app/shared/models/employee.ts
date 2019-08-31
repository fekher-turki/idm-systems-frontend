import {Department} from './department';
import {User} from './user';

export class Employee {
    id: number;
    user: User;
    personal_number: string;
    first_name: string;
    last_name: string;
    birthday: string;
    gender: boolean;
    tel_number: number;
    internal_number: number;
    email: string;
    address1: string;
    address2: string;
    zip_code: string;
    city: string;
    country: string;
    driver_license: boolean;
    position: string;
    title: string;
    authorized_approver: boolean;
    department: Department;
    responsible: number;
}
