
//import './App.css';

//components: 
import Expenses from './components/Expenses'


function App(props) {

  const expenses = [
    {
     id: 'e1', 
     title: 'Cinema' ,
     amount: 25.55, 
     date: new Date(2023, 0, 11)},

     {
     id: 'e2',
     title: 'Eating Out' ,
     amount: 74.45 , 
     date: new Date(2023, 0, 11)},

     {
     id: 'e3',
     title: 'Netflix' ,
     amount: 9.99 , 
     date: new Date(2023, 0, 11)}
  ]
 
  return (
    <div className="App">
      <h2>Heyho.... let's go!</h2>
      <Expenses items={expenses}/>
      
   
    </div>
  );
}

export default App;
