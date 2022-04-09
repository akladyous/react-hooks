import React, { useEffect, useState, memo, useCallback } from 'react'
import {MemoizedComponent} from './MemoChild.js'
export default function MemoParent() {
    const [fields, setFields] = useState([
        {first_name: ''},
        {last_name: ''},
        {age: ''}
    ]);
    const updateState = useCallback((e) =>{
        setFields( prevState => prevState.map(item =>{
            let fieldNme = Object.keys(item)[0]
            return fieldNme !== e.target.name ? item : {[fieldNme]: e.target.value}
        })
        )},[]);
    useEffect(()=>{
        console.log('parent-component did mount')
        return ()=>{console.log('parent-component will unmount')}
    },[])
    return (
        <div>
            <h3>Parent component</h3>
            {
                fields.map((item, index) => {
                    let fieldName = Object.keys(item)[0]
                    let fieldValue = item[fieldName]
                    return (
                        <MemoizedComponent
                            key={index}
                            name={fieldName}
                            value={fieldValue}
                            onChange={updateState}
                        />
                    );
                })
            }
        </div>
    )
}

