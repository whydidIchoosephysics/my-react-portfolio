import React, { useContext } from "react";
import { Typography, Divider, Row, Col, Space } from "antd";
import ThemeContext from "../ThemeContext";

const { Title, Paragraph } = Typography;

const About = () => {
  const { token } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: token.colorPrimary, padding: "50px" }}>
      <Typography style={{ color: "white" }}>
        <Title>About Me</Title>
        <Row>
          <Col xs={24} md={12}>
            <Space direction="vertical">
              <Title level={3}>John Doe</Title>
              <Paragraph>
                I am a Full Stack Developer with a passion for creating
                innovative and scalable web applications. With a strong
                background in JavaScript, React, and Node.js, I enjoy solving
                complex problems and learning new technologies to deliver
                high-quality projects.
              </Paragraph>
              <Paragraph>
                In my spare time, I enjoy contributing to open source projects,
                exploring new programming languages, and staying up-to-date with
                the latest industry trends.
              </Paragraph>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            {/* Add an image or any other visual element here */}
          </Col>
        </Row>
        <Divider />
      </Typography>
    </div>
  );
};

export default About;
