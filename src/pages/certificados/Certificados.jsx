import React from 'react';
import CardInfo from '../../Components/cardInfo/CardInfo';
import '../certificados/Certificados';

export default function Certificados() {
    return (
        <div>
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
            <h2>Histórico anual de emissão de certificados</h2>
            <h2>Emissão corrente e futura de certificados (X mil)</h2>
            <h4>Distribuição de certificados ativos por tipo de assinatura digital</h4>
            <h4>Distribuição de certificados ativos por tipo</h4>
        </div>
    );
}


