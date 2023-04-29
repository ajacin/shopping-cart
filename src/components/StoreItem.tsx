import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 1;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {quantity === 0 ? (
          <Button>Add</Button>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <Button> + </Button>
              <div>
                <span className="fs-2">{quantity}</span> items
              </div>
              <Button> - </Button>
            </div>
            <Button variant="danger">Delete</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
