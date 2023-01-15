import {
	useGetProductsQuery,
} from './ProductsSlice'

import React from 'react'

const ProductList = () => {

	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductsQuery()
	console.log("products=", products)


  return (
	<div>
	 <div>ProductList</div>
	 {JSON.stringify(products)}
	</div>
  )
}

export default ProductList