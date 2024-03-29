import { createReducer, on } from '@ngrx/store';
import { addStudent } from '../actions/students.actions';
import { Student } from 'src/app/interface/students';

interface InitialStateApp{
  students: Student[];
}

export const initialState:InitialStateApp = {
  students:[]
};

export const StudentsReducer = createReducer(
  initialState,
  on(addStudent, (state, payload)  => { // esta funcion si o si tiene que retornar el state


    return {...state,students:[...state.students,payload.student]  };
  })

);
