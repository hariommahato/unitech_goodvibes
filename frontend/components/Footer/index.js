import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Footer.module.scss";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </div>
            <div>
              <Link href={"/about"} className={styles.link}>
                About Us
              </Link>
            </div>
            <div>
              <Link href={"/faq"} className={styles.link}>
                FAQS
              </Link>
            </div>
            <div>
              <Link href={"/feedback"} className={styles.link}>
                Feedback
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Link href={"/blog"} className={styles.link}>
                Blogs
              </Link>
            </div>
            <div>
              <Link href={"/country"} className={styles.link}>
                Country
              </Link>
            </div>
            <div>
              <Link href={"/services"} className={styles.link}>
                Services
              </Link>
            </div>
            <div>
              <Link href={"/apply"} className={styles.link}>
                ApplyNow
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Link href={"/"} className={styles.link}>
                +977-01-5916120, 9869060120
              </Link>
            </div>
            <div>
              <Link
                href={"mailto:info.goodvives@gmail.com"}
                target="_blank"
                className={styles.link}
              >
                info.goodvives@gmail.com
              </Link>
            </div>
            <div>
              <Link href={"/"} className={styles.link}>
                Chuchepati Chowk, Chabahil, 2nd attached House to Sanima Bank
              </Link>
            </div>

            <div>
              <h6 className={styles.follow}>FOLLOW US</h6>
              <div>
                <Link
                  href={
                    "https://www.facebook.com/people/Good-Vibes-Education-Consultancy/100083652095301/"
                  }
                  className={styles.link}
                >
                  <AiFillFacebook size={35} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.footerDetail}>
        <p>
          &copy; 2023 GoodVibes Education Consultancy Pvt.Ltd.All right reserved
        </p>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            gap: "0.3vmax",
          }}
        >
          Designed & Developed By
          <Link
            href={"https://unitechhostnepal.com/"}
            style={{ textDecoration: "none", cursor: "pointer",color:"#05BFDB" }}
          >
            <p>UNITECH IT SOLUTION </p>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
