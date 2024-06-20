import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import LeftSidebar from "../LeftSidebar";
import HeaderSidebar from "../HeaderSidebar";
function Home() {
  return (
    <div className="container mx-auto">
      <div className="gird grid-rows-12">
        <div className="row-span-1">
          <HeaderSidebar />
        </div>
        <div className="row-span-10">
          {/* <div className="grid grid-cols-12 gap-2 mx-4 h-screen">
            <div className="col-span-2 h-screen">
              <LeftSidebar />
            </div>
            <div className="col-span-10">
              <Card>
                <CardBody>
                  <Typography>This is the home page.</Typography>
                </CardBody>
              </Card>
            </div>
          </div> */}
        </div>
        <div className="row-span-1">
          {/* <HeaderSidebar /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
