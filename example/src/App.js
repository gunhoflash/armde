import './App.css';
import { ArmdeEditor, ArmdeViewer, ArmdeWrapper, ArmdeConnection } from 'armde';

function App() {
  const connection = new ArmdeConnection();
  return (
    <div className="container">
      <h1>ArmdeWrapper</h1>
      <div className="box">
        <ArmdeWrapper />
      </div>
      <h1>ArmdeEditor and ArmdeViewer</h1>
      <div className="box">
        <ArmdeEditor connection={connection} />
        <ArmdeViewer connection={connection} />
      </div>
    </div>
  );
}

export default App;
