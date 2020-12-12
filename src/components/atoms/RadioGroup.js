import React from 'react';

const RadioGroup = ({children, onChange, selectedIndex})=>{
    const renderChildren = ()=>{
        return children.map((child, index)=>{
            return React.cloneElement(child,{
                key: index,
                checked: selectedIndex === index,
                onPress: ()=>onChange(index)
            })
        })
    }
    return renderChildren();
};

export default RadioGroup;