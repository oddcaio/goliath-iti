import React from 'react';
import CardInfo from '../Components/cardInfo/CardInfo';
import '../Components/cardInfo/CardInfo.css';

export default function Certificados() {
    return (
        <div className="card-info-container">
            <CardInfo
                title="Ativos (não expirados, não revogados)"
                value="15.114.103"
            />
            <CardInfo
                title="Emitidos"
                value="7.538.430"
            />
            <CardInfo
                title="Total de emissões em relação ao ano anterior"
                value="70,4 %"
            />
            <CardInfo
                title="Projeção para 2025"
                value="11.781.485"
            />
        </div>
    );
}


