import React,{Components} from 'react';

export function selectStudent(stud){
    return{
        type: 'SELECT_STUD',
        payload: stud
    }
}