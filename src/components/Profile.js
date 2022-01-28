import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardImg,
    CardColumns,
    Row,
    Col,
} from "reactstrap";

function Profile() {
    return (
        <CardColumns xs="1" style={{marginTop:"20%"}}>
            <Card style={{borderRadius:"15px"}}>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    style={{borderRadius:"15px",width:"100%"}}
                />
                <CardBody>
                    <CardImg
                        src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.6435-9/75439314_826143214469598_3605509759479840768_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEp4ynTAPWugq9LubQSfoSI6Qm4UYMEQTrpCbhRgwRBOqp8ToeHQPN907HJbgPGAfaJAuTacK2o8vv0SYrm0ZI9&_nc_ohc=ncoe60UkaMMAX_DzXJ-&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT-zLXEw7tnXYaf4O3QytyQb3t6j-88tUS9udRg0ZLQwMA&oe=6217C7ED"
                        style={{borderRadius:"150px",width:"100px"}}
                    />
                    <Button outline size="sm" textAlign="right" style={{borderRadius:"15px"}}>
                        แก้ไขข้อมูล
                    </Button>
                    <CardTitle tag="h5">Com_Yannasit</CardTitle>
                    
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        @Yannasit Santiekachun
                    </CardSubtitle>
                    <CardText>
                        <Row md="3" sm="1">
                            <Col>
                                <h4>1</h4>
                                <p>โพสต์</p>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </CardColumns>
    );
}

export default Profile;
