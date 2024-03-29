import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

const Cite = require("citation-js");

const About = () => {
    const data = useStaticQuery(graphql`
        query BibQuery {
            file(name: { eq: "qe4nime" }, extension: { eq: "bib" }) {
                internal {
                    content
                }
            }
        }
    `);

    const bib = new Cite(data.file.internal.content);

    function filterByIdValues(values: any) {
        return bib.data.filter(function (item: any) {
            return values.includes(item["id"]);
        });
    }

    const cite = (keys: any) => {
        let filteredArray = filterByIdValues(keys);
        const output = new Cite(filteredArray);
        return output.format("citation", {
            format: "text",
        });
    };

    function printBib() {
        return bib.format("bibliography", {
            format: "html",
        });
    }

    function insertBreakBetweenDivs(html: any) {
        return html.replace(/<\/div>/g, " </div><br>");
    }

    function linkifyUrls(html: any) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return html.replace(urlRegex, function (url: any) {
            return `<a class="link-primary" href="${url}" target="_blank">${url}</a>`;
        });
    }

    return (
        <Container fluid as="section" className="bg-light" id="about">
            <Container className="px-0">
                <Row className="gx-5 py-5">
                    <h2>About the workshop</h2>
                    <p>First, let's unpack the title of the workshop:</p>
                    <h4>What do we mean by "experience"?</h4>
                    <p>
                        <em>Experience</em> itself is a multi-faceted concept;
                        HCI views experience as the subjective aspects of
                        interaction with technology, while psychology associates
                        experience with learning and acquiring knowledge from
                        the world. DMI research has involved a little of both:
                        musical interaction is inherently subjective and
                        dependent on the background and previous interactions of
                        all involved——musicians, DMI designers, listeners. As
                        well, this existing knowledge shapes how we approach our
                        musical craft, how we learn new musical interactions
                        based on ones we know already, and how our role in the
                        world influences our music. Experience in this
                        subjective and context-dependent definition is therefore
                        critical to the study of DMIs, their design, use, and
                        role in music performance.
                    </p>
                    <h4>What do we mean by "querying"?</h4>
                    <p>
                        Querying is a process of asking questions and seeking
                        answers. In this workshop, we will explore different
                        methods of enquiry as they have been used by the
                        organisers and invited speakers.
                    </p>
                    <hr className="my-4" />
                    <h3>Methodologies</h3>
                    <p>
                        Our workshop will be based on a series of short
                        presentations, followed by hands-on experience observing
                        and participating in their processes. We will explore
                        the following methodologies:
                    </p>
                    <h4>Somaesthetics</h4>
                    <p>
                        Somaesthetics {cite("shusterman2008")} is a term that
                        combines <em>soma</em>&#8212;our non-dualistic
                        subjective self, body, emotion, and thinking&#8212;and{" "}
                        <em>aesthetics</em>&#8212;as in our ability to
                        perceptually appreciate the world around us, what we
                        feel, hear, see and engage with {cite("hook2018a")}. It
                        has been proposed that soma design has an important and
                        distinctive role to play in the design of NIMEs that
                        emphasise the aesthetics of playing an instrument
                        alongside the generation of sound{" "}
                        {cite("martinezavila2020")}. It presents a novel
                        approach to NIME design which is grounded in the
                        performer’s subjective experience of their body in
                        performance {cite("cotton2021")}.
                    </p>
                    <h4>Micro-phenomenology</h4>
                    <p>
                        Micro-phenomenology {cite("petitmengin2006")} is a
                        qualitative method that is being used in HCI/design{" "}
                        {cite("prpa2020")} for articulating the nuances,
                        complexity and diversity of users' experiences beyond
                        surface descriptions. In NIME, it has been used to
                        research perception, and to understand interaction and
                        performance with digital musical instruments{" "}
                        {cite("reed2022")}.
                    </p>
                    <h4>Dialogic design</h4>
                    <p>
                        Dialogic design {cite(["wright2018", "gatehouse2020a"])}{" "}
                        is a subset of participatory design (PD) which
                        highlights the significance of multidirectional flow of
                        ideas, getting back to PD’s radical origins of workplace
                        user involvement in Scandinavia. As a method in NIME, it
                        can be used to articulate the experience of the
                        performer and channel it into specific design decisions{" "}
                        {cite("zayas-garin2022")}.
                    </p>
                    <h4>Retrospective trioethnography</h4>
                    <p>
                        Retrospective trioethnography {cite("howell2021")},
                        rooted in autoethnography {cite("ellis2011")}, is a
                        method in which design researchers turn the lens on
                        themselves and their design process, allowing first-hand
                        experience to spark new insights, treating subjectivity
                        and emotions as central to research. Particularly,
                        duoethnography and trioethnography are based on the
                        juxtaposition of the personal experiences of two or
                        three affined researchers, with emphasis given to the
                        dialogical relationship between their lived experiences.
                        Its potential for NIME is in its ability to challenge
                        existing narratives and discover new ways of reporting
                        on our design processes.
                    </p>
                    <hr className="my-4" />
                    <h3>References</h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: linkifyUrls(
                                insertBreakBetweenDivs(printBib())
                            ),
                        }}
                    />
                </Row>
            </Container>
        </Container>
    );
};

export default About;
