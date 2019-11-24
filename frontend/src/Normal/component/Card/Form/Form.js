import React, {useEffect, useState} from 'react';
import Input from './Input';
import Submit from './Submit';

function Form(props){
    const [fields,setFields] = useState([]);

    useEffect(()=>{
        var tmp =[];
        props.fields.map((item,index) => {
            tmp.push(<Input key = {index} id = {item.id} name = {item.name} />)
        });
        setFields(tmp);
    },[]);

    return (
        <div>
            <div className="makeStyles-cardBody-371">
                <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">
                    {fields}
                </div>
            </div>
            <div className="makeStyles-cardFooter-554">
                <Submit title = {props.submit}/>
            </div>
        </div>
    );
}

export default Form;
