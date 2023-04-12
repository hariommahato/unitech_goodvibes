import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/frontend/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import {
  useDeleteFeedbackMutation,
  useGetFeedbacksQuery,
} from "@/frontend/services/api";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";

const Feedback = () => {
  const { data, isLoading } = useGetFeedbacksQuery();
  const router = useRouter();
  const [deleteFeedback, { isSuccess, isError }] = useDeleteFeedbackMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/feedback");
    }
  }, [isSuccess, toast]);
  {
    console.log(data);
  }
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
            <h5 style={{ textAlign: "center" }}>All Feedback Data List </h5>
            <Table responsive striped>
              {console.log(data)}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FullName</th>
                  <th style={{ minWidth: "10rem" }}>message</th>
                  <th>Image Url</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.feedback?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.message}</td>
                      <td>{item.images?.url}</td>

                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/feedback/${item?._id}`}
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
                              
                                deleteFeedback(item?._id);
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

export default Feedback;
Feedback.getLayout = function PageLayout(page) {
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
