export const sessionSet = (key: string, value: any) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const sessionGet = (key: string): any => {
    const data = window.sessionStorage.getItem(key);

    if (!data) return;

    try {
        return JSON.parse(data);
    } catch (err: unknown) {
        return data;
    }
};
