import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { AppContext, AppContextType } from '../../../context';

export interface ISpacesFetch {
    spaces: any;
    isFetching: boolean;
    isError: boolean;
}

export function useFetchSpaces(): ISpacesFetch {
    const { api } = useContext<AppContextType>(AppContext);

    const fetchSpaces = () => {
        return api?.spaces.readList();
    };

    const { data, isFetching, isError }: UseQueryResult = useQuery(['spaces'], fetchSpaces, {
        keepPreviousData: true,
    });

    return { spaces: data, isFetching, isError };
}
