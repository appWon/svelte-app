import axios, { AxiosRequestConfig } from 'axios';
import { sessionGet, sessionSet } from '@/lib/common';
import { compute_rest_props } from 'svelte/internal';

const httpInit = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
});

httpInit.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = <string>sessionGet('accessToken');

        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

httpInit.interceptors.response.use(
    res => {
        return res;
    },
    async (error: any) => {
        const config = error.config;

        if (error.response.status === 401 && !config._retry) {
            config._retry = true;

            try {
                const token = <string>sessionGet('refreshToken');
                const result = await axios.get('/ttv/api/token/issue/access', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (result) {
                    const { accessToken, refreshToken } = result.data;

                    sessionSet('accessToken', accessToken);
                    sessionSet('refreshToken', refreshToken);

                    config.headers.Authorization = `Bearer ${token}`;

                    return Promise.resolve(httpInit(config));
                }
            } catch (error: unknown) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export { httpInit };

// if (error.response.status === 403 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const access_token = await refreshAccessToken();
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//     return axiosApiInstance(originalRequest);
// }
