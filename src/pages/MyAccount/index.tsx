import React from "react";

import { Img, Text, Input, Button, TextArea, Radio } from "components";
import { CloseSVG } from "../../assets/images";
import Footer1 from "components/Footer1";

const MyAccountPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="md:h-[428px] h-[594px] md:px-[20px] relative w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[428px] inset-x-[0] items-center justify-start mx-[auto] pb-[80px] rounded-[5px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group498.png')" }}
            >
              <div className="flex items-center justify-start w-[100%]">
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
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[120px] md:w-[100%] w-[36%]">
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
                      className="font-bold font-mada mt-[42px] text-left text-white_A700 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      My Account
                    </Text>
                    <Text
                      className="font-normal font-poppins leading-[30.00px] mt-[21px] not-italic text-gray_100 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In eget gravida leo, nec iaculis diam. Nam bibendum mi sed
                      sem finibus ullamcorper.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white_A700 bottom-[11%] flex items-center justify-start p-[40px] sm:px-[20px] right-[8%] shadow-bs1 w-[34%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[64%]">
                <div className="h-[150px] relative w-[150px]">
                  <Img
                    src="images/img_unsplash95uf6lxelo.png"
                    className="h-[150px] m-[auto] rounded-[50%] w-[150px]"
                    alt="unsplash95UF6LXeLo"
                  />
                  <Button
                    className="absolute flex h-[34px] inset-[0] items-center justify-center m-[auto] rounded-[50%] w-[34px]"
                    size="smIcn"
                    variant="icbFillIndigoA2007f"
                  >
                    <Img
                      src="images/img_plus.svg"
                      className="h-[24px]"
                      alt="plus"
                    />
                  </Button>
                </div>
                <Text
                  className="font-bold mt-[23px] text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Alexanderdrostact12
                </Text>
                <Text
                  className="font-normal mt-[9px] not-italic text-gray_500 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Alexanderrostact567@gmail.com
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] mt-[38px] text-[18px] text-center text-white_A700 w-[180px]"
                  size="md"
                  variant="OutlineBlack90019"
                >
                  Update
                </Button>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-[9px] items-start justify-start left-[8%] w-[42%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Name
              </Text>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute bg-white_A700 border-[1px] border-gray_500 border-solid h-[48px] inset-[0] justify-center m-[auto] w-[99%]"></div>
                <Text
                  className="absolute bottom-[17%] font-bold right-[0] text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Alexanderdrostac adahgdvashgdvasgdhavdagsvdghdvsat12
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1200px] mt-[16px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start md:w-[100%] w-[49%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Street
              </Text>
              <Input
                className="font-bold p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="w-[100%]"
                name="Group527"
                placeholder="jl.karadenan no 100"
                size="xl"
                variant="OutlineGray500"
              ></Input>
            </div>
            <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start md:w-[100%] w-[41%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                No. Phone
              </Text>
              <Input
                className="font-bold p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="w-[100%]"
                name="Group529"
                placeholder="1234 1234 1234 1234"
                size="sm"
                variant="OutlineGray500"
              ></Input>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[949px] mt-[16px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start md:w-[100%] w-[62%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Address
              </Text>
              <TextArea
                className="font-bold leading-[30.00px] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                name="Group528"
                placeholder="Perum Mulya Sari, Jl. Candi Mendut No.36, RT 011/RW 005 (Belakang Polsek Lowokwaru), Kel. Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur, 65142"
                size="sm"
              ></TextArea>
            </div>
            <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[16px] md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Gender
                </Text>
                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[66%]">
                    <Radio
                      value="Male"
                      className="font-bold leading-[normal] text-[14px] text-gray_900 text-left"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={true}
                      name="Male"
                      label="Male"
                    ></Radio>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-gray_300 h-[16px] my-[2px] rounded-[50%] w-[16px]"></div>
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Female
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[28%]">
                    <div className="bg-gray_300 h-[16px] my-[2px] rounded-[50%] w-[16px]"></div>
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Other
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold leading-[normal] mt-[40px] text-[18px] text-center text-white_A700 w-[180px]"
            size="md"
            variant="OutlineBlack90019"
          >
            Update
          </Button>
          <Footer1 className="flex items-center justify-center mt-[81px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
