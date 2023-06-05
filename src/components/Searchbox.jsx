const SearchBox = (props) => {
    return (
        <div className="col col-sm-3">
            <input style={inpt}
                className="form-control"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Type to Search....."
            />

        </div>
    )
}

export default SearchBox;

const inpt = {
    backgroundColor:"rgb(44, 100, 39)",
    color:'white',
    height:'30px',
    marginTop:'13px'
}