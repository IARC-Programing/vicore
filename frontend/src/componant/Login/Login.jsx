import { useState } from "react";
import { Button } from "@material-ui/core";
import {
  Card,
  Input,
  Checkbox,
  // Button,
  Typography
} from "@material-tailwind/react";

function Login() {
  const [inputs, setInputs] = useState({});
  console.log("login page");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div className="container mx-auto mt-12 font-mono">
      <Card color="transparent" shadow={false}>
        <Typography className="font-bold" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal font-bold">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button variant="contained" color="primary" disableElevation>
            <span className="font-bold">register</span>
          </Button>
          <Typography color="gray" className="font-bold mt-4 text-center">
            Already have an account ? {" "}
            <span
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Login;
