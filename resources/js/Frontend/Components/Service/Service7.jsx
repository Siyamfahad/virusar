import Div from "@/Frontend/Components/Div";
import SectionHeading from "@/Frontend/Components/SectionHeading";
import Spacing from "@/Frontend/Components/Spacing";
import {useState} from "react";
import {Link} from "@inertiajs/react";

export default function Service7({service_data}){
    const services = service_data.services;
    const [active, setActive] = useState(0);
    const handelActive = index => {
        setActive(index);
    };
    return(
        <Div className="container">
            <SectionHeading
                title={service_data.title}
                subtitle={service_data.sub_title}
                variant="cs-style1 text-center"
            />
            <Spacing lg="70" md="45" />
            <Div className="cs-iconbox_3_list cs-style2">
                {services.map((item, index) => (
                    <Div
                        className={`cs-hover_tab ${active === index ? 'active' : ''}`}
                        key={index}
                        onMouseEnter={() => handelActive(index)}
                    >
                        <Link href={item.action_url} className="cs-iconbox cs-style3">
                            <>
                                <Div className="cs-image_layer cs-style1 cs-size_md">
                                    <Div className="cs-image_layer_in">
                                        <img
                                            src={item.thumbnail_image}
                                            alt="Thumb"
                                            className="w-100 cs-radius_15"
                                        />
                                    </Div>
                                </Div>
                                <span className="cs-iconbox_icon cs-center">
                                    <svg
                                        width={30}
                                        height={29}
                                        viewBox="0 0 30 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                          d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                                          fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                <Div className="cs-iconbox_in">
                                    <h2 className="cs-iconbox_title">{item.title}</h2>
                                    <Div className="cs-iconbox_subtitle">{item.description}</Div>
                                </Div>
                            </>
                        </Link>
                    </Div>
                ))}
            </Div>
        </Div>
    )
}
