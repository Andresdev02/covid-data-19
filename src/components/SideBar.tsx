import {
  ChartPieIcon,
  StarIcon,
  MailIcon,
  ChartBarIcon,
  UserIcon,
  ViewGridIcon,
  CogIcon,
} from "@heroicons/react/solid";

const SideBar = () => {
  return (
    <div id="sidebar" className="covid-sidebar">
      <ul className="covid-sidebar-ul">
        <li className="covid-sidebar-li border-b border-gray-10 h-[71px]">
          <ViewGridIcon className="covid-sidebar-icon text-primary " />
        </li>
        <li className="covid-sidebar-li active">
          <ChartPieIcon className="covid-sidebar-icon" />
        </li>
        <li className="covid-sidebar-li">
          <StarIcon className="covid-sidebar-icon" />
        </li>
        <li className="covid-sidebar-li">
          <MailIcon className="covid-sidebar-icon" />
        </li>
        <li className="covid-sidebar-li">
          <ChartBarIcon className="covid-sidebar-icon" />
        </li>
        <li className="covid-sidebar-li">
          <UserIcon className="covid-sidebar-icon" />
        </li>
      </ul>
      <li className="covid-sidebar-li">
        <CogIcon className="covid-sidebar-icon" />
      </li>
    </div>
  );
};

export default SideBar;
