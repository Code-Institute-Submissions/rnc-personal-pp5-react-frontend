import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BuildImage from '../../components/BuildImage';

import Upload from "../../assets/fileupload.svg";

import styles from "../../styles/CreateBuildForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import inputStyles from "../../styles/SignUp.module.css";

function PostCreateForm() {

  const [postData, setPostData] = useState({
    build_name: "",
    content: "",
    main_image: "",
    build_cpu: "",
    build_mobo: "",
    build_ram: "",
    build_disk: "",
    build_gpu: "",
    build_monitor: "",
  });

  const { build_name, content, main_image, build_cpu, build_mobo, build_ram, build_disk, build_gpu, build_case, build_monitor } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(main_image);
      setPostData({
        ...postData,
        main_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const [errors, setErrors] = useState({});

  const textFields = (
    <div className="text-center">
      {/* Add your form fields here */}



      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => { }}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">

              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <BuildImage className={styles.Svg} src={Upload} message="Click or tap to upload your main image" />
              </Form.Label>

 
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>BUILD NAME</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_name" value={build_name}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>TELL US ABOUT THE BUILD - PROCESS, ISSUES ETC...</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} as="textarea" rows={8} name="content" value={content}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>CPU</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_cpu" value={build_cpu}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>MOTHERBOARD</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_mobo" value={build_mobo}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>RAM</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_ram" value={build_ram}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>STORAGE</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_disk" value={build_disk}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>GPU</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_gpu" value={build_gpu}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>CASE</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_case" value={build_case}/>
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label>MONITOR</Form.Label>
              <Form.Control onChange={handleChange} className={inputStyles.Input} type="text" name="build_monitor" value={build_monitor} />
            </Form.Group>

            <Form.File onChange={handleChangeImage} id="image-upload"accept="image/*"/>

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;