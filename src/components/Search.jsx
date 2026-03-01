const Search = ({ search, setSearch }) => {
  return(
    <div className="serch">
        <h2>Pesquisar</h2>
        <input type="text" 
        value={search} 
        onChange={(e)=> {setSearch(e.target.value)}}  
        placeholder="Digite para pesquisar">
        </input>
    </div>
  )
}

export default Search