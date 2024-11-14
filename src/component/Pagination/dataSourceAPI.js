import { BuildApiUrl } from "@/src/hooks/APIsFunctions/BuildApiUrl";

export const dataSourceAPI = (query, skip, take) =>
  BuildApiUrl(query, {
    pageIndex: skip + 1,
    pageSize: take,
    ...rowDetails,
  });
