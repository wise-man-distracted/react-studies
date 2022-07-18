import "./style.css";

export default function Motivo(props) { 
    return ( 
    <section className={props.variante}>
    <div>
      <h1>{props.titulo}</h1>
      <p>
        {props.texto}
      </p>
    </div>
    <div>
      <img src={props.imagem} alt={props.alt} />
    </div>
  </section>
  )
}
