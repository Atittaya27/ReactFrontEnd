import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App(){
  const helloData = [
    {name: 'Atittaya' , message: 'Hi there'},
    {name: 'Tom' , message: 'Hello.....'}
  ];


  return(
    <div className='App'>
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email="maiatittaya.a@gmail.com" phone ="0918486072"/>
    </div>
  );
}
export default App;
