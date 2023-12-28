import ChatList from "@/components/ChatList";
import React from "react";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};
function ChatsPage() {
  return <ChatList />;
}

export default ChatsPage;
