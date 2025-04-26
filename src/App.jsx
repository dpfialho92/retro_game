import React, { useState } from "react";
import "./styles.css";
import Menu from "./components/Menu";

function App() {
  const [pedido, setPedido] = useState({});

  // Atualiza o pedido
  const handleQuantidadeChange = (key, preco, quantidade) => {
    setPedido((prev) => {
      const novo = { ...prev };
      if (quantidade > 0) novo[key] = { preco, quantidade };
      else delete novo[key];
      return novo;
    });
  };

  // Calcula o total
  const totalPrice = Object.values(pedido)
    .reduce((sum, item) => sum + item.preco * item.quantidade, 0)
    .toFixed(2);

  // Finaliza pedido
  const finalizarPedido = () => {
    if (Object.keys(pedido).length === 0) {
      alert("Seu pedido está vazio!");
      return;
    }
    if (!window.confirm("Tem certeza que seu pedido está completo?")) return;

    // Monta mensagem com quebras de linha reais
    let msg = "Olá, seu pedido foi confirmado. Obrigado por escolher a Lanchonete do Tony!\n\n";
    Object.entries(pedido).forEach(([key, { preco, quantidade }]) => {
      const nomeFormatado = key
        .replace(/([A-Z])/g, " $1")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      msg += `${nomeFormatado} x${quantidade} = R$ ${(preco * quantidade).toFixed(2)}\n`;
    });
    msg += `\nTotal: R$ ${totalPrice}`;

    const telefone = "5521980618430"; // Telefone do WhatsApp
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Ícones das redes sociais */}
      <div className="social-icons">
        {/* ... seu HTML de ícones ... */}
        <a href="https://www.linkedin.com/in/daniella-fialho-05081477/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/dpfialho92" target="_blank"><i class="fas fa-globe"></i></a>
            <a href="https://github.com/dpfialho92" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/dpfialho" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:dani.boop22@gmail.com?subject=Fale%20Conosco"><i class="far fa-envelope"></i></a>
            <a href="https://wa.me/5521980618430" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
        </div>


        <div class="titulo-Cardapio">
          
          <img src="/public/images/logo.png" alt="Logo da Lanchonete" className="logo-img" />
          <a><h1>Retrô Game</h1></a>
          <img src="/public/images/logo.png" alt="Logo da Lanchonete" className="logo-img" />
        </div>



      <div className="container">
        
        <div className="conteudo">
          <Menu
            pedido={pedido}
            onQuantidadeChange={handleQuantidadeChange}
          />

          <div className="order-summary">
            <h2>Resumo do Pedido</h2>
            <ul>
              {Object.keys(pedido).length === 0 ? (
                <li>Nenhum item selecionado</li>
              ) : (
                Object.entries(pedido).map(([key, { preco, quantidade }]) => {
                  const nomeFormatado = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  return (
                    <li key={key}>
                      {nomeFormatado} x{quantidade} = R$ {(preco * quantidade).toFixed(2)}
                    </li>
                  );
                })
              )}
            </ul>
            <h3>Total: R$ {totalPrice}</h3>
            <div className="botoes">
              <button id="finalizarPedido" onClick={finalizarPedido}>
                Finalizar Pedido
              </button> 
              <button
                id="limparPedido"
                onClick={() => window.location.reload()}
              >
                Limpar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
      Desenvolvido por <a href="https://github.com/dpfialho92" target="_blank">Daniella Fialho</a>, no Curso de Programador FrontEnd do Senai (2025) Todos os direitos reservados
      </footer>
    </>
  );
}

export default App;