import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Toggle } from "./ui/toggle";

function Thumbnail() {
  return (
    <>
      <Card>
        <CardHeader>
          <figure>
            <Image
              alt="img"
              src={
                "https://unsplash.com/photos/a-red-book-sitting-on-top-of-a-white-table-i25aqE_YUZs"
              }
              width={300}
              height={250}
            />
          </figure>
        </CardHeader>
        <CardContent>
          <h2 className="font-bold text-3xl text-slate-600">Card Title</h2>
          <Badge>Hot</Badge>
        </CardContent>
        <CardFooter className="border-t-[1px]">
          <div className="flex justify-between items-center w-full pt-3">
            <Toggle>Upvote</Toggle>
            <Toggle>Downvote</Toggle>
            <Toggle>Share</Toggle>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default Thumbnail;
