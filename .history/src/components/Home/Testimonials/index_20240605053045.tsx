'use client'
import React, { CSSProperties, useState } from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

export default function Testimonials() {
    const buttonStyles: CSSProperties = {
        background: '#0C4949',
        color: 'white',
        padding: '6px 10px',
        border: 'none',
        borderRadius: '4px',
        marginTop: '5px'
    }
    const [status, setStatus] = useState("")
    const openVideo = (): void => {
        setStatus("Video currently unavailable.")
        setTimeout(() => {
            setStatus('')
        }, 2500);
    }
    return (
        <MDBContainer className="my-5">
            <MDBCarousel dark>

                <MDBCarouselItem className="active text-center">
                    <img
                        src="/images/avatar.jpeg"
                        alt="avatar"
                        className="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 className="mb-3">Kepha</h5>
                            <p>Medical student (Co-founder, Greencal Foundation)</p>
                            <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                As a medical student witnessing the healthcare struggles faced by many in Abakaliki, I knew I had to act. Greencal Foundation allows me to combine my medical knowledge with a passion for social justice. Working alongside Adum and our dedicated team, {`we're`} actively improving access to quality healthcare in underserved communities. Together, {`we're`} building a healthier Abakaliki, one step at a time.
                                {" "}<MDBIcon fas icon="quote-right" className="pe-2" />
                            </p>
                            <button onClick={() => openVideo()} style={{ ...buttonStyles }}>
                                <i></i>
                                Watch Video
                            </button>
                            <div className="title-color mt-3 font-weight-bold">
                                {status}
                            </div>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem>
                
                <MDBCarouselItem className="text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        className="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 className="mb-3">CHIJIOKE NWANKWO</h5>
                            <p>Software Engineer, Lagos, Nigeria
                            </p>
                            <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                Greenhub Foundation has been a beacon of hope for children in our community. Their dedication to education and scholarships is changing lives and shaping a brighter future.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem>

                <MDBCarouselItem className="text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        alt="avatar"
                        className="rounded-circle shadow-1-strong mb-4"
                        style={{ width: "150px" }}
                    />
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="8">
                            <h5 className="mb-3">IBRAHIM ABDULLAHI</h5>
                            <p>Education Advocate, Kano, Nigeria</p>
                            <p className="text-muted">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                As an education advocate, I applaud Greenhub {`Foundation's`} commitment to empowering young minds. The scholarships offered are instrumental in bridging the gap and creating opportunities for deserving students.
                            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>
    );
}

