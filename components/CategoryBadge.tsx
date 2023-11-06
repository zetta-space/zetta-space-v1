import Link from "next/link";
import React from "react";

function CategoryBadge({ prop }: Badge) {
  return (
    <Link href={"/"} className="badge-category capitalize" role="link">
      {prop}
    </Link>
  );
}

export default CategoryBadge;
