import React from 'react';
import images from '@assets/images/index';
import { Link } from 'react-router-dom';
import { TPath } from '@interface/index';
import { routes } from '@routers/routes';
import './sidebar.scss';
import path from 'path';

type Tnav = {
  title: string;
  icon: React.ReactNode;
  path: TPath;
};

const navList: Tnav[] = [
  {
    title: 'Trang Chủ',
    icon: (
      <svg width="18" height="21" viewBox="0 0 18 21" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0001 7.00001L11.0001 1.74001C10.4501 1.24805 9.73803 0.976074 9.00009 0.976074C8.26216 0.976074 7.55012 1.24805 7.00009 1.74001L1.00009 7.00001C0.682463 7.28408 0.428995 7.63256 0.256567 8.02225C0.0841385 8.41194 -0.00329256 8.83389 9.47941e-05 9.26001V18C9.47941e-05 18.7957 0.316165 19.5587 0.878775 20.1213C1.44138 20.6839 2.20445 21 3.00009 21H15.0001C15.7957 21 16.5588 20.6839 17.1214 20.1213C17.684 19.5587 18.0001 18.7957 18.0001 18V9.25001C18.0021 8.82557 17.9139 8.40555 17.7416 8.01769C17.5692 7.62983 17.3165 7.28296 17.0001 7.00001V7.00001ZM11.0001 19H7.00009V14C7.00009 13.7348 7.10545 13.4804 7.29299 13.2929C7.48052 13.1054 7.73488 13 8.00009 13H10.0001C10.2653 13 10.5197 13.1054 10.7072 13.2929C10.8947 13.4804 11.0001 13.7348 11.0001 14V19ZM16.0001 18C16.0001 18.2652 15.8947 18.5196 15.7072 18.7071C15.5197 18.8946 15.2653 19 15.0001 19H13.0001V14C13.0001 13.2044 12.684 12.4413 12.1214 11.8787C11.5588 11.3161 10.7957 11 10.0001 11H8.00009C7.20444 11 6.44138 11.3161 5.87877 11.8787C5.31617 12.4413 5.00009 13.2044 5.00009 14V19H3.00009C2.73488 19 2.48052 18.8946 2.29299 18.7071C2.10545 18.5196 2.00009 18.2652 2.00009 18V9.25001C2.00027 9.10802 2.03069 8.9677 2.08931 8.83839C2.14794 8.70907 2.23343 8.59372 2.3401 8.50001L8.34009 3.25001C8.52258 3.08969 8.75719 3.00127 9.00009 3.00127C9.243 3.00127 9.47761 3.08969 9.66009 3.25001L15.6601 8.50001C15.7668 8.59372 15.8523 8.70907 15.9109 8.83839C15.9695 8.9677 15.9999 9.10802 16.0001 9.25001V18Z" />
      </svg>
    ),
    path: routes.home,
  },
  {
    title: 'Quản lý vé',
    icon: (
      <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9C7.26522 9 7.51957 8.89464 7.70711 8.70711C7.89464 8.51957 8 8.26522 8 8V6C8 5.73478 7.89464 5.48043 7.70711 5.29289C7.51957 5.10536 7.26522 5 7 5ZM19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6C1.26522 6 1.51957 6.10536 1.70711 6.29289C1.89464 6.48043 2 6.73478 2 7C2 7.26522 1.89464 7.51957 1.70711 7.70711C1.51957 7.89464 1.26522 8 1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7C18 6.73478 18.1054 6.48043 18.2929 6.29289C18.4804 6.10536 18.7348 6 19 6ZM18 4.18C17.4208 4.3902 16.9205 4.77363 16.5668 5.27816C16.2132 5.7827 16.0235 6.38388 16.0235 7C16.0235 7.61612 16.2132 8.2173 16.5668 8.72184C16.9205 9.22637 17.4208 9.6098 18 9.82V12H8C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12H2V9.82C2.57915 9.6098 3.07954 9.22637 3.43316 8.72184C3.78678 8.2173 3.97648 7.61612 3.97648 7C3.97648 6.38388 3.78678 5.7827 3.43316 5.27816C3.07954 4.77363 2.57915 4.3902 2 4.18V2H6C6 2.26522 6.10536 2.51957 6.29289 2.70711C6.48043 2.89464 6.73478 3 7 3C7.26522 3 7.51957 2.89464 7.70711 2.70711C7.89464 2.51957 8 2.26522 8 2H18V4.18Z" />
      </svg>
    ),
    path: routes.management,
  },
  {
    title: 'Đổi soát vé',
    icon: (
      <svg width="20" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 14.9999H5.00001C4.73479 14.9999 4.48044 15.1053 4.2929 15.2928C4.10537 15.4804 4.00001 15.7347 4.00001 15.9999C4.00001 16.2652 4.10537 16.5195 4.2929 16.7071C4.48044 16.8946 4.73479 16.9999 5.00001 16.9999H11C11.2652 16.9999 11.5196 16.8946 11.7071 16.7071C11.8947 16.5195 12 16.2652 12 15.9999C12 15.7347 11.8947 15.4804 11.7071 15.2928C11.5196 15.1053 11.2652 14.9999 11 14.9999ZM7.00001 8.99995H9.00001C9.26522 8.99995 9.51958 8.89459 9.70711 8.70705C9.89465 8.51952 10 8.26516 10 7.99995C10 7.73473 9.89465 7.48038 9.70711 7.29284C9.51958 7.1053 9.26522 6.99995 9.00001 6.99995H7.00001C6.73479 6.99995 6.48044 7.1053 6.2929 7.29284C6.10537 7.48038 6.00001 7.73473 6.00001 7.99995C6.00001 8.26516 6.10537 8.51952 6.2929 8.70705C6.48044 8.89459 6.73479 8.99995 7.00001 8.99995ZM19 10.9999H16V1.99995C16.0007 1.82374 15.9548 1.65047 15.867 1.49769C15.7792 1.34491 15.6526 1.21805 15.5 1.12995C15.348 1.04218 15.1755 0.995972 15 0.995972C14.8245 0.995972 14.652 1.04218 14.5 1.12995L11.5 2.84995L8.50001 1.12995C8.34799 1.04218 8.17554 0.995972 8.00001 0.995972C7.82447 0.995972 7.65203 1.04218 7.50001 1.12995L4.50001 2.84995L1.50001 1.12995C1.34799 1.04218 1.17554 0.995972 1.00001 0.995972C0.824471 0.995972 0.652027 1.04218 0.500008 1.12995C0.347404 1.21805 0.220789 1.34491 0.132986 1.49769C0.0451828 1.65047 -0.000691685 1.82374 7.88288e-06 1.99995V17.9999C7.88288e-06 18.7956 0.316078 19.5587 0.878688 20.1213C1.4413 20.6839 2.20436 20.9999 3.00001 20.9999H17C17.7957 20.9999 18.5587 20.6839 19.1213 20.1213C19.6839 19.5587 20 18.7956 20 17.9999V11.9999C20 11.7347 19.8947 11.4804 19.7071 11.2928C19.5196 11.1053 19.2652 10.9999 19 10.9999ZM3.00001 18.9999C2.73479 18.9999 2.48044 18.8946 2.2929 18.7071C2.10536 18.5195 2.00001 18.2652 2.00001 17.9999V3.72995L4.00001 4.86995C4.15435 4.95056 4.32589 4.99266 4.50001 4.99266C4.67413 4.99266 4.84567 4.95056 5.00001 4.86995L8.00001 3.14995L11 4.86995C11.1543 4.95056 11.3259 4.99266 11.5 4.99266C11.6741 4.99266 11.8457 4.95056 12 4.86995L14 3.72995V17.9999C14.0027 18.3411 14.0636 18.6793 14.18 18.9999H3.00001ZM18 17.9999C18 18.2652 17.8947 18.5195 17.7071 18.7071C17.5196 18.8946 17.2652 18.9999 17 18.9999C16.7348 18.9999 16.4804 18.8946 16.2929 18.7071C16.1054 18.5195 16 18.2652 16 17.9999V12.9999H18V17.9999ZM11 10.9999H5.00001C4.73479 10.9999 4.48044 11.1053 4.2929 11.2928C4.10537 11.4804 4.00001 11.7347 4.00001 11.9999C4.00001 12.2652 4.10537 12.5195 4.2929 12.7071C4.48044 12.8946 4.73479 12.9999 5.00001 12.9999H11C11.2652 12.9999 11.5196 12.8946 11.7071 12.7071C11.8947 12.5195 12 12.2652 12 11.9999C12 11.7347 11.8947 11.4804 11.7071 11.2928C11.5196 11.1053 11.2652 10.9999 11 10.9999Z" />
      </svg>
    ),
    path: routes.checking,
  },
  {
    title: 'Cài đặt',
    icon: (
      <svg width="21" height="22" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8999 11.66C18.7396 11.4775 18.6512 11.2429 18.6512 11C18.6512 10.7571 18.7396 10.5225 18.8999 10.34L20.1799 8.90002C20.3209 8.74269 20.4085 8.54472 20.4301 8.33452C20.4516 8.12433 20.4061 7.9127 20.2999 7.73002L18.2999 4.27002C18.1948 4.08754 18.0348 3.94289 17.8426 3.8567C17.6505 3.77051 17.4361 3.74718 17.2299 3.79002L15.3499 4.17002C15.1107 4.21945 14.8616 4.17961 14.6498 4.05802C14.4379 3.93643 14.2779 3.7415 14.1999 3.51002L13.5899 1.68002C13.5228 1.4814 13.395 1.30888 13.2245 1.18686C13.0541 1.06484 12.8495 0.999476 12.6399 1.00002H8.6399C8.42183 0.988635 8.20603 1.04894 8.02546 1.17173C7.84489 1.29452 7.70948 1.47304 7.6399 1.68002L7.0799 3.51002C7.0019 3.7415 6.84187 3.93643 6.63001 4.05802C6.41815 4.17961 6.16911 4.21945 5.9299 4.17002L3.9999 3.79002C3.80445 3.7624 3.6052 3.79324 3.42724 3.87866C3.24929 3.96407 3.1006 4.10025 2.9999 4.27002L0.999896 7.73002C0.891056 7.91067 0.842118 8.1211 0.860079 8.33124C0.878039 8.54138 0.961979 8.74046 1.0999 8.90002L2.3699 10.34C2.53022 10.5225 2.61863 10.7571 2.61863 11C2.61863 11.2429 2.53022 11.4775 2.3699 11.66L1.0999 13.1C0.961979 13.2596 0.878039 13.4587 0.860079 13.6688C0.842118 13.8789 0.891056 14.0894 0.999896 14.27L2.9999 17.73C3.10499 17.9125 3.26502 18.0571 3.45715 18.1433C3.64928 18.2295 3.86372 18.2529 4.0699 18.21L5.9499 17.83C6.18911 17.7806 6.43815 17.8204 6.65001 17.942C6.86187 18.0636 7.0219 18.2585 7.0999 18.49L7.7099 20.32C7.77948 20.527 7.91489 20.7055 8.09546 20.8283C8.27603 20.9511 8.49183 21.0114 8.7099 21H12.7099C12.9195 21.0006 13.1241 20.9352 13.2945 20.8132C13.465 20.6912 13.5928 20.5186 13.6599 20.32L14.2699 18.49C14.3479 18.2585 14.5079 18.0636 14.7198 17.942C14.9316 17.8204 15.1807 17.7806 15.4199 17.83L17.2999 18.21C17.5061 18.2529 17.7205 18.2295 17.9126 18.1433C18.1048 18.0571 18.2648 17.9125 18.3699 17.73L20.3699 14.27C20.4761 14.0873 20.5216 13.8757 20.5001 13.6655C20.4785 13.4553 20.3909 13.2573 20.2499 13.1L18.8999 11.66ZM17.4099 13L18.2099 13.9L16.9299 16.12L15.7499 15.88C15.0297 15.7328 14.2805 15.8551 13.6445 16.2238C13.0085 16.5925 12.53 17.1819 12.2999 17.88L11.9199 19H9.3599L8.9999 17.86C8.76975 17.1619 8.29128 16.5725 7.6553 16.2038C7.01932 15.8351 6.27012 15.7128 5.5499 15.86L4.3699 16.1L3.0699 13.89L3.8699 12.99C4.36185 12.44 4.63383 11.7279 4.63383 10.99C4.63383 10.2521 4.36185 9.54004 3.8699 8.99002L3.0699 8.09002L4.3499 5.89002L5.5299 6.13002C6.25012 6.27724 6.99932 6.1549 7.6353 5.78622C8.27128 5.41753 8.74975 4.82818 8.9799 4.13002L9.3599 3.00002H11.9199L12.2999 4.14002C12.53 4.83818 13.0085 5.42753 13.6445 5.79622C14.2805 6.1649 15.0297 6.28724 15.7499 6.14002L16.9299 5.90002L18.2099 8.12002L17.4099 9.02002C16.9235 9.56878 16.6549 10.2767 16.6549 11.01C16.6549 11.7433 16.9235 12.4513 17.4099 13ZM10.6399 7.00002C9.84877 7.00002 9.07541 7.23461 8.41761 7.67414C7.75982 8.11366 7.24713 8.73838 6.94438 9.46928C6.64163 10.2002 6.56241 11.0045 6.71675 11.7804C6.8711 12.5563 7.25206 13.269 7.81147 13.8284C8.37088 14.3879 9.08361 14.7688 9.85954 14.9232C10.6355 15.0775 11.4397 14.9983 12.1706 14.6955C12.9015 14.3928 13.5262 13.8801 13.9658 13.2223C14.4053 12.5645 14.6399 11.7911 14.6399 11C14.6399 9.93915 14.2185 8.92174 13.4683 8.17159C12.7182 7.42144 11.7008 7.00002 10.6399 7.00002ZM10.6399 13C10.2443 13 9.85765 12.8827 9.52876 12.663C9.19986 12.4432 8.94351 12.1308 8.79214 11.7654C8.64076 11.3999 8.60116 10.9978 8.67833 10.6098C8.7555 10.2219 8.94598 9.86551 9.22568 9.5858C9.50539 9.3061 9.86175 9.11562 10.2497 9.03845C10.6377 8.96128 11.0398 9.00088 11.4053 9.15226C11.7707 9.30363 12.0831 9.55998 12.3028 9.88888C12.5226 10.2178 12.6399 10.6045 12.6399 11C12.6399 11.5304 12.4292 12.0392 12.0541 12.4142C11.679 12.7893 11.1703 13 10.6399 13Z" />
      </svg>
    ),
    path: routes.settings,
  },
];

const Sidebar = ({ activeTab }: { activeTab: number }) => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={images.logo.default} alt="" />
      </div>
      <nav>
        <ul className="nav-list">
          {navList.map((navItem, index) => {
            return (
              <Link
                to={navItem.path}
                key={index}
                className={`nav-item ${index === activeTab && 'active'}`}
              >
                {navItem.icon}
                <span className="text-style-1">{navItem.title}</span>
              </Link>
            );
          })}
          <div className="nav-item nav-item-sub">
            <span className="text-style-1">Gói dịch vụ</span>
          </div>
        </ul>
      </nav>
      <div className="copyright">
        <span>Copyright</span>
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.33325 4.99998H7.66659C7.8434 4.99998 8.01297 5.07022 8.13799 5.19524C8.26302 5.32027 8.33325 5.48984 8.33325 5.66665C8.33325 5.84346 8.40349 6.01303 8.52852 6.13805C8.65354 6.26308 8.82311 6.33331 8.99992 6.33331C9.17673 6.33331 9.3463 6.26308 9.47133 6.13805C9.59635 6.01303 9.66659 5.84346 9.66659 5.66665C9.66659 5.13621 9.45587 4.62751 9.0808 4.25243C8.70573 3.87736 8.19702 3.66665 7.66659 3.66665H6.33325C5.80282 3.66665 5.29411 3.87736 4.91904 4.25243C4.54397 4.62751 4.33325 5.13621 4.33325 5.66665V8.33331C4.33325 8.86375 4.54397 9.37245 4.91904 9.74753C5.29411 10.1226 5.80282 10.3333 6.33325 10.3333H7.66659C8.19702 10.3333 8.70573 10.1226 9.0808 9.74753C9.45587 9.37245 9.66659 8.86375 9.66659 8.33331C9.66659 8.1565 9.59635 7.98693 9.47133 7.86191C9.3463 7.73688 9.17673 7.66665 8.99992 7.66665C8.82311 7.66665 8.65354 7.73688 8.52852 7.86191C8.40349 7.98693 8.33325 8.1565 8.33325 8.33331C8.33325 8.51012 8.26302 8.67969 8.13799 8.80472C8.01297 8.92974 7.8434 8.99998 7.66659 8.99998H6.33325C6.15644 8.99998 5.98687 8.92974 5.86185 8.80472C5.73683 8.67969 5.66659 8.51012 5.66659 8.33331V5.66665C5.66659 5.48984 5.73683 5.32027 5.86185 5.19524C5.98687 5.07022 6.15644 4.99998 6.33325 4.99998ZM6.99992 0.333313C5.68138 0.333313 4.39245 0.724306 3.29612 1.45685C2.19979 2.18939 1.34531 3.23058 0.840725 4.44876C0.336141 5.66693 0.204118 7.00738 0.461353 8.30058C0.718588 9.59379 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5385C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60745 13.6666 8.31852 13.6666 6.99998C13.6666 6.1245 13.4941 5.25759 13.1591 4.44876C12.8241 3.63992 12.333 2.90499 11.714 2.28593C11.0949 1.66688 10.36 1.17581 9.55114 0.840783C8.74231 0.505751 7.8754 0.333313 6.99992 0.333313ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8484 2.47623 10.0155 2.07256 9.04096C1.6689 8.06642 1.56328 6.99406 1.76907 5.9595C1.97485 4.92493 2.48281 3.97462 3.22869 3.22874C3.97457 2.48286 4.92487 1.97491 5.95944 1.76912C6.99401 1.56334 8.06636 1.66895 9.0409 2.07262C10.0154 2.47629 10.8484 3.15988 11.4344 4.03694C12.0205 4.914 12.3333 5.94515 12.3333 6.99998C12.3333 8.41447 11.7714 9.77102 10.7712 10.7712C9.77096 11.7714 8.41441 12.3333 6.99992 12.3333Z"
            fill="#1E0D03"
          />
        </svg>
        <span>2020 Alta Software</span>
      </div>
    </div>
  );
};

export default Sidebar;
