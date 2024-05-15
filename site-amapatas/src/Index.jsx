import './Index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import menuShow from './nav-bar-mobile'

function App() {

    const data = [
        { id: '1', image: "src/assets/imagens/cao_feliz1280x960.png"},
        { id: '2', image: 'src/assets/imagens/gato_carinho.png'},
        { id: '3', image: 'src/assets/imagens/cao_e_gato.png'},
        { id: '4', image: 'src/assets/imagens/cao_na_cama1280x960.png'},
    ]

  return( 
    <>
    <header class="header">
        <nav class="nav-bar">
            <div class="logo">
                <a href="#"><img src="src\assets\imagens\logo.png" alt="Logo" class="logo-imagem"/></a>
            </div>

            <div class="nav-list">
                <ul>
                    <li class="nav-item"><a href="#" class="nav-link inter-font">Sobre</a></li>
                    <li class="nav-item"><a href="#" class="nav-link inter-font">Instagram</a></li>
                    <li class="nav-item"><a href="#" class="nav-link inter-font">Facebook</a></li>
                    <li class="nav-item"><a href="#" class="nav-link inter-font">Adotar</a></li>
                </ul>
            </div>

            <div class="login-button">
                <button><a href="#" class="inter-font">Entrar</a></button>
            </div>

            <div class="mobile-menu-icon">
                <button onclick="menuShow()"><i class="fa-solid fa-bars icon"></i></button>
            </div>
        </nav>

        <div class="mobile-menu">
            <ul>
                <li class="nav-item"><a href="#" class="nav-link inter-font">Sobre</a></li>
                <li class="nav-item"><a href="#" class="nav-link inter-font">Instagram</a></li>
                <li class="nav-item"><a href="#" class="nav-link inter-font">Facebook</a></li>
                <li class="nav-item"><a href="#" class="nav-link inter-font">Adotar</a></li>
            </ul>

            <div class="login-button">
                <button><a href="#" class="inter-font">Entrar</a></button>
            </div>
        </div>

    </header>

        <main>
            <section class="slider">
                <div class="slides">
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{ delay: 10000}}
                        infinite loop
                        grabCursor
                    >
                        {data.map( (item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt="slider"
                                    className="slide-item"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
            </section> 
            <section class="explicandoAdocao">

                <div class="tituloPrincipal">
                    <img id="pata1" src="src/assets/imagens/pata.png"></img>
                    <h1 id="melhorAmigo">ENCONTRE SEU <span>MELHOR AMIGO!</span></h1>
                    <img id="pata2" src="src/assets/imagens/pata.png"></img>
                </div>

                <div class="textoExplicativo inter-font">

                    <div class="curiosidades">
                        <div class="tituloCuriosidades"><h2>Sobre nosso grupo</h2></div>
                        <div class="textoCuriosidades">
                            <p>Fundada em Atibaia no ano de 2001, a ONG Ama Patas é um dos maiores grupos de resgate e adoção de cães e gatos da região Bragantina.</p>
                        </div>
                    </div>

                    <div class="curiosidades">
                        <div class="tituloCuriosidades"><h2>Animais resgatados</h2></div>
                        <div class="textoCuriosidades">
                            <p>Já resgatamos e doamos ao longo dos anos mais de 5 mil animais e atualmente estamos com <span></span> deles esperando uma família 🥰</p>
                        </div>
                    
                    </div>

                    <div class="curiosidades">
                        <div class="tituloCuriosidades"><h2>Aceitamos doações como:</h2></div>
                        <div class="textoCuriosidades" id="listaDoacoes">
                            <ul>

                                <li>Toalhas</li>
								<li>Cobertores</li>
								<li>Produtos de limpeza</li>
								<li>Ração</li>
								<li>Medicamentos</li>
								<li>Shampoo de cachorro</li>
                                <li>Doações monetárias de qualquer valor</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="curiosidades">
                        <div class="tituloCuriosidades"><h2>Apadrinhe!</h2></div>
                        <div class="textoCuriosidades">
                            <p>Caso não possa adotar mas ama os bixinhos, 
                            ou simplesmente quer ajudar. Com o apadrinhamento, 
                            você colabora com as despesas de um amiguinho 
                            (Ração, remédios, veterinário...), podendo visitá-lo 
                            e receber fotos e notícias dele sempre que quiser!</p></div>
                    </div>
                </div>
            </section>
            
            <div class="card-area">
                <a href="adocao.html" target="_blank" alt="Área adoção" title="Área adoção">
                <div class="texto-cartas">
                    <img src="./src/assets/imagens/dogIcon.png" ></img>
                    <h1>VEJA SEU FUTURO AMIGO AQUI!</h1>
                    <img src="./src/assets/imagens/catIcon.png" ></img>
                </div>

                <div class="card-group">
                    
                    <div class="little-card card">
        
                    </div>
                    <div class="big-card card">
        
                    </div>
                    <div class="little-card card">
                        
                    </div>
                    <div class="big-card card">
                        
                    </div>
                    <div class="little-card card">
                        
                    </div>
                    <div class="big-card card">
                        
                    </div>
                    <div class="little-card card">
                        
                    </div>
                    <div class="big-card card">
                    
                    </div>
                    <div class="emojis">
                        <ul>
                            <li>😻</li>
                            <li>🐶</li>
                            <li>🐕</li>
                            <li>🐈</li>
                            <li>❤️</li>
                            <li>🥰</li>
                            <li>😼</li>
                            <li>🦴</li>
                            <li>🧶</li>
                            <li>🐾</li>
                        </ul>
                    </div>                    
                </div>
                </a>
            </div>
        
            
        </main>
        <footer class="footer inter-font">
                <div id="footer_content">
                    <div id="footer_contacts">
                        <h1>Logo</h1>
                        <p>Cuidando e protegendo nossos amiguinhos!</p>

                        <div id="footer_social_media">

                            <a href="https://www.instagram.com/amapatas/" class="footer-link" id="instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            
                            <a href="https://www.facebook.com/amapatas/?locale=pt_BR" class="footer-link" id="facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            
                            <a href="#" class="footer-link" id="whatsapp">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>

                        </div>

                    </div>

                    <ul class="footer-list">
                        <li>
                            <h3>Saiba mais:</h3>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Sobre a Ama Patas</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Nossos parceiros</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Perguntas frequentes</a>
                        </li> 
                    </ul>

                    <ul class="footer-list">
                        <li>
                            <h3>Como ajudar?</h3>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Quero adotar</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Quero doar</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Quero apadrinhar</a>
                        </li> 
                    </ul>

                    <div id="footer-email">
                        <h3>Fique por dentro!</h3>

                        <p>Cadastre seu e-mail para receber notificações sobre eventos e novos animais para adoção!</p>

                        <div id="input-group">
                            <input type="email" id="email"></input>
                            <button>
                                <i class="fa-regular fa-envelope"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="footer-copyright">
                    <p>&copy; Ama Patas 2024</p>
                </div>
            </footer>
    </>)
    }

export default App
