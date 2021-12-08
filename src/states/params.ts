import { type } from 'os';
import React, { useReducer } from 'react';
import { pokemonInstance } from '../pokemon-axios';
import { formatListResponse } from '../utils/formatData';

import { IList } from '../types/params';

interface IALoadParams {
    type: 'load_params';
    payload: {
        regions: IList[],
        types: IList[],
        weaknesses: IList[],
    }
};

interface IParams {
    types: IList[];
    regions: IList[];
    weaknesses: IList[];
}

enum ParamsActionTypes {
    LOAD_PARAMS = 'load_params'
}

const initialState: IParams = {
    regions: [],
    types: [],
    weaknesses: [],
};

export const reducer = (state: IParams, action: IALoadParams): IParams => {
    switch (action.type) {
        case ParamsActionTypes.LOAD_PARAMS:
            return {
                ...state,
                regions: [...action.payload.regions],
                types: [...action.payload.types],
                weaknesses: [...action.payload.weaknesses],
            };
        default:
            return initialState;
    }
};

export const useParams = () => {
    const [params, dispatch] = useReducer(reducer, initialState);

    const getParams = async () => {
        const { data: regionResponse } = await pokemonInstance.get('/region');
        const { data: typeResponse } = await pokemonInstance.get('/type');

        const regionList = regionResponse.results.map(formatListResponse);
        const typeList = typeResponse.results.map(formatListResponse);

        dispatch({
            type: ParamsActionTypes.LOAD_PARAMS,
            payload: {
                regions: regionList,
                types: typeList,
                weaknesses: typeList
            }
        });
    };

    return {
        params,
        getParams
    };
};