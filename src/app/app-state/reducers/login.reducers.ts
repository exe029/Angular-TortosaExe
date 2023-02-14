import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/login.actions';
import { User } from '../entity/user.entity';


interface InitialStateApp{
  user: User;
}

export const initialState:InitialStateApp = {
  user:{email:'',password:'',avatar:'',fname:'',lname:'',id:''}
};

export const StudentsReducer = createReducer(
  initialState,
  on(login, (state, payload)  => { // esta funcion si o si tiene que retornar el state

    return {user:payload.user };
  })

);
