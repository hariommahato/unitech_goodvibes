import Image from "next/image";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <Sidebar style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h5 className="text-center p-4">Dashboard</h5>
      </div>

      <Menu>
        <SubMenu label="UserData">
          <MenuItem as={Link} href={`/admin/dashboard/user/add`}>
            {" "}
            Add User{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/user"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="AboutData">
          <MenuItem as={Link} href={`/admin/dashboard/about/add`}>
            {" "}
            Add About{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/about"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="Carousel">
          <MenuItem as={Link} href={`/admin/dashboard/carousel/add`}>
            {" "}
            Add Carousel{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/carousel"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>


        <SubMenu label="SuccessStory">
          <MenuItem as={Link} href={`/admin/dashboard/successstory/add`}>
            {" "}
            Add SuccessStory{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/successstory"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Faq">
          <MenuItem as={Link} href={`/admin/dashboard/faq/add`}>
            {" "}
            Add Faq{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/faq"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu label="Blog">
          <MenuItem as={Link} href={`/admin/dashboard/blog/add`}>
            {" "}
            Add Blog{" "}
          </MenuItem>
          <MenuItem ad={Link} href={"/admin/dashboard/blog"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="FeedbackData">
          <MenuItem ad={Link} href={"/admin/dashboard/feedback"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="FormData">
          <MenuItem ad={Link} href={"/admin/dashboard/form"}>
            {" "}
            All{" "}
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default DashboardSidebar;
