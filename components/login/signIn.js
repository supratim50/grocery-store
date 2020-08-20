import Link from "next/link";
import { FiX } from "react-icons/fi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import SecondaryHeading from "../heading/secondaryHeading";
import Input from "../form/input";
import PrimaryBtn from "../buttons/primaryButton";
import SecondaryBtn from "../buttons/buttonSecondary";

const SignIn = ({ onBackPress, signIn }) => {
  return (
    <>
      <div className="background w-100 h-100" onClick={onBackPress}>
        <div className="cross-box p-1 d-inline-block d-flex justify-content-center align-items-center background-white rounded-circle">
          <i className="cross paragraph-text font-weight-bold">
            <FiX />
          </i>
        </div>
      </div>

      <div className="main-box rounded-lg background-white">
        <div className="sign-in-box pt-5 px-5">
          <SecondaryHeading
            text="Welcome Back"
            classList="font-weight-bold text-center color-primary mb-2"
          />
          <p className="paragraph-text color-grey text-center mb-4">
            Login with your email & password
          </p>
          <Input
            placeholder="demo@gmail.com"
            inputClass="background-grey py-3 px-3"
            classList="mb-2"
          />
          <Input
            placeholder="demo"
            inputClass="background-grey py-3 px-3"
            classList="mb-2"
          />
          <PrimaryBtn text="Continue" classList="p-3 mb-3" />
          <p className="paragraph-text color-grey text-center mb-3">or</p>
          <SecondaryBtn
            text="Facebook"
            icon={<FaFacebookF />}
            classList="py-3 background-facebook color-white mb-2"
          />
          <SecondaryBtn
            text="Google"
            icon={<FaGoogle />}
            classList="py-3 background-google color-white mb-4"
            onPress={signIn}
          />
          <p className="paragraph-text color-grey text-center">
            Don't have any account?
            <Link href="/">
              <a className="font-weight-bold color-primary text-capitalize ml-2">
                sign up
              </a>
            </Link>
          </p>
        </div>

        {/* forget password */}
        <div className="py-3 background-grey">
          <p className="paragraph-text color-grey text-center mb-0">
            Forgot your password ?
            <Link href="/">
              <a className="font-weight-bold color-primary text-capitalize ml-2">
                Reset It
              </a>
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          transition: 0.5s;
          z-index: 9999;
        }

        .main-box {
          width: 97%;
          max-width: 460px;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 0.5s;
          z-index: 9999;
        }

        .cross-box {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 15px;
          right: 25px;
          cursor: pointer;
        }

        @media screen and (max-height: 767px) {
          .cross-box {
            top: 20px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default SignIn;
