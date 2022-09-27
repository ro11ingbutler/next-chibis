export default function TraitDropdown(props) {
    return (
        <>
            <label>
                {props.trait}
                <select onChange={() => props.onTraitChange(event, props.trait)}>
                    {props.traits.map(item => {
                        return <option value={JSON.stringify(item)} key={item.id}>{item.name}</option>
                    })}
                </select>
            </label>
        </>
    )
}