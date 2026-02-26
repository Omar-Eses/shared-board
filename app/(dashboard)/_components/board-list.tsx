import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useSearchParams } from "next/navigation";
import EmptyBoards from "./empty/empty-boards";
import EmptyFavorite from "./empty/empty-favorite";
import EmptySearch from "./empty/empty-search";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";
import { cn } from "@/lib/utils";

interface BoardListProps {
  orgId: string;
}

function BoardList({ orgId }: BoardListProps) {
  const boardsData = useQuery(api.boards.get, { orgId });

  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const favorites = searchParams.get("favorites");

  if (boardsData === undefined) {
    return <BoardList.Skeleton orgId={orgId} favorites={!!favorites} />;
  }

  if (!boardsData.length && search) {
    return <EmptySearch />;
  }

  if (!boardsData.length && favorites) {
    return <EmptyFavorite />;
  }

  if (!boardsData.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2>{favorites ? "Favorites" : "All Boards"}</h2>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2",
          "md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10",
        )}
      >
        <NewBoardButton orgId={orgId} />
        {boardsData.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            creationTime={board._creationTime}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardList;

BoardList.Skeleton = function BoardListSkeleton({
  favorites,
  orgId,
}: {
  favorites?: boolean;
  orgId: string;
}) {
  return (
    <div>
      <h2>{favorites ? "Favorites" : "All Boards"}</h2>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2",
          "md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10",
        )}
      >
        <NewBoardButton orgId={orgId} />
        <BoardCard.Skeleton />
        <BoardCard.Skeleton />
        <BoardCard.Skeleton />
        <BoardCard.Skeleton />
      </div>
    </div>
  );
};
