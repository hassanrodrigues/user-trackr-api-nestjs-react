import PieChart from './components/PierChartUsers';
import BarChart from './components/BarChart';

const App = () => {
  const pieChartData = [
    { name: "Inativos", value: 11 },
    { name: "Ativos", value: 23 },
  ];

  const barChartData = [
    { label: "Usuario Inativos Adm", count: 112 },
    { label: "Usuarios Ativos Admin", count: 12 },
    { label: "Usuarios Ativos Comum", count: 12 },
    { label: "Usuarios inativos Comum", count: 44 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div>
        <h1>Usuarios Ativos e Inativos</h1>
        <PieChart data={pieChartData} />
      </div>
      <div>
        <h1>Usuarios Ativos e Inativos por perfil</h1>
        <BarChart data={barChartData} />
      </div>
    </div>
  );
};

export default App;