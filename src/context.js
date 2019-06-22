import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct,
  };

  componentDidMount(){
    this.setProducts();
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {tempProducts}
    });
  };

  handleDetail = () => {
    console.log("detail");
  };

  addToCart = (id) => {
    console.log(`add to cart.id is ${id}`);
  };

  render(){
    return(
        <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}>
          {this.props.children}
        </ProductContext.Provider>
    );
  }
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };