import { useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { AppContext, AppContextType } from '../../../context';
import { ITag } from '../../../models';

export interface ITagsFetch {
    data: ITag[] | undefined;
    isFetching: boolean;
    isError: boolean;
}

export function useFetchTags(): ITagsFetch {
    const { api } = useContext<AppContextType>(AppContext);

    const fetchTags = () => {
        return api?.tags.readList();
    };

    const { data, isFetching, isError }: UseQueryResult<ITag[] | undefined> = useQuery(['tags'], fetchTags, {
        keepPreviousData: true,
    });

    return { data, isFetching, isError };
}
