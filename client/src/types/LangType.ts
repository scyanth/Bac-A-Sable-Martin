export type Lang = {
    id: number;
    label: string;
    repos?: [{
        name: string,
        url: string
    }];
};