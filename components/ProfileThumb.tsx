import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function ProfileThumb() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default ProfileThumb;
