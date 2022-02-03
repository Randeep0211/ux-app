import ContractsHeading from '../components/contract';
import Search from '../components/search';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <ContractsHeading
        contracts="My contracts"
        status="Current Status of contracts"
      />

      <Search placeholder="Search" />
      {children}
    </div>
  );
};
