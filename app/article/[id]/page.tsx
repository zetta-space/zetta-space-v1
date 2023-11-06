import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import React from "react";

function ArticlePage() {
  return (
    <div className="mt-4 py-32 px-9">
      <div className="w-full h-[400px] bg-blue-100">header img</div>
      <div>
        <section className="flex flex-row ">
          <div>avatar</div>
          <div>name</div>
          <div>publshed date</div>
          <div>totla read time</div>
        </section>
        <section>
          <div>
            <Toggle>Upvote</Toggle>
            <Toggle>DownVote</Toggle>
            <Toggle>Comments</Toggle>
          </div>
          <div>
            <Badge>Bookmark</Badge>
          </div>
        </section>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <h2>Title</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              doloribus vero aut animi, laborum saepe minima iusto voluptates
              odio ratione fugiat eveniet nihil incidunt, in quaerat nesciunt
              quidem a voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolor fugiat omnis quibusdam voluptatem? Iusto nobis quae eveniet
              officiis officia. Obcaecati doloribus hic repellat explicabo.
              Perferendis fugit unde quam ea.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ArticlePage;
