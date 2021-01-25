import LeftTab from './LeftTab';
import RightTab from './RightTab';

function App() {
  return (
    <main class="m-3 p-3 d-flex justify-content-center align-items-center h-100">
      <div class="container-fluid">
        <div class="row h-100">
          <LeftTab />
          <RightTab />
        </div>
      </div>
    </main>
  );
}

export default App;
