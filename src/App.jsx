import './App.css'
import './styles.css'
import Cardapio from './components/cardapio'


function App() {
 

  return (
    <>


        {/*<!-- ÁREA DOS ÍCONES DAS REDES SOCIAIS --> */}
        <div class="social-icons">
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

       
          <Cardapio ></Cardapio>
       
      
      <footer>
        Desenvolvido por <a href="https://github.com/dpfialho92" target="_blank">Daniella Fialho</a>, no Curso de Programador FrontEnd do Senai (2025) Todos os direitos reservados
    </footer>
      
    </>
  )
}

export default App
