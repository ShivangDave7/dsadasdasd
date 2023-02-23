import React from "react";

import { Img, Text, Input, Button, TextArea } from "components";
import { CloseSVG } from "../../assets/images";
import Footer from "components/Footer";

const ContactPage: React.FC = () => {
  function handleNavigate2() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="sm:h-[547px] md:h-[576px] h-[656px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-gradient  flex inset-x-[0] items-center justify-start mx-[auto] pb-[199px] rounded-[5px] top-[0] w-[100%]">
            <div className="flex flex-col gap-[40px] justify-start w-[100%]">
              <header className="flex flex-col items-center justify-center shadow-bs2 w-[100%]">
                <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[15px] w-[100%]">
                  <div className="flex md:flex-1 font-roboto items-center justify-start md:w-[100%] w-[12%]">
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
                  <div className="flex md:flex-1 flex-col font-mada gap-[8px] justify-start md:ml-[0] ml-[271px] md:w-[100%] w-[24%]">
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
                  <div className="font-poppins md:h-[24px] h-[26px] md:ml-[0] ml-[40px] relative md:w-[100%] w-[2%]">
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
                    className="h-[24px] md:ml-[0] ml-[20px] w-[24px]"
                    alt="favorite"
                  />
                  <Img
                    src="images/img_user.svg"
                    className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                    alt="user"
                  />
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="flex-1 font-mada font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                    wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[24px] mr-[104px] mt-[2px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[18%]"
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
                </div>
              </header>
              <div className="flex flex-col gap-[39px] items-start justify-start md:ml-[0] ml-[120px] md:w-[100%] w-[36%]">
                <div className="flex flex-row gap-[24px] h-[22px] md:h-[auto] items-center justify-center py-[9px] w-[auto]">
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
                    Contact
                  </Text>
                </div>
                <div className="flex flex-col font-poorstory gap-[26px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Contact
                  </Text>
                  <Text
                    className="leading-[30.00px] not-italic text-gray_100 text-left w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                    finibus ullamcorper.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex md:flex-col flex-row font-mada gap-[40px] inset-x-[0] items-center justify-center mx-[auto] w-[71%]">
            <div className="bg-white_A700 flex items-center justify-start p-[38px] sm:px-[20px] shadow-bs1 md:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[9px] items-start justify-start my-[2px] w-[100%]">
                <div className="flex flex-col font-mada gap-[15px] items-start justify-start md:w-[100%] w-[23%]">
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_location.svg"
                      className="h-[32px]"
                      alt="location"
                    />
                  </Button>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Location
                  </Text>
                </div>
                <Text
                  className="font-normal font-poppins leading-[30.00px] not-italic text-gray_500 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  eget gravida leo, nec iaculis diam.{" "}
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex h-[268px] items-start justify-center p-[39px] sm:px-[20px] md:w-[100%] w-[49%]"
              style={{ backgroundImage: "url('images/img_group1912.svg')" }}
            >
              <div className="flex flex-col gap-[11px] items-start justify-start my-[13px] md:w-[100%] w-[47%]">
                <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[44%]">
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_call.svg"
                      className="h-[32px]"
                      alt="call"
                    />
                  </Button>
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Contact
                  </Text>
                </div>
                <div className="flex flex-col font-poppins gap-[8px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    T-shirt12@gmail.com
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    (021) 12345678
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-mada items-center justify-start max-w-[996px] mt-[82px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[37px] items-center justify-start w-[100%]">
            <Text
              className="font-bold text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Send a Message
            </Text>
            <div className="flex flex-col font-poppins items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                <Input
                  className="flex-1 font-normal not-italic p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="sm:w-[100%] w-[auto]"
                  type="text"
                  name="Group493"
                  placeholder="Firs Name"
                  size="sm"
                  variant="OutlineGray500"
                ></Input>
                <Input
                  className="flex-1 font-normal not-italic p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="sm:w-[100%] w-[auto]"
                  type="text"
                  name="Group492"
                  placeholder="Last Name"
                  size="lg"
                  variant="OutlineGray500"
                ></Input>
              </div>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="mt-[24px] w-[100%]"
                type="email"
                name="Group491"
                placeholder="Your Email"
                size="sm"
                variant="OutlineGray500"
              ></Input>
              <TextArea
                className="font-normal mt-[24px] not-italic text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                name="Group490"
                placeholder="Description"
              ></TextArea>
              <Button
                className="cursor-pointer font-bold leading-[normal] mt-[40px] text-[18px] text-center text-white_A700 w-[180px]"
                size="md"
                variant="OutlineBlack9000c"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex font-poppins items-center justify-center mt-[91px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ContactPage;
