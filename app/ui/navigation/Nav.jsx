import React from "react";
import { information } from "@/app/information";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { navigationdata } from "./navdata";

const Nav = () => {
  return (
    <div className=" pl-16 py-18 h-full bg-background flex flex-col justify-between">
      <div className="h-2/12 ">
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={information.image} alt="" />
          </div>
          <div>
            <h5 className=" uppercase flex items-center gap-2">
              {information.name} <BiSolidBadgeCheck className="text-main" />
            </h5>
            <span className="block text-sm text-text-secont">
              {information.work.title}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-8/12">
        {navigationdata.map((nav, i) => {
          return (
            <div key={i} className=" flex items-center gap-4 py-1">
              <img className="w-4 h-4" src={nav.icon} alt={nav.Name} />
              <span className="font-medium">{nav.Name}</span>
            </div>
          );
        })}
      </div>
      <div className="h-2/12 flex flex-col justify-end">
        <span className="text-sm">
          Copyryting cleem 2020 All right resurve!
        </span>
      </div>
    </div>
  );
};

export default Nav;
