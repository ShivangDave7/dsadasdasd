import React from "react";

import { Text } from "components";

type Footer1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer1: React.FC<Footer1Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-gray_800 flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-center p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
          <ul className="flex md:flex-1 flex-col items-start justify-start mb-[59px] md:ml-[0] ml-[590px] md:w-[100%] w-[auto] common-column-list">
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
          <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
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
          <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
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
          <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start mr-[39px] md:w-[100%] w-[15%]">
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
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
