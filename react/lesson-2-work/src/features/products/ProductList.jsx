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

	let content;
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		content = products.data.map(product => { //JSON.stringify(products)
			return (
				 <div key={product.id}>
					商品番号：{product.id}　商品名：{product.attributes.name}　価格：¥{Number(product.attributes.price).toLocaleString()}
				 </div>
			)
	  })
	} else if (isError) {
		content = <p>{error}</p>
	}



  return (
	<div>
	 <div>メルカリ商品一覧</div>
	 {/*{JSON.stringify(products)}*/}
	 {content}
	</div>
  )
}

export default ProductList