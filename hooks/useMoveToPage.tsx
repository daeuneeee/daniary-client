'use client';

import { useRouter } from 'next/navigation';

export function useMoveToPage() {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return {
    onClickMoveToPage,
  };
}
