import { useMutation } from "convex/react";
import { FunctionReference, FunctionReturnType } from "convex/server";
import { useState } from "react";

export const useApiMutation = <T extends FunctionReference<"mutation">>(
  mutationFunction: T,
) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = async (payload: T["_args"]) => {
    setPending(true);
    return await apiMutation(payload)
      .finally(() => setPending(false))
      .then((result: FunctionReturnType<T>) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };

  return { mutate, pending };
};
