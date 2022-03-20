import { httpInit } from '@/lib/axios';
import { Observable, Observer } from 'rxjs';
import type { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

const observablePipe = <T>(request: AxiosPromise): Observable<T | void> => {
    return new Observable<T>((observer: Observer<T>) => {
        request
            .then((response: AxiosResponse) => {
                observer.next(response.data);
            })
            .catch((error: AxiosError | Error) => {
                observer.error(error);
            })
            .finally(() => {
                observer.complete();
            });
    });
};

export const post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    const request = httpInit.post<T>(url, body, { params: queryParams });

    return observablePipe<T>(request);
};

export const get = <T>(url: string, queryParams?: object): Observable<T | void> => {
    const request = httpInit.get<T>(url, { params: queryParams });

    return observablePipe<T>(request);
};

export const patch = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    const request = httpInit.patch<T>(url, body, { params: queryParams });

    return observablePipe<T>(request);
};

export const deleteR = <T>(url: string): Observable<T | void> => {
    const request = httpInit.patch<T>(url);

    return observablePipe<T>(request);
};
