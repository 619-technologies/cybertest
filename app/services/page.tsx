"use client";
import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/TestContext";

function page() {
  const { count } = useContext(MainContext);
  return <div>{count}</div>;
}

export default page;
