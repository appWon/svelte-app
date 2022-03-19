import { httpInit } from '@/lib/axios';
import { map } from 'rxjs/operators';
import { defer, Observable } from 'rxjs';

export const post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => httpInit.post<T>(url, body, { params: queryParams })).pipe(
        map(result => result.data)
    );
};

export const get = <T>(url: string, queryParams?: object): Observable<T> => {
    return defer(() => httpInit.get<T>(url, { params: queryParams })).pipe(
        map(result => result.data)
    );
};
