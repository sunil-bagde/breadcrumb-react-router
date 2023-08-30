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

const Root = ({ children, srOnly = "Back" }) => {
  let { pathname } = useLocation();
  return children ? (
    children
  )   : (
    <li className={`${pathname === "/" ? "hidden" : "block"}`}>
      <Link to="/" className="text-gray-400 hover:text-gray-500">
        <BackIcon />
        <span className="sr-only">{srOnly}</span>
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
            <CrumbItem index={index} key={index} icon>
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
const CrumbItem = ({ children, icon }) => {
  return (
    <li className="only:font-normal last:font-bold list-none">
      <div className="flex items-center">
        {icon ? <SlashIcon /> : null}
        {children}
      </div>
    </li>
  );
};
const BackIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 flex-shrink-0 text-gray-300 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
    />
  </svg>
);
const SlashIcon = ({ className }) => (
  <svg
    className={`h-5 w-5 flex-shrink-0 text-gray-300 ${className}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
  </svg>
);

Breadcrumbs.Root = Root;
Breadcrumbs.BackIcon = BackIcon;
Breadcrumbs.SlashIcon = SlashIcon;
Breadcrumbs.CrumbList = CrumbList;
Breadcrumbs.CrumbItem = CrumbItem;
