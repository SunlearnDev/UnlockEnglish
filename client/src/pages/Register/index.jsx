// src/pages/Register.jsx
import React, { useState } from "react";
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
// import Input from "@/components/Input";
import validateRegisterForm from "@/utils/validator";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const validationErrors = validateRegisterForm({ fullname, email, password, confirmPassword });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3520/api/register`, {
        fullname,
        email,
        password,
      });
      if(res){
        return window.location.href = '/login';
      }
      console.log(res.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error response
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="mt-16 w-full lg:w-3/5 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <h3 className="text-center text-white text-2xl">Register</h3>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Full Name"
                size="lg"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                error={errors.fullname}
              />
              {errors.fullname && (
                    <Typography color="red">{errors.fullname}</Typography>
                )}
              <Input
                label="Email"
                size="lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              {errors.email && (
                    <Typography color="red">{errors.email}</Typography>
                )}
              <Input
                label="Password"
                size="lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
              {errors.password && (
                    <Typography color="red">{errors.password}</Typography>
                )}
              <Input
                label="Confirm Password"
                size="lg"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errors.confirmPassword}
              />
              {errors.confirmPassword && (
                    <Typography color="red">{errors.confirmPassword}</Typography>
                )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Register
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Typography
                  as="a"
                  href="/login"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold">
                  Login
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
