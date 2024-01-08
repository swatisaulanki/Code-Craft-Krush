import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,

    subNav: [
      {
        title: "About",
        path: "/ablut",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Data",
    path: "/data",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,

    subNav: [
      {
        title: "Reports",
        path: "/data/reports",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Reports2",
        path: "/data/Reports2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Message",
    path: "/message",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "/message/message1",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Message 2",
        path: "/message/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Cards",
    path: "/card",
    icon: <IoIcons.IoMdAddCircle />,
  },
];








