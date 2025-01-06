import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";

// const deviceinfo = useAppSelector((state) => state?.authData?.deviceData);
// console.log("devicedaaaaa", deviceinfo);

const session = {
  site: 6,
  device: "",
  ip: "10.20.1.86",
  browser: "insomnia",
};

export default session;
