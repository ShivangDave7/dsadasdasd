import React from "react";

import { Img, Text, Input, List, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";
import Footer from "components/Footer";

const CheckoutPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-mada items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-gradient  flex items-center justify-start pb-[80px] rounded-[5px] w-[100%]">
            <div className="flex flex-col gap-[40px] justify-start w-[100%]">
              <header className="flex flex-col items-center justify-center md:px-[20px] shadow-bs2 w-[100%]">
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
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] md:px-[20px] md:w-[100%] w-[36%]">
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
                    Cart
                  </Text>
                </div>
                <Text
                  className="font-bold font-mada mt-[38px] text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Cart
                </Text>
                <Text
                  className="font-normal font-poppins leading-[30.00px] mt-[25px] not-italic text-gray_100 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                  finibus ullamcorper.
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[78px] text-gray_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Cart Product
          </Text>
          <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start max-w-[1200px] mt-[41px] mx-[auto] md:px-[20px] w-[100%]">
            <List
              className="md:flex-1 flex-col gap-[24px] grid md:w-[100%] w-[66%]"
              orientation="vertical"
            >
              <div className="bg-gray_100 md:h-[165px] h-[245px] my-[0] p-[38px] sm:px-[20px] relative w-[100%]">
                <div className="absolute bottom-[16%] flex flex-row gap-[16px] items-start justify-center left-[16%] w-[20%]">
                  <Text
                    className="font-bold text-indigo_A200 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    product notes
                  </Text>
                  <Img
                    src="images/img_arrowdown_indigo_a200.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[90%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[37px] items-end justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex h-[80px] items-center justify-start w-[80px]">
                          <Img
                            src="images/img_unsplashacn5eraesb4_80x80.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="unsplashacn5ERAeSbFour"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Smart T-Shirt
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Color : White
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[102px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $ 40 USD
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[80px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1305
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            In Stock
                          </Text>
                        </div>
                        <Img
                          src="images/img_trash.svg"
                          className="h-[24px] md:ml-[0] ml-[80px] w-[24px]"
                          alt="trash"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-row gap-[30px] items-center justify-end ml-[auto] p-[11px] md:w-[100%] w-[21%]">
                        <Img
                          src="images/img_menu.svg"
                          className="h-[24px] w-[24px]"
                          alt="menu"
                        />
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          2
                        </Text>
                        <Img
                          src="images/img_plus_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_100 flex items-center justify-end my-[0] p-[38px] sm:px-[20px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[37px] items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex h-[80px] items-center justify-start w-[80px]">
                          <Img
                            src="images/img_unsplashacn5eraesb4_80x80.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="unsplashacn5ERAeSbFour One"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Smart T-Shirt
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Color : White
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[102px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $ 40 USD
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[80px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1305
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            In Stock
                          </Text>
                        </div>
                        <Img
                          src="images/img_trash.svg"
                          className="h-[24px] md:ml-[0] ml-[80px] w-[24px]"
                          alt="trash One"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold md:mt-[0] mt-[25px] text-indigo_A200 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          product notes
                        </Text>
                        <Img
                          src="images/img_arrowdown_indigo_a200_24x24.svg"
                          className="h-[24px] md:ml-[0] ml-[16px] md:mt-[0] mt-[24px] w-[24px]"
                          alt="arrowdown One"
                        />
                        <div className="bg-white_A700 flex md:flex-1 flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[408px] p-[11px] md:w-[100%] w-[21%]">
                          <Img
                            src="images/img_menu_gray_300.svg"
                            className="h-[24px] w-[24px]"
                            alt="menu One"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1
                          </Text>
                          <Img
                            src="images/img_plus_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="plus One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-gray_100 flex md:flex-1 items-center justify-start mb-[72px] p-[23px] sm:px-[20px] md:w-[100%] w-[32%]">
              <div className="flex flex-col items-start justify-start mb-[17px] mt-[2px] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-bold font-mada text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Coupon Code
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="flex h-[48px] mt-[6px] w-[100%]"
                    name="Rectangle115"
                    placeholder=""
                    variant="FillWhiteA700"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold font-poppins leading-[normal] md:ml-[0] ml-[150px] mt-[16px] text-[18px] text-center text-white_A700 w-[180px]"
                    size="md"
                    variant="OutlineBlack90019"
                  >
                    Check
                  </Button>
                </div>
                <div className="flex flex-row font-mada items-center justify-between mt-[34px] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Subtotal
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $ 160 USD
                  </Text>
                </div>
                <Text
                  className="font-mada font-normal mt-[6px] not-italic text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  4 Product
                </Text>
                <Line className="bg-gray_300 h-[2px] mt-[24px] w-[100%]" />
                <div className="flex flex-row font-mada items-center justify-between mt-[20px] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    $ 160 USD
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold font-poppins leading-[normal] md:ml-[0] ml-[151px] mt-[23px] text-[18px] text-center text-white_A700 w-[180px]"
                  size="md"
                  variant="OutlineBlack90019"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray_100 flex items-center justify-end mt-[24px] p-[38px] md:px-[20px] md:w-[100%] w-[55%]">
            <div className="md:h-[165px] h-[166px] relative w-[100%]">
              <div className="absolute bottom-[0] flex flex-row gap-[16px] items-start justify-between left-[0] w-[22%]">
                <Text
                  className="font-bold text-indigo_A200 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  product notes
                </Text>
                <Img
                  src="images/img_arrowdown_indigo_a200_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowdown Two"
                />
              </div>
              <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[37px] items-end justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex h-[80px] items-center justify-start w-[80px]">
                      <Img
                        src="images/img_unsplashacn5eraesb4_80x80.png"
                        className="h-[80px] md:h-[auto] object-cover w-[80px]"
                        alt="unsplashacn5ERAeSbFour Two"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Smart T-Shirt
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Color : White
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[102px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        $ 40 USD
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Price
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[80px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        1305
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        In Stock
                      </Text>
                    </div>
                    <Img
                      src="images/img_trash.svg"
                      className="h-[24px] md:ml-[0] ml-[80px] w-[24px]"
                      alt="trash Two"
                    />
                  </div>
                  <div className="bg-white_A700 flex flex-row gap-[30px] items-center justify-end ml-[auto] p-[11px] md:w-[100%] w-[21%]">
                    <Img
                      src="images/img_menu_gray_300.svg"
                      className="h-[24px] w-[24px]"
                      alt="menu Two"
                    />
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                    <Img
                      src="images/img_plus_gray_900.svg"
                      className="h-[24px] w-[24px]"
                      alt="plus Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex font-poppins items-center justify-center mt-[80px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
