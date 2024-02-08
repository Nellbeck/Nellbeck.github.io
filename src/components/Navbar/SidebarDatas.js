import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
	{
		title: "Startsida",
		path: "/index",
		icon: <AiIcons.AiFillHome />,
	},
	{
		title: "Om mig",
		path: "/about",
		icon: <AiIcons.AiFillRobot />,
	},
	{
		title: "Projekt",
		path: "/project",
		icon: <AiIcons.AiFillDatabase />,
	},
	{
		title: "CV",
		path: "/cv",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Kontakta mig",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Webbriktlinjer",
		path: "/glines",
		icon: <AiIcons.AiFillThunderbolt />,
	},
];

