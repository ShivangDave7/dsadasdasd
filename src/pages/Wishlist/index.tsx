import React from "react";

import { Img, Text, Input, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import Footer1 from "components/Footer1";

const WishlistPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="bg-gradient  flex items-center justify-start pb-[80px] rounded-[5px] w-[100%]">
            <div className="flex flex-col gap-[40px] justify-start w-[100%]">
              <header className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:px-[20px] w-[100%]">
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
                    Wishlist
                  </Text>
                </div>
                <Text
                  className="font-bold font-mada mt-[37px] text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Wishlist
                </Text>
                <Text
                  className="font-normal font-poppins leading-[30.00px] mt-[26px] not-italic text-gray_100 text-left w-[100%]"
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
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[224px] mt-[78px] md:px-[20px] md:w-[100%] w-[56%]">
            <Text
              className="font-bold text-gray_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Product
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[386px] text-gray_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Price
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[95px] text-gray_900 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Stock Status
            </Text>
          </div>
          <List
            className="flex-col gap-[24px] grid items-center max-w-[1200px] mt-[40px] mx-[auto] md:px-[20px] w-[100%]"
            orientation="vertical"
          >
            <div className="bg-gray_100 flex flex-1 items-center justify-start p-[40px] sm:px-[20px] rounded-[50px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mb-[5px] w-[100%]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[24px] rounded-[50%] w-[24px]"
                  alt="trash"
                />
                <div className="flex h-[80px] items-center justify-start md:ml-[0] ml-[40px] w-[80px]">
                  <Img
                    src="images/img_unsplashacn5eraesb4.png"
                    className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                    alt="unsplashacn5ERAeSbFour"
                  />
                </div>
                <div className="flex md:flex-1 flex-col font-mada gap-[7px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
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
                <div className="flex md:flex-1 flex-col font-mada gap-[9px] items-center justify-start md:ml-[0] ml-[207px] md:w-[100%] w-[auto]">
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
                <div className="flex md:flex-1 flex-col font-mada gap-[9px] items-center justify-start md:ml-[0] ml-[127px] md:w-[100%] w-[auto]">
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
                <Button
                  className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[127px] text-[18px] text-center text-white_A700 w-[180px]"
                  shape="CircleBorder24"
                  size="md"
                  variant="OutlineBlack90019"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-1 items-center justify-start p-[40px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mb-[5px] w-[100%]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[24px] w-[24px]"
                  alt="trash One"
                />
                <div className="flex h-[80px] items-center justify-start md:ml-[0] ml-[40px] w-[80px]">
                  <Img
                    src="images/img_unsplashacn5eraesb4_80x80.png"
                    className="h-[80px] md:h-[auto] object-cover w-[80px]"
                    alt="unsplashacn5ERAeSbFour One"
                  />
                </div>
                <div className="flex md:flex-1 flex-col font-mada gap-[7px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
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
                <div className="flex md:flex-1 flex-col font-mada gap-[9px] items-center justify-start md:ml-[0] ml-[207px] md:w-[100%] w-[auto]">
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
                <div className="flex md:flex-1 flex-col font-mada gap-[9px] items-center justify-start md:ml-[0] ml-[127px] md:w-[100%] w-[auto]">
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
                <Button
                  className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[127px] text-[18px] text-center text-white_A700 w-[180px]"
                  size="md"
                  variant="OutlineBlack90019"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-1 items-center justify-start p-[40px] sm:px-[20px] rounded-[25px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mb-[5px] w-[100%]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[24px] rounded-[50%] w-[24px]"
                  alt="trash Two"
                />
                <div className="flex h-[80px] items-center justify-start md:ml-[0] ml-[40px] w-[80px]">
                  <Img
                    src="images/img_unsplashacn5eraesb4_1.png"
                    className="h-[80px] md:h-[auto] object-cover rounded-[25px] w-[80px]"
                    alt="unsplashacn5ERAeSbFour Two"
                  />
                </div>
                <div className="flex md:flex-1 flex-col font-mada gap-[7px] items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[auto]">
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
                <div className="flex md:flex-1 flex-col font-mada gap-[9px] items-center justify-start md:ml-[0] ml-[207px] md:w-[100%] w-[auto]">
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
                <div className="flex md:flex-1 flex-col font-mada gap-[9px] items-center justify-start md:ml-[0] ml-[127px] md:w-[100%] w-[auto]">
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
                <Button
                  className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[127px] text-[18px] text-center text-white_A700 w-[180px]"
                  shape="CircleBorder24"
                  size="md"
                  variant="OutlineBlack90019"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </List>
          <Footer1 className="flex items-center justify-center mt-[80px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
