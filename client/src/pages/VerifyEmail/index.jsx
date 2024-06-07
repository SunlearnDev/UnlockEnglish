import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
  Input,
  Collapse
} from "@material-tailwind/react";
import validateCode from "@/utils/coreEmail";
import axiosInstance from "@/configs/axios.config";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const [sendto, setSendto] = useState("");
  const [errors, setErrors] = useState({});
  const handleVerify = async (event) => {
    event.preventDefault();
    const validationErrors = validateCode({ code });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axiosInstance.post(`/api/verify-email`, {
        code,
      });
      if (response) {
        return (window.location.href = "/login");
      }
      console.log(response.data); // Handle success response
    } catch (error) {
      console.log(error); // Handle error response
    }
  };
  const sendToCode = async (e) => {
    e.preventDefault();

  };
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);

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
            <form onSubmit={handleVerify}>
              <CardBody className="flex flex-col gap-4">
                <Typography color="gray" className="text-center">
                  A verification code has been sent to your registered email
                  address. Please enter the code below to continue.
                </Typography>
                <Input
                  label="Code..."
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  error={errors.code}
                />
                {errors.code && (
                  <Typography color="red">{errors.code}</Typography>
                )}
                <form onSubmit={sendToCode}>
                  <div className="flex  gap-4 items-center">
                  <Button type="submit" onClick={toggleOpen} className="text-xs w-1/2">Send To</Button>
                  <Collapse open={open} className="">
                        <Typography className="text-start text-red-300 ">
                          
                        </Typography>
                  </Collapse>
                  </div>
                </form>
              </CardBody>
              <CardFooter className="flex flex-col gap-4 pt-0">
                <Button
                  type="submit"
                  color="lightBlue"
                  buttonType="filled"
                  size="lg"
                  block={true}
                  ripple="light"
                >
                  Verify
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
