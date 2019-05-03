const redux = require('redux');

const createStore = redux.createStore;

//creando state inicial
const stateInicial = {
    usuarios: []
}

//Reducer,define como el state va cambiar de acuerdo a ciertas acciones
//toma el state y la accion
const reducerRedux = (state = stateInicial,action) =>{
    if(action.type === 'AGREGAR_USUARIO'){
        return{
            ...state,
            usuarios: action.nombre
        }
    }

    if(action.type === 'MOSTRAR_USUARIOS'){
        return{
            ...state
        }
    }
    return state;
}

//create store y store (contiene el state de la aplicacion)
//toma tres parametros, reducer, state inicial, applymiddleware
const store = createStore(reducerRedux);

//sucribe o suscripcion
store.subscribe( () =>{
    console.log('algo cambio...!', store.getState());
})

//dispatch es la forma de cambiar el state
store.dispatch({type: 'AGREGAR_USUARIO',nombre:'Jorge'});
store.dispatch({type: 'MOSTRAR_USUARIOS'});
console.log(store.getState());