import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectStudent} from '../action/StudentAction'

class StudentList extends Component{
    constructor(props){
        super(props)
        this.state={
            id: '',
            name:'',
            address:''
        }
    }
    render(){
        return(
            <div>
                <table border='2'>
                    <tr><th>SN</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                   { 
                       this.props.list.map((students)=>{
                        return(
                            <tr>
                                <td>{students.id} </td>
                                <td onClick={ ()=>{console.log("apple")}}>{students.name} </td>
                                <td>{students.address} </td>
                            </tr>
                        )}
                   )}
                </table>
                <h1>Selected Student is: <span> {this.props.selected.name}</span>
                </h1>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return ({
        list:state.students,
        selected:state.selected
    })
} 

function mapDispatchToProps(dispatch)
{
    bindActionCreators({
        handlClick:selectStudent
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);