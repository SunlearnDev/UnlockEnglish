import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function VerifyEmail() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="mt-16 w-full lg:w-3/5 flex items-center justify-center">
            <Card className="w-96">
                <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
                >
                <h3 className="text-center text-white text-2xl">Verify Email</h3>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                <Typography color="gray" className="text-center">
                    Please verify your email address to continue
                </Typography>
                </CardBody>
                <CardFooter className="flex flex-col gap-4">
                <Button
                    color="lightBlue"
                    buttonType="filled"
                    size="lg"
                    block={true}
                    ripple="light">
                    Verify
                </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </>
  );
}
