import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Aaaa",
            foto: "https://previews.123rf.com/images/dianamk/dianamk1610/dianamk161000022/67481280-lobo-logotipo-perfil-de-la-cabeza-stock-vectorial-para-su-dise%C3%B1o.jpg"
        }, {
            id: 2,
            nombre: "Jugador 2",
            foto: "https://imagenesbonitas.co/wp-content/uploads/2019/01/b479f19e996509b79bb758f40fb55a24-300x300.jpg"
        }, {
            id: 3,
            nombre: "Jugador 3",
            foto: "https://dulcebermudez.com/storage/2019/03/13599829_613277442180009_5280523076332640023_n.jpg"
        }
    ],
    titulares: [],
    suplentes: []
};

//State actual de como se tiene la data almacenada actualmente
//Action indica que cambio se debe de efectuar al estado
const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id),

        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !==action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j =>j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    console.log(action);
    return state;
}

export default createStore(reducerEntrenador);