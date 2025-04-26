import React from "react";

const itens = [
    {nome: "Gameboy Color", preco: 450.0, imagem: "/public/images/gbc.png"},
    {nome: "Gameboy Advance", preco: 500.0, imagem: "/public/images/gba.png"}, 
    {nome: "Gameboy Advance SP", preco: 600.0, imagem: "/public/images/gbasp.png"},
    {nome: "Playstation 1", preco: 350.0, imagem: "/public/images/ps1.png"},
    {nome: "Playstation 2", preco: 300.0, imagem: "/public/images/ps2.png"},
    {nome: "Playstation 3", preco: 600.0, imagem: "/public/images/ps3.png"},
    {nome: "Gamecube", preco: 1200.0, imagem: "/public/images/gamecube.png"},
    {nome: "Nintendo Wii", preco: 450.0, imagem: "/public/images/wii.png"},
    {nome: "Super Nintendo", preco: 900.0, imagem: "/public/images/snes.png"},
    
];

function Cardapio() {
    return (
        <div className="menu-container">
          {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h3> {item.nome}  </h3> 
                    <p>R$ {item.preco.toFixed(2)}  </p> 
                    <img src={item.imagem} className="menu-item-img"></img><br /> 
                    <input type="number" min="0" className="quantidade-input" placeholder="Qtd."></input>
                </div>
            ))
            }
        </div>
    )
}

export default Cardapio;
