import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/frontend/services/provider";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import React, { useEffect } from "react";
import Link from "next/link";
import Loader from "@/frontend/components/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useDeleteFormMutation, useGetFormDataQuery } from "@/frontend/services/api";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";

const Contact = () => {
  const { data, isLoading } = useGetFormDataQuery();
  const router = useRouter();
  const [deleteForm, { isSuccess, isError }] = useDeleteFormMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Successfully");
      router.push("/admin/dashboard/form");
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
            <h5 style={{ textAlign: "center" }}>All Contact Data List </h5>
            <Table responsive striped>
              {console.log(data)}
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>ContactNumber</th>
                  <th >Education Level</th>
                  <th>Course</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.formdata?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.email}</td> <td>{item.number}</td>{" "}
                      <td>{item.edulevel}</td>
                      <td>{item.course}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            padding: "1rem",
                            gap: "0.5rem",
                          }}
                        >
                          <Link
                            href={`/admin/dashboard/form/${item?._id}`}
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
                              deleteForm(item?._id);
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

export default Contact;
Contact.getLayout = function PageLayout(page) {
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
