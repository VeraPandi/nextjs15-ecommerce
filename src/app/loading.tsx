import { HomePageSkeleton } from "./ui/skeletons";

interface LoadingProps {
  currentPage: number;
}

export default function Loading({ currentPage }: LoadingProps) {
  return <HomePageSkeleton currentPage={currentPage} />;
}
