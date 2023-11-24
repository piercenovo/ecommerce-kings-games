

interface DashboardPageProps {
    params: {
      storeId: string;
    };
  };
  
const DashboardPage: React.FC<DashboardPageProps> = async ({ 
    params
  }) => {

  return (
    <div>
        This is a Dashboard
    </div>
  );
};

export default DashboardPage;
