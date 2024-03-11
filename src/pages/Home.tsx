import React from "react";
import { CloseSVG } from "../assets/images";
import { Text, Heading, Img, Button, Input, SelectBox } from "../components";
import { ReactTable } from "../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import "../styles/font.css";
import "../styles/index.css";

// Defining tableData array of objects that conforms to TableRowType
const tableData = [
  {
    rank: "1",
    name: "Mamang Ironmen",
    categoryone: "Skaters",
    points: "2.140",
  },
  { rank: "2", name: "Ariana Grande", categoryone: "Cyclist", points: "1.814" },
  {
    rank: "3",
    name: "Trent Alexander Arnold",
    categoryone: "Skaters",
    points: "1.620",
  },
  {
    rank: "4",
    name: "Shakira Wakawaka",
    categoryone: "Yogas",
    points: "1.280",
  },
];

// Declaring a type for table rows
type TableRowType = {
  rank: string;
  name: string;
  categoryone: string;
  points: string;
};

// Defining the LandingPage component
export default function LandingPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rank", {
        cell: (info) => (
          <div className="h-[71px] md:w-full relative">
            <Img
              src="images/img_polygon_1.svg"
              alt="polygonone_one"
              className="h-[27px] left-53px  top-42px width-135px m-auto absolute rounded"
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
      <div className="container">
        <div className="inner-container">
          <Sidebar width="240px !important">
            <div className="header">
              <div className="logo-container">
                <Img
                  src="images/img_vector.svg"
                  alt="vector_one"
                  className="h-[27px]"
                />
                <Heading size="md" as="h5">
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
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_201.svg"
                      alt="image"
                      className="h-[16px] w-[16px]"
                    />
                  }
                >
                  Home
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_202.svg"
                      alt="image_one"
                      className="h-[16px] w-[16px]"
                    />
                  }
                >
                  Timeline
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_199.svg"
                      alt="image_two"
                      className="h-[18px]"
                    />
                  }
                >
                  Community
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_222.svg"
                      alt="image_three"
                      className="h-[16px] w-[16px]"
                    />
                  }
                >
                  Discover
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_203.svg"
                      alt="image_four"
                      className="h-[14px] w-[14px]"
                    />
                  }
                >
                  Friends
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_vector_blue_gray_400.svg"
                      alt="vector_three"
                      className="h-[13px]"
                    />
                  }
                >
                  Bookmark
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_207.svg"
                      alt="image_five"
                      className="h-[16px]"
                    />
                  }
                >
                  Event
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_group_209.svg"
                      alt="image_six"
                      className="h-[16px]"
                    />
                  }
                >
                  Discussion
                </MenuItem>
              </div>
              
              <div className="menuDivider" />

              <div
                className="flex categoryContainer"
                
              >
                <Heading
                  as="h6"
                  className="categoryTitle"
                  
                >
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
                    className="categoryItem"
                  >
                    Sports
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_vector_deep_orange_400_14x18.svg"
                        alt="vector_seven"
                        className="h-[18px]"
                      />
                    }
                  >
                    Gaming
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_vector_deep_orange_400_16x14.svg"
                        alt="vector_nine"
                        className="h-[14px]"
                      />
                    }
                  >
                    Music
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_group_214.svg"
                        alt="image_seven"
                        className="h-[18px] w-[18px]"
                      />
                    }
                  >
                    Tech & Science
                  </MenuItem>
                </div>
              </div>
            </Menu>
          </Sidebar>
          <div className="header-container">
            <div className="header-inner">
              <header className="header">
                <div className="flex-container">
                  <Heading size="lg" as="h4">
                    Hey, Dustin!
                  </Heading>
                  <Text as="p" className="text-medium">
                    Welcome back, nice to see you again!
                  </Text>
                </div>
                <div className="input-containers relative">
                  <Img
                    src="images/img_group_6.svg"
                    alt="Group 6"
                    className="icon cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2"
                  />
                  <Input
                    color="white_A700"
                    size="sm"
                    variant="fill"
                    name="search"
                    placeholder="Search here"
                    value={searchBarValue1}
                    onChange={(e: string) => setSearchBarValue1(e)}
                    suffix={
                      searchBarValue1?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue1("")}
                          height={16}
                          width={15}
                          fillColor="#0f3f62ff"
                        />
                      ) : null
                    }
                    className="text-blue_gray-400 tracking-[0.28px] rounded-[25px] pl-10"
                  />
                </div>
                <div className="flex-containers">
                  <div className="flex-items">
                    <Img
                      src="images/img_vector_19.svg"
                      alt="vectornineteen"
                      className="img-vector"
                    />
                  </div>
                  <Img
                    src="images/img_group_67.svg"
                    alt="image_eight"
                    className="img-eight"
                  />
                  <div className="flex-items">
                    <Img
                      src="images/img_img.png"
                      alt="img_one"
                      className="img-one"
                    />
                    <SelectBox
                      shape="square"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                          className="arrowdown"
                        />
                      }
                      name="jamet roy"
                      value="Jamet Roy"
                      placeholder="Jamet Roy"
                      className="select-box"
                    />
                  </div>
                </div>
              </header>
              <div
            
                className="flex flex-col items-center justify-start w-[33%] md:w-full mt-[-41px]"
              >
                <div
                  className="chat-content"
                 
                >
                  <div
                    className="divider"
                    
                  />
                  <div
                    className="chat-inner"

                  >
                    <div
                      className="sideHeader"
                     
                    >
                      <div
                        
                        className="flex flex-row justify-start w-[30%] md:w-full"
                      >
                        <div className="flex flex-row justify-start items-center w-full gap-2.5">
                          <Heading
                            size="s"
                            as="h1"
                            className="mb-px tracking-[0.36px]"
                          >
                            Chats
                          </Heading>
                          <div className="badge">
                            <Text className="custom-text">14</Text>
                          </div>
                        </div>
                      </div>
                      <div

                        className="flex flex-col h-[320px] w-[320px] gap-4 md:gap-1"
                      >
                        <div
                          className="flex-header"
                          
                        >
                          <div
                            className="flex-header-left"
                           
                          >
                            <div
                             
                              className="h-[26px] w-[16px] bg-blue-50 rounded-[50%]"
                            />
                            <div
                              className="content"
                              
                            >
                              <Heading as="h2" className="headings">
                                Ironmen
                              </Heading>
                              <Text
                                as="p"
                                className="text-medium"
                               
                              >
                                When will the event be held?
                              </Text>
                            </div>
                          </div>
                          <div
                            
                            className="flex flex-col items-center justify-start h-[24px] w-[24px]"
                          >
                            <Text
                              size="xs"
                              as="p"
                              className="notification"
                             
                            >
                              1
                            </Text>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div className="w-[248px] h-px bg-blue_gray-100_01" />
                        <div className="flex flex-row justify-start items-center w-[78%] md:w-full mr-[71px] gap-4 md:mr-5">
                          <div className="h-[56px] w-[56px] bg-red-100 rounded-[50%]" />
                          <div className="flex flex-col items-start justify-start w-[72%] gap-[5px]">
                            <Heading as="h2" className="headings">
                              Ariana Grande
                            </Heading>
                            <Text
                              as="p"
                              className="text-medium"
                             
                            >
                              Alright then. See you there
                            </Text>
                            <hr className="hr" />
                          </div>
                        </div>
                        <div className="w-[248px] h-px bg-blue_gray-100_01" />
                        <div className="flex flex-row justify-start items-center w-[76%] md:w-full mr-[76px] gap-4 md:mr-5">
                          <div className="h-[56px] w-[56px] bg-indigo-50 rounded-[50%]" />
                          <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                            <Heading as="h2" className="headings">
                              Ariana Grande
                            </Heading>
                            <Text
                              as="p"
                              className="text-medium"
                             
                            >
                              Come on join to my party!
                            </Text>
                            <hr className="hr" />
                          </div>
                        </div>
                        <div className="w-[248px] h-px bg-blue_gray-100_01" />
                        <div className="flex flex-row justify-start items-center w-[76%] md:w-full mr-[79px] gap-4 md:mr-5">
                          <div className="h-[56px] w-[56px] bg-red-100 rounded-[50%]" />
                          <div className="flex flex-col items-start justify-start w-[71%] gap-[5px]">
                            <Heading as="h2" className="headings">
                              Ariana Grande
                            </Heading>
                            <Text as="p" className="text-medium">
                              After that you can see me
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full pb-6 sm:pb-5 bg-white-A700 rounded-[15px]">
                      <div className="flexs-containers">
                        <div className="FlexContainer">
                          <div
                            className="HeadingContainer"
                           
                          >
                            <Heading
                              as="h6"
                              className="heading-last"
                              
                            >
                              Ironmen
                            </Heading>
                          </div>
                        </div>
                        <Img
                          src="images/img_group_32.svg"
                          alt="image_nine"
                          
                        />
                      </div>
                      <div
                        className="text-container"
                       
                      >
                        <Text
                          size="xs"
                          as="p"
                         
                          className="text-box"
                        >
                          Today
                        </Text>
                       
                      </div>
                      <div
                        className="info-container"
                       
                      >
                        <div
                          className="question-container"
                          
                        >
                          <div
                            className="question-box"
                            
                          >
                            <div
                              className="flexer-container"
                            
                            >
                              <Button
                                shape="round"
                                className="round-button"
                                
                              >
                                When will the event be held?
                              </Button>
                            </div>
                          </div>
                          <Text size="xs" as="p" className="tracking-[0.26px]">
                            10:22 am
                          </Text>
                        </div>
                        <div className="button-container">
                          <Text
                            size="xs"
                            as="p"
                            className="tracking-[0.26px] text-right"
                          >
                            10:24 am
                          </Text>

                          <div className="button-box">
                            <Button shape="round" className="round-button">
                              Tommorow at 4 pm
                            </Button>
                          </div>
                        </div>
                        <div className="input-container">
                          <Input
                            shape="round"
                            name="type_here"
                            placeholder="Type here..."
                            className="w-[82%] sm:w-full gap-[35px] tracking-[0.24px]"
                          />
                          <Img
                            src="images/img_group_93.svg"
                            alt="Group 93"
                            className="input-img"
                          />

                          <Button
                            color="deep_orange_400"
                            size="sm"
                            shape="circle"
                            className="btn"
                          >
                            <Img src="images/img_group_96.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="containers">
              <div className="cardContainer">
                <div className="card">
                  <div className="cardHeader">
                    <Img
                      src="images/img_group_144.svg"
                      alt="real_wild"
                      className="h-[156px] mt-[5px]"
                    />
                  </div>
                  <div className="cardContent">
                    <Heading as="h6" className="heading">
                      Real Wild Cyclist
                    </Heading>
                    <Text as="p" className="text">
                      We are the wildest cyclist.
                    </Text>
                  </div>
                </div>
                <div
                  className="card"
                  
                >
                  <div
                    className="cardHeader"
                    
                  >
                    <Img
                      src="images/img_group_126.svg"
                      alt="image"
                      className="cardImage"
                      
                    />
                  </div>
                  <div
                    className="cardContent"
                   
                  >
                    <Heading
                      as="h6"
                      className="heading"
                     
                    >
                      Yoga Forces
                    </Heading>
                    <Text
                      as="p"
                      className="text"
                     
                    >
                      Welcome to the biggest...
                    </Text>
                  </div>
                </div>
                <div
                  className="card"
                 
                >
                  <div
                    className="cardHeader"
                    
                  >
                    <Img
                      src="images/img_group_127.svg"
                      alt="image"
                      className="cardImage"
                     
                    />
                  </div>
                  <div
                    className="cardContent"
                    
                  >
                    <Heading
                      as="h6"
                      className="heading"
                      
                    >
                      Skater Boys
                    </Heading>
                    <Text
                      as="p"
                      className="text"
                      
                    >
                      The best states of skaters.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="rankContainer">
                <div className="rankHeader">
                  <Heading as="h6" className="heading">
                    Friends Rank
                  </Heading>
                  <Img
                    src="images/img_group_77.svg"
                    alt="image_ten"
                    className="h-[5px]"
                  />
                </div>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "md:flex-col" }}
                  headerProps={{ className: "md:flex-col md:gap-5" }}
                  rowDataProps={{ className: "md:flex-col md:gap-5" }}
                  // className="w-[672px] mb-1.5"
                  columns={tableColumns}
                  data={tableData}
                  className="rankTable"
                />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
