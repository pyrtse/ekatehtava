import React from 'react'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Osa = ({ osa }) => {
    return (
        <li>{osa.nimi} {osa.tehtavia}</li>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            {props.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
        </div>
    )
}

const Yhteensa = (props) => {
    const taulu = props.osat.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (
        <div>
            <p>yhteensä {taulu.reduce(reducer)} tehtävää </p>
        </div>
    )
}

const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi.nimi} />
            <ul>
                <Sisalto osat={props.kurssi.osat} />
            </ul>
            <Yhteensa osat={props.kurssi.osat} />
        </div>
    )
}

const Kurssit = ({kurssit}) => {
    return (
        <div>
            {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
        </div>
    )
}

export default Kurssit