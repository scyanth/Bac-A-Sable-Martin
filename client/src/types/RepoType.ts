export type Repo = {
    id: string;
    name: string;
    url: string;
    languages: [{
        id: number,
        label: string
    }];
};