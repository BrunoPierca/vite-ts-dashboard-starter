import { useEffect, useState } from 'react';

import { useIsMutating, useQuery } from "@tanstack/react-query";

interface UseTableProps {
    queryKey: string,
    pluralQueryKey?: string;
    queryFn: (actualPage: number, rowsPerPage: number) => Promise<any>,
}

// This hook handles pagination && data fetching.

export const useTable = ({ queryKey, pluralQueryKey, queryFn }: UseTableProps) => {

    // Pagination
    const [actualPage, setActualPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [maxRowsToShow, setMaxRowsToShow] = useState<number>(5);

    // Data Fetching
    const {
        data,
        refetch,
        isLoading,
        isFetching,
        // isError 
    } = useQuery({
        queryKey: [queryKey, actualPage],
        queryFn: () => queryFn(actualPage, rowsPerPage),
        // 10 minutes
        staleTime: 600000,
    })
    const mutations = useIsMutating({ mutationKey: [queryKey] })

    useEffect(() => {
        let actualKeyword: string;
        if (pluralQueryKey) actualKeyword = `max${pluralQueryKey}`; else actualKeyword = `max${queryKey.charAt(0).toUpperCase() + queryKey.slice(1)}`

        // If there's still no count, try this last resource, else it will default to 5
        if (!actualKeyword) actualKeyword = `max${queryKey.charAt(0).toUpperCase() + queryKey.slice(1) + 's'}`

        data ? setMaxRowsToShow(data[actualKeyword]) : setMaxRowsToShow(0)
    }, [data, setMaxRowsToShow])

    useEffect(() => { refetch() }, [rowsPerPage, refetch])


    return {
        actualPage,
        rowsPerPage,
        maxRowsToShow,
        data,
        isLoading,
        isFetching,
        isMutating: !!mutations,
        refetch,

        setActualPage,
        setRowsPerPage,
        setMaxRowsToShow
    }
} 