import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/interface/students';

export const addStudent = createAction('[Students Component] addStudent', props<{ student:Student }>());
