function FilterSeries({setSeriesFilter}) {

    const handleSelection = (event) => {
        setSeriesFilter(event.target.value);
    }

    return(
        <section>
            <label htmlFor="series">Series:</label>
            <select id="series" onChange={handleSelection}>
                <option value="">All series</option>
                <option value="succulent series">Succulent Series</option>
                <option value="nature's candy series">Nature's Candy Series</option>
                <option value="xenoflora series">Xenoflora Series</option>
                <option value="gourmet series">Gourmet Series</option>
                <option value="sweet tooth series">Sweet Tooth Series</option>
                <option value="paleontology series">Paleontology Series</option>
                <option value="ancient secrets series">Ancient Secrets Series</option>
                <option value="cook's arsenal series">Cook's Arsenal Series</option>
                <option value="tortured artist series">Tortured Artist Series</option>
                <option value="modern amenities series">Modern Amenities Series</option>
                <option value="frigid series">Frigid Series</option>
                <option value="hyper-technology series">Hyper-Technology Series</option>
                <option value="industrial set">Industrial Set</option>
                <option value="husband's tears series">Husband's Tears Series</option>
                <option value="space love series">Space Love Series</option>
                <option value="crystallized emotion series">Crystallized Emotion Series</option>
                <option value="dream series">Dream Series</option>
                <option value="blast from the past series">Blast From the Past Series</option>
                <option value="mystical energy series">Mystical Energy Series</option>
                <option value="massive receptacle series">Massive Receptacle Series</option>
                <option value="survival series">Survival Series</option>
                <option value="ancient ad series">Ancient Ad Series</option>
                <option value="odd logo series">Odd Logo Series</option>
                <option value="explorer's friend series">Explorer's Friend Series</option>
                <option value="titan dweevil series">Titan Dweevil Series</option>
            </select>
        </section>
    )
}

export default FilterSeries;