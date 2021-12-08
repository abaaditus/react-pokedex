export interface IFilter {
    keyword: string;
    type: '';
    region: '';
    weakness: '';
}

export const initialState: IFilter = {
    keyword: '',
    region: '',
    type: '',
    weakness: '',
};
