import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import validateRegisterForm from "@/utils/validator";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setcode] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    fullname: false,
    email: false,
    password: false,
  });
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const validationErrors = validateRegisterForm({
      fullname,
      email,
      password,
    });
    setErrors(validationErrors);
  }, [fullname, email, password]);

  const handleBlur = (field) => () => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          fullname,
          email,
          password,
          code: code,
        }
      );
      if (res.data.message) {
        setErrors({ email: res.data.message, code: res.data.message});
      }
    } catch (error) {
      if (error.response) {
        setErrors({ email: error.response.data.message,code: error.response.data.message});
      }
    }
  };

  const startCountdown = (duration) => {
    setTimer(duration);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      const sendCode = axios.post(
        `${import.meta.env.VITE_API_URL}/api/send-code`,
        {
          email,
        }
      );
      if (sendCode) {
        startCountdown(90);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isFormFilled = fullname && email && password;
  const isFormValid = Object.keys(errors).length === 0;
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="mt-16 w-full lg:w-3/5 flex items-center justify-center">
        <Card className="w-96">
          <form onSubmit={handleRegister}>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Tên của bạn"
                size="lg"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                onBlur={handleBlur("fullname")}
                error={touched.fullname && errors.fullname}
              />
              {touched.fullname && errors.fullname && (
                <Typography color="red">{errors.fullname}</Typography>
              )}
              <Input
                label="Email"
                size="lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <Typography color="red">{errors.email}</Typography>
              )}
              <Input
                label="Mật khẩu"
                size="lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur("password")}
                error={touched.password && errors.password}
              />
              {touched.password && errors.password && (
                <Typography color="red">{errors.password}</Typography>
              )}
              {isFormValid && (
                <div className="relative flex w-full max-w-[24rem]">
                  <Input
                    type="text"
                    label="Nhập mã xác nhận"
                    value={code}
                    onChange={(e) => setcode(e.target.value)}
                    className="pr-20"
                    disabled={!isFormFilled}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    color={isFormFilled && timer === 0 ? "blue-gray" : "gray"}
                    disabled={!isFormFilled || timer > 0}
                    className="!absolute right-1 top-1 rounded"
                    onClick={handleSendCode}
                  >
                    {timer > 0 ? formatTime(timer) : "Gửi mã"}
                  </Button>
                </div>
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                disabled={!isFormValid}
                type="submit"
                variant="gradient"
                fullWidth
              >
                Đăng ký
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Bạn đã có tài khoản?
                <Typography
                  as="a"
                  href="/login"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Đăng nhập
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
