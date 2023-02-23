import React from "react";

import { Img, Text, Button } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="bg-gray_800 flex items-center justify-center p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mb-[11px] md:w-[100%] w-[94%]">
            <div className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[36%]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[38%]">
                  <div className="flex flex-row gap-[9px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_clock.svg"
                      className="h-[33px] w-[auto]"
                      alt="clock One"
                    />
                    <Text
                      className="font-bold font-roboto text-center text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      mangcoding Store
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal font-poppins leading-[24.00px] not-italic text-gray_100 text-left w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  mollis, justo nec porttitor auctor, erat sapien faucibus
                  lectus, vel tempor dolor augue et lectus.{" "}
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold font-poppins leading-[normal] text-[18px] text-center text-indigo_A100 w-[180px]"
                size="md"
                variant="OutlineBlack90019_1"
              >
                Login Now
              </Button>
            </div>
            <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[127px] md:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-bold font-poppins text-left text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Home
                </Text>
              </li>
              <li className="mt-[23px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Product
                </a>
              </li>
              <li className="mt-[12px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Categories
                </a>
              </li>
              <li className="mt-[11px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Shop
                </a>
              </li>
              <li className="mt-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Log in
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[80px] md:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-bold font-poppins text-left text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Shop
                </Text>
              </li>
              <li className="mt-[21px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  T-Shirt
                </a>
              </li>
              <li className="mt-[11px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Jacket
                </a>
              </li>
              <li className="mt-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Shirt
                </a>
              </li>
              <li className="mt-[11px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Jens
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[80px] md:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-bold font-poppins text-left text-white_A700"
                  as="h5"
                  variant="h5"
                >
                  Categories
                </Text>
              </li>
              <li className="mt-[21px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Men
                </a>
              </li>
              <li className="mt-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Children
                </a>
              </li>
              <li className="mt-[11px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[14px] text-gray_100 text-left"
                  href="javascript:"
                >
                  Woman
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[80px] md:w-[100%] w-[16%]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold font-poppins text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Contact
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal font-poppins not-italic text-gray_100 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    mangcoding@gmail.com
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-between md:w-[100%] w-[98%]">
                <Button
                  className="common-pointer flex h-[32px] items-center justify-center w-[32px]"
                  onClick={handleNavigate}
                  size="mdIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_facebook.svg"
                    className=""
                    alt="facebook"
                  />
                </Button>
                <Button
                  className="common-pointer flex h-[32px] items-center justify-center w-[32px]"
                  onClick={handleNavigate1}
                  size="mdIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_twitter.svg"
                    className=""
                    alt="twitter"
                  />
                </Button>
                <Button
                  className="flex h-[32px] items-center justify-center w-[32px]"
                  size="mdIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_linkedin.svg"
                    className=""
                    alt="linkedin"
                  />
                </Button>
                <Button
                  className="flex h-[32px] items-center justify-center w-[32px]"
                  size="mdIcn"
                  variant="icbOutlineWhiteA700"
                >
                  <Img
                    src="images/img_instagram.svg"
                    className=""
                    alt="instagram"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
