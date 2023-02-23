import React from "react";

import {
  Slider,
  Img,
  Text,
  Input,
  Button,
  Line,
  List,
  RatingBar,
} from "components";
import { CloseSVG } from "../../assets/images";
import Footer from "components/Footer";

const ShopPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");
  const [inputvalue1, setInputvalue1] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue2, setInputvalue2] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-mada items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-end w-[100%]">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 2 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[0.06]"
            magnifiedIndex={1}
            centerMode
            ref={sliderRef}
            className="w-[100%]"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-gradient  flex items-center justify-start mx-[10px] rounded-[5px]">
                  <div className="flex flex-col gap-[23px] justify-start w-[100%]">
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
                          <ul className="flex flex-row gap-[40px] h-[20px] md:h-[auto] sm:hidden items-center justify-center w-[auto] common-row-list">
                            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                              <a
                                className="cursor-pointer hover:font-bold font-bold text-[18px] text-indigo_A200 text-left w-[auto]"
                                href="javascript:"
                              >
                                Home
                              </a>
                            </li>
                            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                              <a
                                className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_900 hover:text-indigo_A200 text-left w-[auto]"
                                href="javascript:"
                              >
                                Shop
                              </a>
                            </li>
                            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                              <a
                                className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_900 hover:text-indigo_A200 text-left w-[auto]"
                                href="javascript:"
                              >
                                About Us
                              </a>
                            </li>
                            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                              <a
                                className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_900 hover:text-indigo_A200 text-left w-[auto]"
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
                          value={inputvalue2}
                          onChange={(e) => setInputvalue2(e?.target?.value)}
                          className="flex-1 font-mada font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                          wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[24px] mr-[104px] mt-[2px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[18%]"
                          name="FrameNine"
                          placeholder="Search"
                          suffix={
                            inputvalue2?.length > 0 ? (
                              <CloseSVG
                                className="cursor-pointer ml-[35px] mr-[0] my-[auto]"
                                onClick={() => setInputvalue2("")}
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
                    <div className="flex items-center justify-start md:ml-[0] ml-[440px] md:px-[20px] md:w-[100%] w-[33%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                        <Button
                          className="flex h-[24px] items-center justify-center sm:mt-[0] mt-[28px] w-[24px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_arrowleft_indigo_a200.svg"
                            className="h-[18px]"
                            alt="arrowleft"
                          />
                        </Button>
                        <div className="flex sm:flex-1 flex-col gap-[14px] items-center justify-start sm:ml-[0] ml-[120px] sm:w-[100%] w-[17%]">
                          <Img
                            src="images/img_unsplashjddw6ia31se.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                            alt="unsplashjddw6iA31sE"
                          />
                          <Text
                            className="font-bold text-center text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Jacket
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[14px] items-center justify-start sm:ml-[0] ml-[24px] sm:w-[100%] w-[17%]">
                          <Img
                            src="images/img_unsplashpfanxhwe4o.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                            alt="unsplashPFanxhwe4o"
                          />
                          <Text
                            className="font-bold text-center text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Shirt
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[15px] items-center justify-start sm:ml-[0] ml-[24px] sm:w-[100%] w-[17%]">
                          <Img
                            src="images/img_unsplashdmd8hvojy4c.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                            alt="unsplashDmD8HVOjy4c"
                          />
                          <Text
                            className="font-bold text-center text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Jeans
                          </Text>
                        </div>
                        <Button
                          className="flex h-[24px] items-center justify-center sm:ml-[0] ml-[16px] sm:mt-[0] mt-[28px] w-[24px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_arrowright_indigo_a200_24x24.svg"
                            className="h-[18px]"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
          <div className="flex md:flex-col flex-row gap-[43px] items-start justify-start max-w-[1200px] mt-[69px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[8px] md:w-[100%] w-[24%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                T - Shirt
              </Text>
              <div className="flex flex-row font-poppins gap-[16px] items-end justify-start mt-[25px] md:w-[100%] w-[35%]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_settings.svg"
                  className="h-[24px] mb-[4px] mt-[7px] w-[24px]"
                  alt="settings"
                />
              </div>
              <div className="flex font-poppins items-center justify-start mt-[43px] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Categories
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[18px] mt-[2px] w-[18px]"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[13px] md:w-[100%] w-[99%]">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[60px] text-[18px] text-center text-white_A700 w-[auto]"
                      size="sm"
                      variant="FillIndigoA200"
                    >
                      Men
                    </Button>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[92px] not-italic text-[18px] text-center text-gray_900 w-[auto]"
                      size="sm"
                      variant="OutlineGray300"
                    >
                      Woman
                    </Button>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[96px] not-italic text-[18px] text-center text-gray_900 w-[auto]"
                      size="sm"
                      variant="OutlineGray300"
                    >
                      Children
                    </Button>
                  </div>
                  <Line className="bg-gray_300 h-[1px] mt-[24px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col font-poppins gap-[24px] items-center justify-start mt-[23px] w-[100%]">
                <div className="h-[96px] relative w-[100%]">
                  <div className="absolute flex flex-col gap-[42px] h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Price
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-gray_900 text-[18px] font-poppins font-bold">
                          ${" "}
                        </span>
                        <span className="text-gray_900 text-[18px] font-poppins font-extrabold">
                          40
                        </span>
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $ 500
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="absolute h-[18px] right-[0] top-[5%] w-[18px]"
                    alt="arrowdown One"
                  />
                </div>
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
              </div>
              <div className="flex font-poppins items-center justify-start mt-[23px] w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Color
                        </Text>
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <div className="bg-green_900 h-[18px] rounded-[50%] w-[18px]"></div>
                          <div className="bg-yellow_900 h-[18px] rounded-[50%] w-[18px]"></div>
                          <div className="bg-red_700 h-[18px] rounded-[50%] w-[18px]"></div>
                          <div className="bg-blue_A200 h-[18px] rounded-[50%] w-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[18px] mt-[5px] w-[18px]"
                      alt="arrowdown Two"
                    />
                  </div>
                  <Line className="bg-gray_300 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex font-poppins items-center justify-start mt-[23px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-end justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Size
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowdown_gray_900.svg"
                        className="h-[18px] my-[4px] w-[18px]"
                        alt="arrowdown Three"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[22px] mt-[18px] md:w-[100%] w-[74%]">
                      <div className="flex flex-col items-start justify-start w-[5%]">
                        <Text
                          className="font-normal not-italic text-center text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          S
                        </Text>
                        <div className="bg-indigo_A200 h-[8px] mt-[4px] rounded-[50%] w-[8px]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[37px] w-[7%]">
                        <Text
                          className="font-normal not-italic text-center text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          M
                        </Text>
                        <div className="bg-gray_400 h-[8px] md:ml-[0] ml-[2px] mt-[4px] rounded-[50%] w-[8px]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[37px] w-[4%]">
                        <Text
                          className="font-normal not-italic text-center text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          L
                        </Text>
                        <div className="bg-gray_400 h-[8px] mt-[4px] rounded-[50%] w-[8px]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[37px] w-[8%]">
                        <Text
                          className="font-normal not-italic text-center text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          XL
                        </Text>
                        <div className="bg-gray_400 h-[8px] md:ml-[0] ml-[3px] mt-[4px] rounded-[50%] w-[8px]"></div>
                      </div>
                      <div className="flex flex-col items-center justify-start ml-[28px] w-[12%]">
                        <Text
                          className="font-normal not-italic text-center text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          XXL
                        </Text>
                        <div className="bg-gray_400 h-[8px] mt-[4px] rounded-[50%] w-[8px]"></div>
                      </div>
                    </div>
                    <Line className="bg-gray_300 h-[1px] mt-[28px] w-[100%]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[73%]">
              <div className="flex flex-col font-rooberttw gap-[57px] items-center justify-start w-[100%]">
                <List
                  className="sm:flex-col flex-row grid grid-cols-7 justify-start sm:w-[100%] w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[31px]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic outline outline-[2px] outline-deep_purple_A400 text-center text-deep_purple_A400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Tab 1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tab 2
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tab 3
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tab 4
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tab 5
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tab 6
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tab 7
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex font-poppins items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashtvg4wvjgsey_248x265.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashtvG4WvjgsEY"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[15px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left text-shadow-ts w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              10$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplash7cerndkoydw.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplash7cERndkOyDw"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[15px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="backdrop-opacity-[0.5] blur-[4.00px] font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashgeupirvyxh0.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashgEupiRvyxhZero"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashtvg4wvjgsey_248x265.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashtvG4WvjgsEY One"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplash7cerndkoydw.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="abc"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashgeupirvyxh0.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="abc One"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashtvg4wvjgsey_248x265.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashtvG4WvjgsEY Two"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplash7cerndkoydw.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplash7cERndkOyDw One"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashgeupirvyxh0.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashgEupiRvyxhZero One"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashtvg4wvjgsey_248x265.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashtvG4WvjgsEY Three"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplash7cerndkoydw.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplash7cERndkOyDw Two"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start shadow-bs w-[100%]">
                      <Img
                        src="images/img_unsplashgeupirvyxh0.png"
                        className="h-[248px] md:h-[auto] object-cover w-[100%]"
                        alt="unsplashgEupiRvyxhZero Two"
                      />
                      <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Smart T-Shirt
                            </Text>
                            <Text
                              className="font-bold font-signika text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              40$
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Best quality
                          </Text>
                          <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                            <div className="flex items-center justify-evenly w-[74%]">
                              <RatingBar
                                className=""
                                value={5}
                                starCount={5}
                                activeColor="#ffd43c"
                                size={18}
                              ></RatingBar>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              ( 1k )
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold font-poppins leading-[normal] text-[18px] text-center text-white_A700 w-[180px]"
                size="md"
                variant="OutlineBlack9000c"
              >
                Load More
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1220px] mt-[44px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-normal not-italic text-black_900 text-center w-[auto]"
              as="h1"
              variant="h1"
            >
              Recommend Product
            </Text>
            <List
              className="sm:flex-col flex-row font-rooberttw grid grid-cols-7 justify-start mt-[26px] sm:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[31px]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic outline outline-[2px] outline-deep_purple_A400 text-center text-deep_purple_A400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Tab 1
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tab 2
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tab 3
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tab 4
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tab 5
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tab 6
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-[auto]">
                <div className="flex h-[30px] md:h-[auto] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_01 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tab 7
                  </Text>
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row font-poppins gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[27px] w-[100%]"
              orientation="horizontal"
            >
              <div className="hover:cursor-pointer h-[366px] hover:relative relative hover:shadow-bs hover:w-[100%] w-[100%]">
                <div className="absolute flex flex-col h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] shadow-bs w-[93%]">
                  <Img
                    src="images/img_unsplashjskqeiltds.png"
                    className="h-[248px] md:h-[auto] object-cover w-[100%]"
                    alt="unsplashJskqEILtds"
                  />
                  <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                    <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Smart T-Shirt
                        </Text>
                        <Text
                          className="font-bold font-signika text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          40$
                        </Text>
                      </div>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Best quality
                      </Text>
                      <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                        <div className="flex items-center justify-evenly w-[74%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#ffd43c"
                            size={18}
                          ></RatingBar>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          ( 1k )
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute flex h-[40px] inset-y-[0] items-center justify-center left-[0] my-[auto] w-[40px]"
                  shape="icbCircleBorder21"
                  size="mdIcn"
                  variant="icbOutline"
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="h-[24px]"
                    alt="arrowleft One"
                  />
                </Button>
              </div>
              <div className="hover:cursor-pointer flex flex-1 flex-col font-signika items-center justify-start hover:shadow-bs shadow-bs hover:w-[100%] w-[100%]">
                <Img
                  src="images/img_unsplashtvg4wvjgsey_248x265.png"
                  className="h-[248px] md:h-[auto] object-cover w-[100%]"
                  alt="unsplashtvG4WvjgsEY Four"
                />
                <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                  <div className="flex flex-col gap-[38px] items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Smart T-Shirt
                      </Text>
                      <Text
                        className="font-bold font-signika text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        40$
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[53px] items-center justify-start md:w-[100%] w-[64%]">
                      <div className="flex flex-row items-center justify-evenly w-[43%]">
                        <Img
                          src="images/img_star1.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarOne"
                        />
                        <Img
                          src="images/img_star2.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarTwo"
                        />
                        <Img
                          src="images/img_star3.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarThree"
                        />
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        ( 1k )
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer flex flex-1 flex-col font-poppins items-center justify-start hover:shadow-bs shadow-bs hover:w-[100%] w-[100%]">
                <Img
                  src="images/img_unsplash7cerndkoydw.png"
                  className="h-[248px] md:h-[auto] object-cover w-[100%]"
                  alt="unsplash7cERndkOyDw Three"
                />
                <div className="bg-white_A700 flex items-start justify-start p-[14px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[62%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Smart T-Shirt
                    </Text>
                    <Text
                      className="font-normal mt-[7px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Best quality
                    </Text>
                    <div className="flex flex-row font-signika gap-[31px] items-center justify-between mt-[12px] w-[100%]">
                      <div className="flex flex-row items-center justify-evenly w-[auto]">
                        <Img
                          src="images/img_star1_18x18.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarOne One"
                        />
                        <Img
                          src="images/img_star2_18x18.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarTwo One"
                        />
                        <Img
                          src="images/img_star3_18x18.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarThree One"
                        />
                        <Img
                          src="images/img_star4.svg"
                          className="h-[18px] rounded-[1px] w-[18px]"
                          alt="StarFour"
                        />
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        ( 1k )
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer font-poppins h-[366px] hover:relative relative hover:shadow-bs hover:w-[100%] w-[100%]">
                <div className="absolute flex flex-col h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] shadow-bs w-[93%]">
                  <Img
                    src="images/img_unsplashgeupirvyxh0.png"
                    className="h-[248px] md:h-[auto] object-cover w-[100%]"
                    alt="unsplashgEupiRvyxhZero Three"
                  />
                  <div className="bg-white_A700 flex items-center justify-start p-[14px] w-[100%]">
                    <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[97%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-bold font-poppins text-gray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Smart T-Shirt
                        </Text>
                        <Text
                          className="font-bold font-signika text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          40$
                        </Text>
                      </div>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Best quality
                      </Text>
                      <div className="flex flex-row font-signika gap-[9px] items-center justify-start mt-[12px] md:w-[100%] w-[64%]">
                        <div className="flex items-center justify-evenly w-[74%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#ffd43c"
                            size={18}
                          ></RatingBar>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          ( 1k )
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 h-[40px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[40px]"></div>
              </div>
            </List>
          </div>
          <Footer className="flex font-poppins items-center justify-center mt-[80px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
