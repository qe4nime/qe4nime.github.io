import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";

const People = () => (
    <Container fluid as="section" className="bg-light" id="people">
        <Container className="px-0 py-5">
            <h2>Organisers</h2>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Courtney Nicole Reed"
                        className="rounded-circle"
                        src="../images/courtney.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://courtneynreed.wordpress.com/"
                            target="_blank"
                        >
                            Courtney Nicole Reed
                        </a>{" "}
                        is a postdoctoral researcher at King's College London.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Eevee Zayas-Garin"
                        className="rounded-circle"
                        src="../images/eevee.jpeg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://eeveezayas.com/"
                            target="_blank"
                        >
                            Eevee Zayas-Garin
                        </a>{" "}
                        is a PhD student at Queen Mary University of London.
                        They are a design engineer and musician who also
                        explores the mediums of poetry and photography. Their
                        research focuses on accessibility, lived experience and
                        replicability in digital musical instrument design.
                        Drawing from disability justice perspectives, they work
                        towards developing NIME research methods that engage
                        with matters of access, articulating experience and
                        instrument longevity.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Andrew McPherson"
                        className="rounded-circle"
                        src="../images/andrew.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://andrewmcpherson.org/"
                            target="_blank"
                        >
                            Andrew McPherson
                        </a>{" "}
                        is a Professor of Design Engineering and Music in the
                        Dyson School of Design Engineering, Imperial College
                        London, where he leads the Augmented Instruments
                        Laboratory. He is a computing researcher, composer,
                        electronic engineer, and musical instrument designer.
                    </p>
                </Col>
            </Row>
            <h2>Featured speakers</h2>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Kelsey Cotton"
                        className="rounded-circle"
                        src="../images/kelsey.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://www.kelseycotton.com/"
                            target="_blank"
                        >
                            Kelsey Cotton
                        </a>{" "}
                        is a vocalist-artist-mover working with experimental
                        music, Musical Artificial Intelligence, electronic
                        textiles, soft-robotics, and Human-Computer Interaction.
                        As a researcher, Kelsey is fascinated with pushing the
                        limits of musical bodies, with her recent work delving
                        deeper into designing artifacts which harness, augment
                        and fuse different physiologies. She is passionate about
                        somatic interaction, the potential for intersomatic
                        experiences between fleshy and synthetic bodies, and
                        first-person feminist perspectives of musical AI. Kelsey
                        is currently undertaking PhD studies in Interactive
                        Music and AI at Chalmers University of Technology in
                        Gothenburg, Sweden.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    {/* <StaticImage
                        alt="Portrait photo of Noura Howell"
                        className="rounded-circle"
                        src=""
                        width={189}
                    /> */}
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://nourahowell.com/"
                            target="_blank"
                        >
                            Noura Howell
                        </a>{" "}
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    {/* <StaticImage
                        alt="Portrait photo of Juan Pablo Martinez Avila"
                        className="rounded-circle"
                        src=""
                        width={189}
                    /> */}
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://zavilaz.wordpress.com/"
                            target="_blank"
                        >
                            Juan Pablo Martinez Avila
                        </a>{" "}
                    </p>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default People;
