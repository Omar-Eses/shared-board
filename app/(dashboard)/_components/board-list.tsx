import { useSearchParams } from "next/navigation";
import EmptySearch from "./empty/empty-search";
import EmptyFavorite from "./empty/empty-favorite";
import EmptyBoards from "./empty/empty-boards";

interface BoardListProps {
  orgId: string;
}

function BoardList({ orgId }: BoardListProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const favorites = searchParams.get("favorites");
  const data = [];
  if (!data.length && search) {
    return <EmptySearch />;
  }

  if (!data.length && favorites) {
    return <EmptyFavorite />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify({ orgId, search, favorites })}</div>;
}

export default BoardList;
