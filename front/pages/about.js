import Layout from './components/layout';

const About = () => {
  return (
    <Layout>
      <div>
        <div className="about-highlight">
          <h2>
            Seja bem vindo ao Papura Cadernos.
          </h2>
        </div>
        <section className="about">
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
          <h2> Equipe </h2>
          <br/>
        </section>
      </div>
    </Layout>
  );
}

export default About;