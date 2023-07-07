function SearchBar({searchInput, setSearchInput}) {

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    }

    const clearInput = () => {
        setSearchInput("");
    }

    return(
        <section>
            <input placeholder="Search treasure name" value={searchInput} onChange={handleInput} />
            <button onClick={clearInput}>Clear</button>
        </section>
    );
}

export default SearchBar;