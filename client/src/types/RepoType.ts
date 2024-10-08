export type Repo = {
    id: string;
    name: string;
    url: string;
    isFavorite: boolean;
    languages: [{
        id: number,
        label: string
    }];
};