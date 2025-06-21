const Header = () => {
  
  return (
    <nav>
        <div className="nav-wrapper blue">
          <a href="#" className="brand-logo center">Todos</a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger left">
            <i className="material-icons">menu</i>
          </a>
          {/* <ul id="nav-mobile" class="right hide-on-med-and-down"> */}
            {/* <li><a href="sass.html">Sass</a></li> */}
          {/* </ul> */}
        </div>
    </nav>
  );
};

export default Header;
