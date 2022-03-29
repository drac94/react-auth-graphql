import { History, createBrowserHistory } from 'history';

export type ReadonlyBrowserHistory = Readonly<History>;
const browserHistory: ReadonlyBrowserHistory = createBrowserHistory();

export default browserHistory;
