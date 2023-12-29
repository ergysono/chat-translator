import ChatList from "@/components/ChatList";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};
function ChatsPage() {
  return (
    <div>
      <ChatList />
    </div>
  );
}

export default ChatsPage;
