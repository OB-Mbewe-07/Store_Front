import type {Props} from '../store/types'
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const apiProductsSlices = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({
                baseUrl:'https://fakestoreapi.com'
        }),
        endpoints: (builder) => ({
                /* return type and Argument Type, in this case the  void means that there is no argument*/
                GetProducts: builder.query<Props[], void>({
                        query: () => '/products'
                }), 
                getProductById: builder.query<Props, number>({
                        query: (id) => `/products/${id}`
                })
        })
})

//RTK auto generated names where its use + [endpointsname] + query =
export const { useGetProductsQuery, useGetProductByIdQuery} = apiProductsSlices


    

