import React from 'react';
import { connect } from 'react-redux';

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (
                    <article className="jugador" key={j.id}>
                        <img src={j.foto} alt={j.nombre} style={{width: 150}} />
                        <h3>{j.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <button onClick={() => agregarSuplente(j)}>Suplente</button>
                        </div>
                    </article>
                ))
            }

        </div>
    </section>
)

//Primera funcion recibe el estado y con el estado retorna un objeto 
//y en el objeto voy a crear un atributo jugadores y del estado pasame el atributo jugadores
//lo que tiene en el estado y lo convierte en estado
//Segunda funcion 

const mapStateToProps = state => ({
    jugadores: state.jugadores
});

const mapDispatchToProps = dispatch =>({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type:"AGREGAR_SUPLENTE",
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);