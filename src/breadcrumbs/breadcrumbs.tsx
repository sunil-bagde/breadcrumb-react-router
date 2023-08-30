import { useMatches, useLocation, Link } from "react-router-dom";
import { useContext, createContext } from "react";

const BreadcrumbContext = createContext();

const BreadcrumbProvider = BreadcrumbContext.Provider;

const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  return context;
};

export default function Breadcrumbs({ children }) {
  return <BreadcrumbProvider value={{}}>{children}</BreadcrumbProvider>;
}

const Base = () => {
  let { pathname } = useLocation();
  return (
    <li className={`${pathname === "/" ? "hidden" : "block"}`}>
      <Link to="/" className="text-gray-400 hover:text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span className="sr-only">Home</span>
      </Link>
    </li>
  );
};
const List = ({ crumbs }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        {crumbs?.map((crumb, index) => {
          let isArray = Array.isArray(crumb);
          return isArray ? (
            <List crumbs={crumb} key={index} />
          ) : (
            <CrumbItem index={index} key={index}>
              {crumb}
            </CrumbItem>
          );
        })}
      </ol>
    </nav>
  );
};
const CrumbList = () => {
  let matches = useMatches();
  let { pathname } = useLocation();

  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return <List crumbs={crumbs} />;
};
const CrumbItem = ({ children }) => {
  return (
    <li className="only:font-normal last:font-bold">
      <div className="flex items-center">
        <svg
          className="h-5 w-5 flex-shrink-0 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
        </svg>
        {children}
      </div>
    </li>
  );
};
Breadcrumbs.Base = Base;
Breadcrumbs.CrumbList = CrumbList;
Breadcrumbs.CrumbItem = CrumbItem;
