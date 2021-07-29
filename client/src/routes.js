import ConnectVehiclePage from './components/ConnectVehiclePage'
import DashboardPage from './components/DashboardPage'
import HomePage from './components/HomePage'
import InitialConfigPage from './components/InitialConfigPage'

export const PAGES = {
  HOME: 'HOME',
  INITIAL_CONFIG: 'INITIAL_CONFIG',
  CONNECT_VEHICLE: 'CONNECT_VEHICLE',
  DASHBOARD: 'DASHBOARD',
}

const routes = [
  {
    name: PAGES.HOME,
    path: '/',
    component: HomePage,
  },
  {
    name: PAGES.INITIAL_CONFIG,
    path: '/initial-config',
    component: InitialConfigPage,
  },
  {
    name: PAGES.CONNECT_VEHICLE,
    path: '/connect',
    component: ConnectVehiclePage,
  },
  {
    name: PAGES.DASHBOARD,
    path: '/dashboard',
    component: DashboardPage,
  },
]

export default routes
