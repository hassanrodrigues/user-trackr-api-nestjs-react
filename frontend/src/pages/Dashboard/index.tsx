import PieChart from './components/PierChartUsers';
import BarChart from './components/BarChart';
import { useState } from 'react';
import { dashboardUser } from "../../services/users";
import { useQuery } from 'react-query';

const App = () => {
  const [dataDash, setDataDash] = useState(null);

  useQuery(
    'dashboardUser',
    dashboardUser,
    {
      onSuccess: (response) => {
        const dataOnSuccess = response?.data;

        const pieData = [
          { name: "Inativos", value: dataOnSuccess.pieChartData.usersInactive },
          { name: "Ativos", value: dataOnSuccess.pieChartData.usersActive },
          { name: "Deletados", value: dataOnSuccess.pieChartData.userDeleted },
        ];

        const barData = [
          { label: "Usuários Inativos Administrador", count: dataOnSuccess.barChartData.usersInactiveAdmin },
          { label: "Usuários Ativos Administrador", count: dataOnSuccess.barChartData.usersActiveAdmin },
          { label: "Usuários Ativos Comum", count: dataOnSuccess.barChartData.usersActiveCommon },
          { label: "Usuários Inativos Comum", count: dataOnSuccess.barChartData.usersInactiveCommon },
        ];

        setDataDash({ pieData, barData });
      },
    }
  );


  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div>
        <h1>Usuários Ativos e Inativos</h1>
        <PieChart data={dataDash?.pieData || []} />
      </div>
      <div>
        <h1>Usuários Ativos e Inativos por perfil</h1>
        <BarChart data={dataDash?.barData || []} />
      </div>
    </div>
  );
};

export default App;