import Layout from './components/layout';

const About = () => {
  return (
    <Layout>
      <div>
        <div className="about-highlight">
          <h1>
            Seja bem vindo ao Papura Cadernos.
          </h1>
        </div>

        <div className="about-grid">
          <section className="about-col-0">
            <h2> Nossa história </h2>
            <br/>
            <p>
              Somos uma marca comprometida com a qualidade artesanal de nossos produtos. 
              O papura tem suas origens como um caderninho minimalista
              disponível para venda nas universidades do Rio de Janeiro.
            </p>
            <br/>
            <h2> Valores</h2>
            <br/>
              <p>
                Estamos dispostos a melhorar e lhe trazer o caderno mais simpático, agradável, e prático que você possa pedir.
                Nossa busca pelo produto ideal está na raiz do nosso negócio. 
              </p>  
            <br/>
          </section>

          <section className="about-col-1">
            <h2> Equipe </h2>
              <br/>
              <p>
                  Estamos dispostos a melhorar e lhe trazer o caderno mais simpático, agradável, e prático que você possa pedir.
                  Nossa busca pelo produto ideal está na raiz do nosso negócio. 
                </p>  
              <br/>
              <h2> Fale conosco: </h2>
              <br/>
              <p>
                  Seu feedback é a chave para um Papura melhor. Tem alguma dúvida ou sugestão? Fale conosco pelo form abaixo.
                </p>  
              <br/>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default About;