import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Img, Button, Input, SelectBox } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  { rank: "1", name: "Mamang Ironmen", categoryone: "Skaters", points: "2.140" },
  { rank: "2", name: "Ariana Grande", categoryone: "Cyclist", points: "1.814" },
  { rank: "3", name: "Trent Alexander Arnold", categoryone: "Skaters", points: "1.620" },
  { rank: "4", name: "Shakira Wakawaka", categoryone: "Yogas", points: "1.280" },
];

type TableRowType = { rank: string; name: string; categoryone: string; points: string };

export default function DashboardUITemplateOnePage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rank", {
        cell: (info) => (
          <div className="h-[71px] md:w-full relative">
            <Img
              src="images/img_polygon_1.svg"
              alt="polygonone_one"
              className="h-[32px] left-0 bottom-0 top-0 m-auto absolute rounded"
            />
            <Text
              size="md"
              as="p"
              className="w-max left-[13%] bottom-0 top-0 m-auto !text-white-A700 tracking-[0.32px] text-center absolute"
            >
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px tracking-[0.28px] !font-medium">
            Rank
          </Text>
        ),
        meta: { width: "72px" },
      }),
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end">
            <div className="h-[40px] w-[40px] bg-blue-50 rounded-[50%]" />
            <Heading as="h6" className="mb-[7px] ml-[13px] tracking-[0.32px]">
              {info?.getValue?.()}
            </Heading>
            <Img
              src="images/img_group_130.png"
              alt="image_eleven"
              className="w-[8%] md:h-auto sm:w-full mb-2.5 ml-[29px] sm:ml-5 object-cover"
            />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px tracking-[0.28px] !font-medium">
            Name
          </Text>
        ),
        meta: { width: "327px" },
      }),
      tableColumnHelper.accessor("categoryone", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <div className="flex flex-row justify-center items-start w-[57%] gap-2 p-[5px] bg-cyan-50_01 rounded-[16px]">
              <div className="h-[8px] w-[8px] mt-[7px] bg-teal-300_01 rounded-[50%]" />
              <Text as="p" className="!text-cyan-900 tracking-[0.28px]">
                {info?.getValue?.()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px tracking-[0.28px] !font-medium">
            Category
          </Text>
        ),
        meta: { width: "182px" },
      }),
      tableColumnHelper.accessor("points", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-cyan-900 tracking-[0.32px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="p-px tracking-[0.28px] !font-medium">
            Points
          </Text>
        ),
        meta: { width: "91px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>dantown</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full bg-gray-50_01">
        <div className="flex flex-row md:flex-col justify-start items-start w-[98%] gap-10 md:gap-5">
          <Sidebar
            width="242px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="h-screen top-0 bg-white-A700 !sticky overflow-auto"
          >
            <div className="flex flex-row justify-center w-[57%] mt-[42px] mx-auto">
              <div className="flex flex-row justify-start items-center w-full gap-[9px]">
                <Img src="images/img_vector.svg" alt="vector_one" className="h-[24px]" />
                <Heading size="md" as="h5" className="!text-deep_orange-400 tracking-[0.40px]">
                  Sedboi.euy
                </Heading>
              </div>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px 15px 15px 39px",
                  color: "#8695a0",
                  fontWeight: 400,
                  fontSize: "14px",
                  gap: "19px",
                  [`&:hover, &.ps-active`]: {
                    color: "#54bcbd",
                    fontWeight: "800 !important",
                    background: "linear-gradient(94deg, #54bcbd,#54bbbd33)",
                  },
                },
              }}
              className="flex flex-col items-center justify-start w-full mt-[39px] mb-[5px]"
            >
              <div className="flex flex-col items-center justify-start w-full gap-1.5 md:gap-[6.00px]">
                <MenuItem icon={<Img src="images/img_group_201.svg" alt="image" className="h-[15px] w-[15px]" />}>
                  Home
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group_202.svg" alt="image_one" className="h-[16px] w-[16px]" />}>
                  Timeline
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group_199.svg" alt="image_two" className="h-[18px]" />}>
                  Community
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group_222.svg" alt="image_three" className="h-[16px] w-[16px]" />}>
                  Discover
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group_203.svg" alt="image_four" className="h-[14px] w-[14px]" />}>
                  Friends
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_vector_blue_gray_400.svg" alt="vector_three" className="h-[13px]" />}
                >
                  Bookmark
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group_207.svg" alt="image_five" className="h-[16px]" />}>
                  Event
                </MenuItem>
                <MenuItem icon={<Img src="images/img_group_209.svg" alt="image_six" className="h-[16px]" />}>
                  Discussion
                </MenuItem>
              </div>
              <div className="h-px w-[71%] mt-[22px] bg-blue_gray-100_02" />
              <div className="flex flex-col items-start justify-start h-[240px] w-[240px] mt-[52px]">
                <Heading as="h6" className="ml-[35px] md:ml-0 sm:ml-5 tracking-[0.32px]">
                  Category
                </Heading>
                <div className="flex flex-col items-center justify-start w-full gap-1.5 md:gap-[6.00px]">
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_vector_deep_orange_400.svg"
                        alt="vector_five"
                        className="h-[18px] w-[18px]"
                      />
                    }
                  >
                    Sports
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img src="images/img_vector_deep_orange_400_14x18.svg" alt="vector_seven" className="h-[18px]" />
                    }
                  >
                    Gaming
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img src="images/img_vector_deep_orange_400_16x14.svg" alt="vector_nine" className="h-[14px]" />
                    }
                  >
                    Music
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_group_214.svg" alt="image_seven" className="h-[18px] w-[18px]" />}
                  >
                    Tech & Science
                  </MenuItem>
                </div>
              </div>
            </Menu>
          </Sidebar>
          <div className="h-[820px] w-[80%] md:w-full relative">
            <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <header className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5 z-[1]">
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <Heading size="lg" as="h4">
                    Hey, Dustin!
                  </Heading>
                  <Text as="p" className="!font-medium">
                    Welcome back, nice to see you again!
                  </Text>
                </div>
                <Input
                  color="white_A700"
                  size="sm"
                  variant="fill"
                  name="search"
                  placeholder="Search here"
                  value={searchBarValue1}
                  onChange={(e: string) => setSearchBarValue1(e)}
                  prefix={<Img src="images/img_group_6.svg" alt="Group 6" className="cursor-pointer" />}
                  suffix={
                    searchBarValue1?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue1("")} height={16} width={15} fillColor="#0f3f62ff" />
                    ) : null
                  }
                  className="w-[29%] md:w-full ml-[162px] gap-3 md:ml-5 text-blue_gray-400 tracking-[0.28px] rounded-[25px]"
                />
                <div className="flex flex-row sm:flex-col justify-end items-center w-[24%] md:w-full ml-[134px] md:ml-5 sm:gap-5">
                  <div className="flex flex-row justify-center w-[7%] sm:w-full p-0.5 border-cyan-900 border-[0.5px] border-solid rounded-sm">
                    <Img src="images/img_vector_19.svg" alt="vectornineteen" className="h-[4px] mb-[3px]" />
                  </div>
                  <Img src="images/img_group_67.svg" alt="image_eight" className="h-[19px] ml-[27px] sm:ml-5" />
                  <div className="flex flex-row justify-start items-center w-[62%] sm:w-full ml-[41px] gap-2.5 md:ml-5">
                    <Img src="images/img_img.png" alt="img_one" className="h-[50px] w-[50px] md:h-auto rounded-[50%]" />
                    <SelectBox
                      shape="square"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                      name="jametroy"
                      placeholder="Jamet Roy"
                      options={dropDownOptions}
                      className="w-[64%] gap-px text-cyan-900 tracking-[0.32px] font-extrabold"
                    />
                  </div>
                </div>
              </header>
              <div className="flex flex-col items-center justify-start w-[33%] md:w-full mt-[-61px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="h-[820px] w-px bg-blue_gray-50" />
                  <div className="flex flex-col items-center justify-start w-[89%] gap-10">
                    <div className="flex flex-col items-start justify-start w-full gap-[25px]">
                      <div className="flex flex-row justify-start w-[30%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-full gap-2.5">
                          <Heading size="s" as="h1" className="mb-px tracking-[0.36px]">
                            Chats
                          </Heading>
                          <div className="flex flex-row justify-start w-[39%]">
                            <Text
                              size="xs"
                              as="p"
                              className="flex justify-center items-center w-[37px] h-[24px] px-[11px] py-[3px] !text-teal-300_01 tracking-[0.26px] text-center bg-teal-50 rounded-[12px]"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-[320px] w-[320px] gap-4 md:gap-1">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center w-[83%] gap-4">
                            <div className="h-[56px] w-[56px] bg-blue-50 rounded-[50%]" />
                            <div className="flex flex-col items-start justify-start w-[73%] gap-[3px]">
                              <Heading as="h2" className="tracking-[0.32px]">
                                Ironmen
                              </Heading>
                              <Text as="p" className="tracking-[0.28px] !font-medium">
                                When will the event be held?
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                            <Text
                              size="xs"
                              as="p"
                              className="flex justify-center items-center h-[24px] w-[24px] !text-white-A700 tracking-[0.26px] text-center bg-deep_orange-400 rounded-[50%]"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                        <div className="w-[248px] h-px bg-blue_gray-100_01" />
                        <div className="flex flex-row justify-start items-center w-[78%] md:w-full mr-[71px] gap-4 md:mr-5">
                          <div className="h-[56px] w-[56px] bg-red-100 rounded-[50%]" />
                          <div className="flex flex-col items-start justify-start w-[72%] gap-[5px]">
                            <Heading as="h3" className="tracking-[0.32px]">
                              Ariana Grande
                            </Heading>
                            <Text as="p" className="tracking-[0.28px]">
                              Alright then. See you there
                            </Text>
                          </div>
                        </div>
                        <div className="w-[248px] h-px bg-blue_gray-100_01" />
                        <div className="flex flex-row justify-start items-center w-[76%] md:w-full mr-[76px] gap-4 md:mr-5">
                          <div className="h-[56px] w-[56px] bg-indigo-50 rounded-[50%]" />
                          <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                            <Heading as="h4" className="tracking-[0.32px]">
                              Ariana Grande
                            </Heading>
                            <Text as="p" className="tracking-[0.28px]">
                              Come on join to my party!
                            </Text>
                          </div>
                        </div>
                        <div className="w-[248px] h-px bg-blue_gray-100_01" />
                        <div className="flex flex-row justify-start items-center w-[76%] md:w-full mr-[79px] gap-4 md:mr-5">
                          <div className="h-[56px] w-[56px] bg-red-100 rounded-[50%]" />
                          <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                            <Heading as="h5" className="tracking-[0.32px]">
                              Ariana Grande
                            </Heading>
                            <Text as="p" className="tracking-[0.28px]">
                              After that you can see me
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full pb-6 sm:pb-5 bg-white-A700 rounded-[15px]">
                      <div className="flex flex-row justify-between items-start w-full p-[15px] rounded-tl-[15px] rounded-tr-[15px] bg-teal-300">
                        <div className="flex flex-row justify-center w-[23%] ml-2">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Heading as="h6" className="!text-white-A700 tracking-[0.32px] !font-black">
                              Ironmen
                            </Heading>
                            <Heading as="h6" className="mt-[-22px] !text-white-A700 tracking-[0.32px] !font-black">
                              Ironmen
                            </Heading>
                          </div>
                        </div>
                        <Img
                          src="images/img_group_32.svg"
                          alt="image_nine"
                          className="h-[12px] w-[12px] mt-[5px] mr-2"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[22%] md:w-full mt-4">
                        <Text
                          size="xs"
                          as="p"
                          className="flex justify-center items-center w-[68px] h-[24px] px-4 py-[3px] !text-white-A700 tracking-[0.26px] text-center bg-indigo-900 rounded-[12px]"
                        >
                          Today
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-start w-[85%] md:w-full mt-[37px] gap-5">
                        <div className="flex flex-row justify-start items-center w-[97%] md:w-full mr-[9px] gap-2.5">
                          <div className="flex flex-row justify-start w-[75%]">
                            <div className="flex flex-row justify-center w-full p-[9px] bg-teal-50 rounded-[10px]">
                              <Text size="xs" as="p" className="mb-px !text-teal-300 tracking-[0.26px]">
                                When will the event be held?
                              </Text>
                            </div>
                          </div>
                          <Text size="xs" as="p" className="tracking-[0.26px]">
                            10:22 am
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[75%] md:w-full gap-2.5">
                          <Text size="xs" as="p" className="tracking-[0.26px] text-right">
                            10:24 am
                          </Text>
                          <div className="flex flex-row justify-start w-[68%]">
                            <Button shape="round" className="w-full tracking-[0.26px]">
                              Tommorow at 4 pm
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-full gap-2.5">
                          <Input
                            shape="round"
                            name="type_here"
                            placeholder="Type here..."
                            suffix={<Img src="images/img_group_93.svg" alt="Group 93" />}
                            className="w-[82%] sm:w-full gap-[35px] tracking-[0.24px]"
                          />
                          <Button color="deep_orange_400" size="sm" shape="circle" className="w-[40px]">
                            <Img src="images/img_group_96.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start h-[720px] w-[720px] md:h-auto gap-[30px] bottom-0 left-0 m-auto absolute">
              <div className="flex flex-row md:flex-col w-full gap-[21px]">
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full pb-[22px] gap-5 sm:pb-5 bg-white-A700 rounded-[15px]">
                  <div className="flex flex-row justify-center w-full p-[22px] sm:p-5 rounded-tl-[15px] rounded-tr-[15px] bg-teal-50">
                    <Img src="images/img_group_144.svg" alt="real_wild" className="h-[156px] mt-[5px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[76%] md:w-full gap-[9px]">
                    <Heading as="h6" className="tracking-[0.32px] text-center !font-black">
                      Real Wild Cyclist
                    </Heading>
                    <Text as="p" className="tracking-[0.28px] text-center">
                      We are the wildest cyclist.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full pb-[22px] gap-[21px] sm:pb-5 bg-white-A700 rounded-[15px]">
                  <div className="flex flex-row justify-center w-full p-[22px] sm:p-5 rounded-tl-[15px] rounded-tr-[15px] bg-teal-50">
                    <Img src="images/img_group_126.svg" alt="image" className="h-[160px] mt-px" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[76%] md:w-full gap-[9px]">
                    <Heading as="h6" className="tracking-[0.32px] text-center">
                      Yoga Forces
                    </Heading>
                    <Text as="p" className="tracking-[0.28px] text-center">
                      Welcome to the biggest...
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full pb-6 gap-5 sm:pb-5 bg-white-A700 rounded-[15px]">
                  <div className="flex flex-row justify-center w-full p-[22px] sm:p-5 rounded-tl-[15px] rounded-tr-[15px] bg-teal-50">
                    <Img src="images/img_group_127.svg" alt="image" className="h-[150px] mt-[11px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[76%] md:w-full gap-[7px]">
                    <Heading as="h6" className="tracking-[0.32px] text-center">
                      Skater Boys
                    </Heading>
                    <Text as="p" className="tracking-[0.28px] text-center">
                      The best states of skaters.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[26px] p-[23px] sm:p-5 bg-white-A700 rounded-[15px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading as="h6" className="tracking-[0.32px]">
                    Friends Rank
                  </Heading>
                  <Img src="images/img_group_77.svg" alt="image_ten" className="h-[5px]" />
                </div>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "md:flex-col" }}
                  headerProps={{ className: "md:flex-col md:gap-5" }}
                  rowDataProps={{ className: "md:flex-col md:gap-5" }}
                  className="w-[672px] mb-1.5"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
