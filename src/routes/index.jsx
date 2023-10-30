import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { adminRoutes } from './admin.routes';
import { customerRoutes } from './customer.routes';
import { saleRoutes } from './sale.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  function AccessRoute(){
    switch(user.role){

      case 'USER_ROLE.ADMIN': return <adminRoutes />;
      case 'USER_ROLE.CUSTOMER': return <customerRoutes />;
      case 'USER_ROLE.SALE': return <saleRoutes />;
      default: return <customerRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}