import PlatList from './components/PlatList';
import PlatsForms from './components/PlatsForms';

function App() {
  const PlatsFormsubmit = (data) => [console.log('==============', data)];
  return (
    <div className='container'>
      <PlatsForms onSubmitPlat={PlatsFormsubmit} />
      <h3>Nos meilleurs Plat</h3>
      <PlatList />
    </div>
  );
}

export default App;
