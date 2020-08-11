import Layout from './components/layout';

const About = () => {
  return (
    <Layout>
      <section className="about-row">

        <div className="about-image">
          <img className="about-img" src="https://i.imgur.com/0kkXXFj.png" alt="about-image"/>

        </div>
        <div className="about-text">
          <p>
            <span className="about-ola">Olá</span>! Meu nome é Suellen, cujas mãos estão por trás da confecção destes produtos. 
            Tudo começou quando eu resolvi fazer um caderno para usar para as minhas anotações da faculdade. 
            Como já gostava de trabalhos manuais, foi fácil me interessar pela encadernação artesanal e em 2019
            comecei a produzir cadernos e os vendia na faculdade e para pessoas conhecidas. Depois de um tempo,
            foi crescendo a vontade de expandir o negócio até que em 2020 decidi tirar do papel a ideia de criar 
            um e-commerce. E assim surgiu o Papura.
          </p>
          <br />
          <p>
            <h1><span className="about-porque">Por que</span> Papura<span className="about-porque"><span>?</span></span></h1>
            <span className="about-ola"></span>
            Esse nome é a simples junção de duas palavras: papel e costura. 
            A ideia de costurar papel foi uma das partes que mais me chamou a 
            atenção quando comecei a aprender a fazer cadernos.
          </p>

          <p>
            No Papura você vai encontrar cadernos produzidos artesanalmente 
            com um design minimalista e funcional mas com diferentes cores e 
            estampas para diferentes gostos, porque minimalista não precisa ser
            sinônimo de sem graça, não é mesmo? Aqui os cadernos são simples, 
            práticos e charmosos.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default About;