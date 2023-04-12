import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import { Providers } from "@/frontend/services/provider";

import { toast, Toaster } from "react-hot-toast";
import {
  useDeleteBlogMutation,
  useGetBlogQuery,
} from "@/frontend/services/api";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";

const Blog = () => {
  const { data, isLoading } = useGetBlogQuery();
  const [deleteBlog, { isSuccess, isError }] = useDeleteBlogMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
    }
  }, [isSuccess, toast]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div
            style={{
              width: "100%",
            }}
          >
            <h5 style={{ textAlign: "center" }}>All Services List </h5>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th style={{ minWidth: "20rem" }}>Description</th>
                  <th >ImageUrl</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.blog?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item?.images?.url}</td>

                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/blog/${item?._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <span>
                              <AiFillEdit color="" />
                              Edit
                            </span>
                          </Link>
                          <Link
                            href={"/"}
                            style={{ textDecoration: "none", color: "red" }}
                            onClick={(e) => {
                              e.preventDefault();
                              deleteBlog(item?._id);
                            }}
                          >
                            {" "}
                            <AiFillDelete />
                            Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
Blog.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
      <DashboardNavbar/>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
