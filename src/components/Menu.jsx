import React from "react";
import MenuItem from "./MenuItem";

const precos = {
  gameBoyColor: 450.0,
  gameBoyAdvance: 500.0,
  gameBoyAdvanceSp: 600.0,
  playstation1: 350.0,
  playstation2: 300.0,
  playstation3: 600.0,
  gameCube: 1200.0,
  nintendoWii: 450.0,
  superNintendo: 900.0,
};

function Menu({ pedido, onQuantidadeChange }) {
  return (
    <div className="menu-container">
      {Object.keys(precos).map((key) => {
        const nomeFormatado = key
          .replace(/([A-Z])/g, " $1")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const quantidade = pedido[key]?.quantidade || 0;

        return (
          <MenuItem
            key={key}
            nome={nomeFormatado}
            preco={precos[key]}
            imagem={`images/${key}.png`}
            quantidade={quantidade}
            onQuantidadeChange={(qtd) => onQuantidadeChange(key, precos[key], qtd)}
          />
        );
      })}
    </div>
  );
}

export default Menu;