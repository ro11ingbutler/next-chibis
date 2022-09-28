export default function TraitDropdown(props) {
    const selectedTraitId = props.selectedTrait ? props.selectedTrait.id : null
    return (
        <>
            <label className="capitalize text-xl text-white place-self-center" htmlFor={`dropdown-${props.trait}`}>
                {props.trait}
            </label>
            <select onChange={() => props.onTraitChange(event, props.trait)} id={`dropdown-${props.trait}`}
                className="bg-transparent border-2 rounded-xl border-blue-400 p-4 text-white">
                <option className="bg-slate-400 text-white" value="{}">Choose</option>
                {props.traits.map(item => {
                    return <option selected={item.id === selectedTraitId} className="bg-slate-400 text-white" value={JSON.stringify(item)} key={item.id}>{item.name}</option>
                })}
            </select>
        </>
    )
}