function FilterLocation({setLocationFilter}) {

    const handleSelection = (event) => {
        setLocationFilter(event.target.value);
    }

    return(
        <section>
            <label htmlFor="location">Location:</label>
            <select id="location" onChange={handleSelection}>
                <option value="">All areas</option>
                <option value="valley of repose">Valley of Repose</option>
                <option value="emergence cave">Emergence Cave</option>
                <option value="subterranean complex"> Subterranean Complex</option>
                <option value="frontier cavern">Frontier Cavern</option>
                <option value="awakening wood">Awakening Wood</option>
                <option value="hole of beasts">Hole of Beasts</option>
                <option value="white flower garden">White Flower Garden</option>
                <option value="bulblax kingdom">Bulblax Kingdom</option>
                <option value="snagret hole">Snagret Hole</option>
                <option value="perplexing pool">Perplexing Pool</option>
                <option value="citadel of spiders">Citadel of Spiders</option>
                <option value="glutton's kitchen">Glutton's Kitchen</option>
                <option value="shower room">Shower Room</option>
                <option value="submerged castle">Submerged Castle</option>
                <option value="wistful wild">Wistful Wild</option>
                <option value="cavern of chaos">Cavern of Chaos</option>
                <option value="hole of heroes">Hole of Heroes</option>
                <option value="dream den">Dream Den</option>
            </select>
        </section>
    );
}

export default FilterLocation;