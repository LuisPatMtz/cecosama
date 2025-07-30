export default function Services() {
  return (
    <section id="services" className="p-5 bg-light text-center">
      <h2>Servicios</h2>
      <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
        <div className="card p-3 shadow" style={{width: "250px"}}>
          <h3>Prevención</h3>
          <p>Programas y talleres para reducir el riesgo de consumo de sustancias psicoactivas.</p>
        </div>
        <div className="card p-3 shadow" style={{width: "250px"}}>
          <h3>Tratamiento</h3>
          <p>Atención médica y psicológica para personas con problemas de adicciones.</p>
        </div>
      </div>
    </section>
  );
}
