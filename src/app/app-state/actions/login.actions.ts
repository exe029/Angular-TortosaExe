import { createAction, props } from '@ngrx/store';
import { User } from '../entity/user.entity';

export const login = createAction('[LoginPage Component] login', props<{ user:User }>());
