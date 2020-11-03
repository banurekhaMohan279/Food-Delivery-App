import {useHistory} from 'react-router-dom';

function App() {
  let history = useHistory();

  function goToHomePage(event){
    event.preventDefault();
    history.push('/Home');
  }

  return (
    <div className="App LoginPage">
      <section className="loginContainer">
        <div className="login">
          <header>Food Delivery App Login</header>
          <form onSubmit = {goToHomePage}>
              <input type="text" placeholder="User Name"/>
              <input type="password" placeholder="Password"/>
              <input type="submit"/>
          </form>
          </div>
      </section>
    </div>
  );
}

export default App;