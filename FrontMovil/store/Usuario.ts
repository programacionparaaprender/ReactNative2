//import { Action, Reducer } from 'redux';
import { Reducer } from 'redux';
import {Usuario} from '../tipos'

export interface UsuarioState{
    usuario:Usuario | null
}  
export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }
export interface REGISTRAR_USUARIO { 
    type: 'REGISTRAR_USUARIO',
    payload:{
        id: string;
        usuario: string;
        password:string;
        nombre:string
        apellido: string;
    }
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = IncrementCountAction | DecrementCountAction | REGISTRAR_USUARIO ;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: () => ({ payload:'data',type: 'INCREMENT_COUNT' } as IncrementCountAction),
    decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction),
    registrarUsuario: (usuario:Usuario) => ({ payload:usuario,type: 'REGISTRAR_USUARIO' } as REGISTRAR_USUARIO)  
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<UsuarioState> = (state: UsuarioState | undefined, incomingAction: KnownAction): UsuarioState => {
    if (state === undefined) {
        let usuario = {
            id:"1",
            usuario:"usuario1",
            password: "123456",
            nombre: "Pedro",
            apellido:"Gonzales"
        }
        return { usuario: null };
        //return { usuario: usuario };
    }
    console.log('incomingAction: '+JSON.stringify(incomingAction))
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REGISTRAR_USUARIO':
           let usuario:Usuario
           usuario = {
                id: action.payload.id,
                usuario: action.payload.usuario,
                password:action.payload.password,
                nombre:action.payload.nombre,
                apellido: action.payload.apellido
            }
           return  { usuario: usuario };
            
        default:
            return state;
    }
};
