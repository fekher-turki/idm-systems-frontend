import {SourceType} from './sourceType';
import {Company} from './company';
import {Client} from './client';

export class Source {
    id: number;
    code: string;
    description: string;
    sourceType: SourceType;
    client: Client;
    company: Company;
    date_start: string;
    date_end: string;
    status: number;
}
