import React from 'react';
import '../Components/cardInfo/CardInfo.css';

function CardInfo({ title, value }) {
  return (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <CardInfo title="Ativos (não expirados, não revogados)" value="15.074.068" />
      <CardInfo title="Emitidos" value="7.449.057" />
      <CardInfo title="Total de emissões em relação ao ano anterior" value="69,5 %" />
      <CardInfo title="Projeção para 2025" value="11.781.441" />
    </div>
  );
}

export default CardInfo;
