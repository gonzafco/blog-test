import Navbar from "../../components/Navbar";
import ActionsPanel from "../../components/ActionsPanel";
import Feed from "../../components/Feed";
import MoreContent from "../../components/MoreContent";

export default function Home() {
  return (
    <>
      <Navbar />
      <ActionsPanel />
      <Feed />
      <MoreContent />
    </>
  );
}
