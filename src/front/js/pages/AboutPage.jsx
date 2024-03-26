import React from "react"
import { useParams } from "react-router-dom"

export const AboutPage = () => {
    let { id } = useParams();
    return (
        <h1>Hola desde el aboutPage {id}</h1>
    )
}