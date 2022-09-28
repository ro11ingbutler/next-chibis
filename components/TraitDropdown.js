import { useState } from "react"

export default function TraitDropdown(props) {
    const selectedTrait = props.selectedTrait ? props.selectedTrait.id : null
    return (
        <>
            <label className="capitalize text-xl text-white place-self-center" htmlFor={`dropdown-${props.type}`}>
                {props.type}
            </label>
            <select onChange={() => props.onTraitChange(event, props.type)} id={`dropdown-${props.type}`} value={selectedTrait ?? ""}
                className="bg-transparent border-2 rounded-xl border-blue-400 p-4 text-white">
                <option className="bg-slate-400 text-white" value="">Choose</option>
                {props.traits.map(item => {
                    return <option className="bg-slate-400 text-white" value={item.id} key={item.id}>{item.name}</option>
                })}
            </select>
        </>
    )
}