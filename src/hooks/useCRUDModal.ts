import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUiStore } from '../store/useUiStore';
import { Action } from '../store/useUserStore';

interface Props<Entity, newEntity> {
    createFn?: (entity: newEntity) => Promise<Entity>,
    updateFn?: (entity: Entity) => Promise<Entity>,
    deleteFn?: (entity: Entity) => Promise<Entity>,
    setActiveEntity?: (entity: Entity, action: Action) => void,
    queryKey: string
}

export const useCRUDModal = <Entity, NewEntity>({ createFn, updateFn, deleteFn, setActiveEntity, queryKey }: Props<Entity, NewEntity>) => {

    const queryClient = useQueryClient()
    
    const { setErrorMessage, setSuccessMessage } = useUiStore((state) => state)

    const invalidateQuery = (actionMade: string) => {
        queryClient.invalidateQueries([queryKey])

        setSuccessMessage(`${queryKey[0].toUpperCase() + queryKey.slice(1)} ${actionMade} successfully`)
    }



    const notifyError = (actionMade: string) => {
        queryClient.invalidateQueries([queryKey])
        setErrorMessage(`Couldn't ${actionMade} ${queryKey[0].toUpperCase() + queryKey.slice(1)}`)
    }

    const createMutation = useMutation({
        mutationKey: [queryKey],
        mutationFn:
            createFn,
        onSuccess:
            () => invalidateQuery('created'),
        onError:
            () => notifyError('create'),
    })

    const updateMutation = useMutation({
        mutationKey: [queryKey],
        mutationFn:
            updateFn,
        onSuccess:
            () => invalidateQuery('updated'),
        onError:
            () => notifyError('update')
    })

    const deleteMutation = useMutation({
        mutationKey: [queryKey],
        mutationFn:
            deleteFn,
        onSuccess:
            () => invalidateQuery('deleted'),
        onError:
            () => notifyError('delete')
    })


    const handleCellClick = (event: any) => {
        const { row, field } = event;
        switch (field) {
            case 'delete':
                console.log("delete")
                // deleteMutation.mutate(row)
                break;
            case 'edit':
                console.log("edit")
                if (!setActiveEntity) throw new Error("setActiveEntity not defined")
                setActiveEntity(row, 'edit')
                break;

            default:
                // Show details
                console.log("details")
                if (!setActiveEntity) throw new Error("setActiveEntity not defined")
                setActiveEntity(row, 'details')
                break;
        }
    }
    return {
        createMutation,
        updateMutation,
        deleteMutation,
        handleCellClick,
    }
}
