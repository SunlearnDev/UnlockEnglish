import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import axios from "axios";


function Register() {

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="mt-16 w-full lg:w-3/5 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <h3
              className= "text-center  text-white text-2xl">
              Register
            </h3>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Full Name" size="lg" type="text" className="mb-4" />
          
            <Input label="Email" size="lg" type="email" className="mb-4" />
            <Input
              label="Password"
              size="lg"
              type="password"/>
            <Typography
              variant="small"
              color="gray"
              className="mt-1 flex items-center gap-1 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
            <Input
              label="Confirm Password"
              size="lg"
              type="password"
              className="mb-4"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                Login
              </Typography>
            </Typography>
           
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Register;
