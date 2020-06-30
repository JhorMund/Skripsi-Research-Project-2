const Search = () => {
    return (
        <div style={{ flex: 1, margin: 20 }}>
            <> Search: </>
            <input type="text" />
            <> Filter by Category: </>
            <select>
                <option value="">Category</option>
            </select>
        </div>
    )
}

export default Search;