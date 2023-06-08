
import './App.css';

function App() {
  return (
    <div className="App">
      <div classname="form-container">

        <form>
          <select name='select' multiple className='multiselect' multiselect-search='true' placeholder='e.g. Australia' multiselect-max-items='10'>
            <option>Australia</option>
            <option>Bermuda</option>
            <option>Canada</option>
            <option>Cameroon</option>
            <option>Denmark</option>
            <option>France</option>
            <option>Finland</option>
            <option>Germany</option>
          </select>
        </form>
      </div>


    </div>
  );
}

export default App;
