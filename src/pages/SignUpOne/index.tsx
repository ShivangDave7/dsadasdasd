import React from "react";

import { Img, Text, Input, CheckBox } from "components";
import { CloseSVG } from "../../assets/images";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const SignUpOnePage: React.FC = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1448px] mx-[auto] pb-[201px] relative w-[100%]">
        <div className="absolute h-[1059px] inset-x-[0] mx-[auto] md:px-[20px] top-[0] w-[100%]">
          <Img
            src="images/img_unsplashtvg4wvjgsey.png"
            className="h-[1059px] m-[auto] object-cover w-[100%]"
            alt="unsplashtvG4WvjgsEY"
          />
          <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[80px] w-[100%]">
            <div className="flex flex-col gap-[40px] justify-start w-[100%]">
              <header className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
                <div className="flex md:flex-1 font-roboto items-center justify-start md:ml-[0] ml-[121px] md:mt-[0] my-[23px] md:w-[100%] w-[12%]">
                  <div className="flex flex-row gap-[9px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_clock.svg"
                      className="h-[33px] w-[auto]"
                      alt="clock"
                    />
                    <Text
                      className="font-bold text-center text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      mangcoding Store
                    </Text>
                  </div>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-mada font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[10px] my-[16px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[18%]"
                  name="FrameNine"
                  placeholder="Search"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] mr-[0] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#dddddd"
                      />
                    ) : (
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[35px] mr-[0] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder10"
                  size="smSrc"
                  variant="srcOutlineGray500"
                ></Input>
                <div className="flex md:flex-1 flex-col font-mada gap-[8px] justify-start mb-[18px] md:ml-[0] ml-[11px] md:mt-[0] mt-[30px] md:w-[100%] w-[24%]">
                  <ul className="flex flex-row gap-[40px] h-[20px] md:h-[auto] sm:hidden items-center justify-center py-[9px] w-[auto] common-row-list">
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer hover:font-bold font-bold text-[18px] text-indigo_A200 text-left"
                        href="javascript:"
                      >
                        Home
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_900 hover:text-indigo_A200 text-left"
                        href="javascript:"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_900 hover:text-indigo_A200 text-left"
                        href="javascript:"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_900 hover:text-indigo_A200 text-left"
                        href="javascript:"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="bg-indigo_A200 h-[4px] md:ml-[0] ml-[23px] mr-[308px] rounded-[50%] w-[4px]"></div>
                </div>
                <div className="font-poppins h-[26px] md:h-[52px] mb-[28px] md:ml-[0] ml-[40px] md:mt-[0] mt-[25px] relative md:w-[100%] w-[2%]">
                  <div className="absolute bottom-[0] md:h-[24px] h-[25px] inset-x-[0] mx-[auto] w-[100%]">
                    <Img
                      src="images/img_bag.svg"
                      className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
                      alt="bag"
                    />
                    <div className="absolute bg-red_A100 h-[16px] right-[0] rounded-[50%] top-[0] w-[16px]"></div>
                  </div>
                  <Text
                    className="absolute not-italic right-[18%] text-left text-white_A700 top-[0] w-[auto]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <Img
                  src="images/img_favorite.svg"
                  className="h-[24px] md:ml-[0] ml-[20px] md:mt-[0] my-[28px] w-[24px]"
                  alt="favorite"
                />
                <Img
                  src="images/img_user.svg"
                  className="h-[24px] md:ml-[0] ml-[24px] mr-[393px] md:mt-[0] my-[28px] w-[24px]"
                  alt="user"
                />
              </header>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] md:w-[100%] w-[41%]">
                <div className="flex flex-row font-poppins gap-[24px] h-[22px] md:h-[auto] items-center justify-center py-[9px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Home
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    /
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    My Account
                  </Text>
                </div>
                <Text
                  className="font-bold font-mada mt-[26px] text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  My Account
                </Text>
                <Text
                  className="font-mada mt-[43px] text-left text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Sign Up
                </Text>
                <Text
                  className="font-normal font-poppins mt-[23px] not-italic text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-white_A700 text-[14px]">
                    You have accout ?
                  </span>
                  <span className="text-black_900 text-[14px]"> </span>
                  <span className="text-white_A700 text-[14px] font-bold">
                    Login
                  </span>
                </Text>
                <div className="flex sm:flex-col flex-row font-poppins gap-[24px] items-center justify-start mt-[23px] md:w-[100%] w-[66%]">
                  <Input
                    className="common-pointer font-normal not-italic p-[0] text-[18px] placeholder:text-gray_900 text-gray_900 text-left w-[100%]"
                    wrapClassName="flex sm:w-[100%] w-[47%]"
                    onClick={() => navigate("/loginone")}
                    name="Group1915"
                    placeholder="Google"
                    prefix={
                      <Img
                        src="images/img_google.svg"
                        className="ml-[0] mr-[24px] my-[auto]"
                        alt="google"
                      />
                    }
                    size="lg"
                    variant="FillWhiteA700"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_900 text-gray_900 text-left w-[100%]"
                    wrapClassName="sm:w-[100%] w-[47%]"
                    name="Group1916"
                    placeholder="Facebook"
                    size="sm"
                    variant="FillWhiteA700"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row font-poppins gap-[24px] items-center justify-between mt-[40px] w-[100%]">
                  <div className="flex sm:flex-1 flex-col gap-[10px] items-start justify-start sm:w-[100%] w-[48%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      First Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[18px] text-left placeholder:text-red_600 text-red_600 w-[100%]"
                      wrapClassName="w-[100%]"
                      type="text"
                      name="Group1940"
                      placeholder="First Name"
                      size="sm"
                      variant="FillWhiteA700"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[48%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Last Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[18px] text-left placeholder:text-red_400 text-red_400 w-[100%]"
                      wrapClassName="w-[100%]"
                      type="text"
                      name="Group2009"
                      placeholder="Last Name"
                      size="lg"
                      variant="FillWhiteA700"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col font-poppins gap-[10px] items-start justify-start mt-[16px] w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] text-left placeholder:text-red_300 text-red_300 w-[100%]"
                    wrapClassName="w-[100%]"
                    type="email"
                    name="Group503"
                    placeholder="Email"
                    size="sm"
                    variant="FillWhiteA700"
                  ></Input>
                </div>
                <div className="flex flex-col font-poppins items-start justify-start mt-[16px] w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[18px] text-left placeholder:text-red_400_01 text-red_400_01 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      type="password"
                      name="Group505"
                      placeholder="Password"
                      suffix={
                        <Img
                          src="images/img_eye.svg"
                          className="ml-[35px] mr-[0] my-[auto]"
                          alt="eye"
                        />
                      }
                      size="md"
                      variant="FillWhiteA700"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[18px] w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Entry Keyword Again
                    </Text>
                    <div className="bg-white_A700 md:h-[27px] h-[48px] p-[4px] relative w-[100%]">
                      <Input
                        className="absolute bottom-[8%] font-normal inset-x-[0] mx-[auto] not-italic text-[18px] text-left placeholder:text-red_400_02 text-red_400_02 w-[100%]"
                        wrapClassName="absolute bottom-[17%] mb-[4px] sm:w-[100%] w-[94%]"
                        name="Group545"
                        placeholder="Enter keyword again"
                      ></Input>
                      <Img
                        src="images/img_eye.svg"
                        className="absolute bottom-[8%] h-[24px] right-[4%] w-[24px]"
                        alt="eye One"
                      />
                    </div>
                  </div>
                  <CheckBox
                    className="font-bold leading-[normal] mt-[24px] text-[14px] text-gray_100 text-left"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    label="Remember Me"
                    name="RememberMe"
                  ></CheckBox>
                </div>
                <div className="bg-white_A700 flex font-poppins h-[48px] md:h-[auto] items-center justify-center md:ml-[0] ml-[408px] mt-[24px] sm:px-[20px] px-[34px] py-[10px] shadow-bs w-[180px]">
                  <Text
                    className="bg-clip-text bg-gradient  font-bold text-left text-transparent w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Sign Up
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="absolute bottom-[14%] flex inset-x-[0] items-center justify-center mx-[auto] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default SignUpOnePage;
