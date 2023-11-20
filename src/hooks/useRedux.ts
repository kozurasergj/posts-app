import { DispatchType, RootStateType } from '@/redux/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
