import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Styles';
import { Link } from 'react-router-dom';
import { ModalContainer } from './Styles';

class Modal extends Component {
  render() {
    return(
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal, } = value;
          const { img, title, price } = value.modalProduct;

          if(!modalOpen) {
            return null;
          } else {
           return(
           <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5 style={{ color:"var(--mainYellow)"}}>Added to cart!</h5>
                    <img src={img} className="img-fluid " alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: $ {price}</h5>
                    <Link to='/'>
                      <ButtonContainer onClick={() => closeModal()}>
                        Continue Shopping
                      </ButtonContainer>
                    </Link>
                    <Link to='/cart'>
                      <ButtonContainer cart onClick={() => closeModal()}>
                        Go To Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
           </ModalContainer>
          );
        }
      }}
      </ProductConsumer>
    );
  }
}

export default Modal;