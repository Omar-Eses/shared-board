import Image from "next/image";

function EmptyFavorite() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-favorite.svg"}
        alt="No Favorites"
        width={250}
        height={250}
      />
      <h2 className="text-2xl font-semibold mt-6">No favorites found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting some boards to see them here
      </p>
    </div>
  );
}

export default EmptyFavorite;
