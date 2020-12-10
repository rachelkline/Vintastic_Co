import React from "react";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends React.Component {
    render(){
        return(
            <div className={classNames("sidebar shadow", { "is-open": this.props.isOpen })}>
          
            <div className="flex-column pl-5 ml-5">
              {/* <Button
                variant="link"
                // onClick={this.props.toggle}
                style={{ color: "#fff" }}
                className="mt-4"
              > TEST
              </Button> */}
            </div>
            <br />
            <Nav className="flex-column pt-2 pl-3">
          {/* <p className="ml-3">Heading</p> */}

          <Nav.Item >
            <Nav.Link href="/large-art">
              large artwork
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/medium-art">
              medium artwork
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/small-art">
              small artwork
            </Nav.Link>
          </Nav.Item>

        </Nav>


            </div>
        )
    }
}

export default SideBar;