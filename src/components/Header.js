import logo from '../logo.svg';
import ALink from './ALink';

export default function Header() {
    return (
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <ALink />
        </header>
      </div>
    );
  }