"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty/empty-org";
import BoardList from "./_components/board-list";

function PageClient() {
  const { organization } = useOrganization();

  return (
    <>{organization ? <BoardList orgId={organization.id} /> : <EmptyOrg />}</>
  );
}

export default PageClient;
