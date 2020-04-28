import React from 'react';
import Loading from '../images/loading.gif';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.fetchCardData = this.fetchCardData.bind(this);
    }
    fetchCardData = event => {
        if(this.props.isValidated === true){
            this.props.fetchCardData()
        } else {
            event.preventDefault();
        };
    };
    render() {
        return (
            <div className="containerShareBottom">
                <p id="error-message" className={`error-message ${this.props.isValidated === true ? 'hiddenMessage' : ''}`}>Completa los campos obligatorios*</p>
                <button id="buttonValidation" className={`button buttonShare ${!this.props.isValidated ? 'buttonDisabled' : ''}`} type="button" disabled={!this.props.isValidated} onClick={this.props.validateForm} onClick={this.props.fetchCardData}>
                    <i className="iconSend far fa-address-card"></i>
                    <span className="textButton" >CREAR TARJETA</span>
                </button>
                <div className={`card-loader ${this.props.isLoading === true ? '' : ' hidden'}`}><img className="card-loader__loading" alt="loading" src={Loading}/></div>
                <div className={`card__share ${this.props.cardSuccess === true ? '' : ' hidden'}`} id="card-share">
                    <p className={`p.card__link ${this.props.darkMode === true ? "dark" : "light"}`}>La tarjeta ha sido creada:</p>
                    <a href={this.props.cardURL} target="_blank"><p className="card__link">{this.props.cardURL}</p></a>       
                    <a href={`https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20tan%20GUAY%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, Migración AwesomeProfileCards, promo Idelisa Equipo 3 ${this.props.cardURL}`} target="_blank" id="twitter-share" className="button-twitter"><i className="fab fa-twitter"></i>Compartir en Twitter</a>
                   
                </div>
            </div>
        );
    }
}

export default Share;