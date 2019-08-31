import {RequesterTeam} from './requesterTeam';
import {Rule} from './rule';
import {SourceTeam} from './sourceTeam';

export class ExpenseReport {
    id: number;
    reference: string;
    requesterTeam: RequesterTeam;
    date_start: string;
    date_end: string;
    rule: Rule;
    sourceTeam: SourceTeam;
}
