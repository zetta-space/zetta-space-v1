import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Toggle } from "./ui/toggle";
import Link from "next/link";

function Thumbnail() {
  return (
    <>
      <Link href={"/article/b9d7449e-7cce-11ee-b962-0242ac120002"} className="hover:shadow-md hover:rounded-md">
        <Card>
          <CardHeader className="px-2">
            <figure>
              <Image
                alt="img"
                src={"https://i.ibb.co/m0BRWS4/thumbnail-01.jpg"}
                width={300}
                height={250}
                className="rounded-md"
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
      </Link>
    </>
  );
}

export default Thumbnail;
