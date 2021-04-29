import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/ivan-profile.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Ivan Ruedas</h1>
              <h3>Fanático de las tecnologías e inventos</h3>
              <p>
              No me considero un experto en tecnologías pero tengo la facilidad de aprender rápido.
              Por ello me desarrollo en diferentes ámbitos, tales como diseño grafico, diseño web, 
              diseño de muebles, programación y domótica, contando con muchos proyectos para elaborar
              </p>
              <Link href="/hireme">
                <a className="btn btn-outline-light">Contactame</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}

    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experiencia</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/hireme">
              <a className="btn btn-light">Leer más</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map(({ name, description, image, url}, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href={url} target="_blank">Leer más</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">Más Projectos</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
