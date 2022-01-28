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
} from "reactstrap"; 

function Post({ color }) {
  return (
    <CardColumns>
      <Card>
      
      <CardTitle tag="h5">Nutthapon Saefong</CardTitle>
     
      <CardText>
      หาเพื่อนเที่ยวเชียงใหม่ ในช่วงปีใหม่นี้ครับ
            <Button style={{ margin: "10px", backgroundColor:"Pink"}}>+เข้าร่วม</Button>
          </CardText>
      
        <CardImg
         
          src="https://picsum.photos/256/186"
         
          width="100%"
        />
        <CardBody>
          
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardColumns>
  );
}

export default Post;
