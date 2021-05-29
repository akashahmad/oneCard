import WhiteLogo from "../../assets/images/Logo_White.png";
import BlackLogo from "../../assets/images/Logo.png";
import GoogleIcon from "../../assets/images/google_icon.png";
import SecurityIcon from "../../assets/images/Group-27205.png";
import { Form, Input } from "antd";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  let { history } = props;
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="signup_container px-2 py-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center ">
          <div className="w-full lg:w-9/12 xl:w-9/12 flex bg-white rounded-md">
            {/* left side image */}
            <div className="hidden lg:block xl:block w-6/12">
              <div className="loginLeftImg">
                {/* content container */}
                <div className="flex justify-center items-center flex-col h-full">
                  <div className="w-10/12 text-white  text-center flex justify-center items-center flex-col">
                    <h3 className="py-2 text-3xl text-white">
                      Create Account On
                    </h3>
                    <img src={WhiteLogo} alt="" />
                    <p className="py-2 text-2xl text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right side form */}
            <div className="w-full lg:w-6/12 xl:w-6/12 flex flex-col items-center">
              {/* logo */}
              <div className="py-3">
                <img src={BlackLogo} alt="" />
              </div>
              {/* title */}
              <div className="py-3">
                <h3 className="text-3xl primary_clr font-medium">
                  Create account
                </h3>
              </div>
              {/* form */}
              <Form
                className="w-8/12 py-5"
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                {/* google button */}
                <div className="w-full py-2">
                  <button className=" border border-gray-200 py-3 flex justify-center w-full text-1xl hover:bg-gray-300 text-gray-400 items-center outline-none">
                    <img src={GoogleIcon} alt="" />
                    <span className="px-3">Sign Up with Google</span>
                  </button>
                </div>
                <div className="w-full text-center py-2">
                  <h4 className="text-base font-bold">Or</h4>
                </div>
                {/* email */}
                <Form.Item
                  className="authetication_input_container w-full"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: false,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input className="w-full" placeholder="johndoe@gmail.com" />
                </Form.Item>
                {/* password */}
                <Form.Item
                  className="authetication_input_container w-full"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: false,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input className="w-full" placeholder="Password" />
                </Form.Item>
                {/* Sign up button */}
                <div className="w-full py-4">
                  <button
                    className="primary_bg_dark_clr py-3 flex justify-center w-full text-lg text-white items-center"
                    onClick={() => {
                      history.push("/dashboard");
                    }}
                  >
                    <span className="px-3">Log In</span>
                  </button>
                </div>
                {/* already have an account text */}
                <p
                  className="text-base  text-center py-2"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Dont have account?{" "}
                  <span className="font-medium primary_clr">SIGN UP</span>
                </p>
                {/* info and icon */}
                <div className="flex justify-center security_icon_container py-4">
                  <img src={SecurityIcon} alt="" />
                  <p className="text-base px-2  text-center py-2 font-medium primary_clr">
                    This Site is Secured
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);
