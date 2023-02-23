import React from "react";

import { Img, Text, Input } from "components";
import { CloseSVG } from "../../assets/images";
import Footer from "components/Footer";

const AboutUsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div
          className="bg-cover bg-no-repeat flex h-[428px] items-center justify-start pb-[40px] rounded-[5px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group498.png')" }}
        >
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
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
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1200px] mx-[auto] md:px-[20px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:w-[100%] w-[auto]">
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
                      About Us
                    </Text>
                  </div>
                  <div className="flex flex-col font-poorstory gap-[26px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      About Us
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_100 text-left w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In eget gravida leo, nec iaculis diam. Nam bibendum mi sed
                      sem finibus ullamcorper.
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_unsplashqjnsha8dwyy.png"
                  className="md:flex-1 h-[268px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                  alt="unsplashqJnsHa8DWyY"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-poorstory md:gap-[40px] items-start justify-between max-w-[1202px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Profile
            </Text>
            <Text
              className="font-normal leading-[30.00px] not-italic text-gray_700 text-left"
              as="h4"
              variant="h4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
              <br />
              <br />
              Klara is an AI powered automated Solution Builder of Growth
              Strategy, Branding and Digital marketing planning for your
              business.
            </Text>
          </div>
          <div className="font-mada h-[349px] relative md:w-[100%] w-[50%]">
            <Img
              src="images/img_unsplashkwviml5qxji.png"
              className="h-[349px] m-[auto] object-cover w-[100%]"
              alt="unsplashkWVImL5QxJI"
            />
            <Input
              className="absolute bottom-[0] font-bold leading-[normal] p-[0] right-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-indigo_A100 text-indigo_A100 text-left w-[100%]"
              wrapClassName="absolute bottom-[7%] mb-[24px] sm:w-[100%] w-[96%]"
              name="Group1842"
              placeholder="Mangcoding Store"
              size="xl"
              variant="FillWhiteA700"
            ></Input>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-mada md:gap-[40px] items-start justify-between max-w-[1202px] mt-[79px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="h-[349px] relative md:w-[100%] w-[50%]">
            <Img
              src="images/img_unsplashp3pi6xzovu0.png"
              className="h-[349px] m-[auto] object-cover w-[100%]"
              alt="unsplashP3pI6xzovuZero"
            />
            <Text
              className="absolute bg-clip-text bg-gradient  bg-white_A700 bottom-[7%] font-bold h-[57px] left-[0] pl-[35px] pr-[24px] sm:px-[20px] py-[12px] text-left text-transparent w-[566px]"
              as="h4"
              variant="h4"
            >
              Mangcoding Store
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col font-poorstory gap-[26px] items-start justify-start md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Our Mission
            </Text>
            <Text
              className="font-normal leading-[30.00px] not-italic text-gray_700 text-left"
              as="h4"
              variant="h4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
              <br />
              <br />
              Klara is an AI powered automated Solution Builder of Growth
              Strategy, Branding and Digital marketing planning for your
              business.
            </Text>
          </div>
        </div>
        <Footer className="flex font-poppins items-center justify-center mt-[80px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default AboutUsPage;
