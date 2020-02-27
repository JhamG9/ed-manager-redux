import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({ suplentes, quitarSuplente }) => (
    <section>
        <h2>Suplentes</h2>
        <div className="cancha">
            {suplentes.map(j => (
                <article className="titular">
                    <div>
                        <img src={j.foto} alt={j.nombre} style={{width: 150}}/>
                        <button onClick={() => quitarSuplente(j)}>X</button>
                    </div>

                    <p>{j.nombre}</p>
                </article>
            ))}
        </div>

    </section>
)   
const mapStateToProps = state => ({
    suplentes: state.suplentes
});

const mapDispatchToProps = dispatch =>({
    quitarSuplente(jugador){
        dispatch({
            type:"QUITAR_SUPLENTE",
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);