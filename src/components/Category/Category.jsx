import React, { useState, useEffect } from 'react'
import { BrowserRoute, Switch, Route, useParams } from 'react-router-dom'

export default function Category() {
    const { categoryId } = useParams()
    
    useEffect(() => {
        console.log(categoryId)
    }, [categoryId])

    return (
        <h1>
            Estas en la categoria {categoryId}
        </h1>
    );
}