import React from 'react';


const initialTodos = [
    {
        id: 'a',
        task: 'value to enter',
        complete: false
    },

    {
        id: 'b',
        task: 'Learn React',
        complete: false
    },

];

const Readas = (state, action) => {
    switch(action.type){
        case 'DO_TODO':
            return state.map(todo=>{
                if(todo.id === action.id){
                    return{...todo, complete: true};
                }
                else{
                    return todo;
                }
            });

            case 'UNDO_TODO':
                return state.map(todo => {
                    if(todo.id === action.id) {
                        return{...todo, complete: true};
                    }
                    else{
                        return todo;
                    }
                });



                case 'UNDO_TODO':
                    return state.map(todo=>{
                        if(todo.id === action.id){
                            return{...todo, complete: false};
                        }
                    })

                    default: 
                    return state;

    }
};