import siteMetadata from "../data/siteMetaData";
import headerNavLinks from "../data/hearderNavLinks";
// import Logo from '@/data/logo.svg'
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 px-4 sm:px-6 xl:px-10">

      <Link to="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          {/* <div className="mr-3"> <Logo /> </div> */}

          <div className="hidden text-2xl font-semibold md:block h-full text-center">
            {siteMetadata.headerTitle}
          </div>

        </div>
      </Link>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          // .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 md:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}

      </div>
      <MobileNav />
    </header >
  );
};

export default Header;
