/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import NotificationsIetm from "./NotificationsIetm";

const Notifications = () => {
  return (
    <div className="bg-white">
      <div
        className="grid grid-cols-3 pb-5 pt-10 sticky top-0 bg-white z-10">
        <Link to="/">
          <div className="text-3xl ml-10">
            <CgChevronLeft />
          </div>
        </Link>
        <div className="md:text-center text-3xl">Notifications</div>
        <div className="flex items-center justify-end mr-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.39999 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.50999C3.99999 22 3.23999 19.99 3.53999 17.53L4.44 10.03C4.66 8.09 4.99999 6.5 8.39999 6.5Z" stroke="#224A46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="#224A46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.41 17.03H8" stroke="#224A46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </div>
      <div>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
        <NotificationsIetm/>
      </div>
    </div>
  );
};

export default Notifications;
